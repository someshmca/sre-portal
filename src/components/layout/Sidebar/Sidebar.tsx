import * as Icons from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { MenuItem } from './MenuItem';
import styles from './Sidebar.module.scss';
import navData from '../../../data/navigation.json';

interface NavSubItem {
  label: string;
  to: string;
}

interface NavItem {
  label: string;
  to: string;
  icon?: string;
  hasDropdown?: boolean;
  subItems?: NavSubItem[];
}

interface NavSection {
  id: string;
  title?: string;
  items: NavItem[];
}

const Sidebar = () => {
  const sections = navData.sections as NavSection[];

  const renderIcon = (iconName?: string) => {
    if (!iconName) return null;
    
    // Use the LucideIcon type instead of 'any' to satisfy ESLint
    const IconComponent = Icons[iconName as keyof typeof Icons] as Icons.LucideIcon;
    
    return IconComponent ? <IconComponent size={18} /> : null;
  };

  return (
    <nav className={styles.sidebarNav}>
      {sections.map((section) => (
        <SidebarSection key={section.id} title={section.title}>
          {section.items.map((item) => (
            <MenuItem 
              key={item.label}
              icon={renderIcon(item.icon)}
              label={item.label}
              to={item.to}
              hasDropdown={item.hasDropdown}
              subItems={item.subItems}
            />
          ))}
        </SidebarSection>
      ))}
    </nav>
  );
};

export default Sidebar;