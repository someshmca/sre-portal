import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import styles from './Sidebar.module.scss';

interface SubItem {
  label: string;
  to: string;
}

interface MenuItemProps {
  icon?: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
  to: string;
  subItems?: SubItem[];
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, label, hasDropdown, to, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate dummy items if none are provided but dropdown is enabled
  // This ensures every 'down arrow' menu has clickable sub-routes
  const effectiveSubItems = (hasDropdown && (!subItems || subItems.length === 0))
    ? [
        { label: "Sub menu 1", to: `${to}/sub-1` },
        { label: "Sub menu 2", to: `${to}/sub-2` }
      ]
    : subItems;

  const handleToggle = () => {
    if (hasDropdown) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.menuItemWrapper}>
      <NavLink 
        to={to} 
        // Using a function for className to handle the 'active' state for the main link
        className={({ isActive }) => 
          `${styles.menuItem} ${isActive ? styles.active : ''}`
        }
        onClick={handleToggle}
      >
        <div className={styles.leftContent}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <span className={styles.label}>{label}</span>
        </div>
        
        {hasDropdown && (
          <span className={styles.arrow}>
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
      </NavLink>

      {/* Render sub-menus only if the dropdown is toggled open */}
      {hasDropdown && isOpen && effectiveSubItems && (
        <div className={styles.dropdownContent}>
          {effectiveSubItems.map((sub, index) => (
            <NavLink 
              key={`${sub.label}-${index}`} 
              to={sub.to} 
              // Added specific subActive class to distinguish from parent active state
              className={({ isActive }) => 
                `${styles.dropdownItem} ${isActive ? styles.subActive : ''}`
              }
            >
              {sub.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};