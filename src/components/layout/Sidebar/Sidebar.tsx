import { 
    LayoutDashboard, Settings, Bell, BarChart3, 
    ShieldAlert, HardDrive, Receipt, Layers, Briefcase, Package 
  } from 'lucide-react';
  import { SidebarSection } from './SidebarSection';
  import { MenuItem } from './MenuItem';
  import styles from './Sidebar.module.scss';
  
  const Sidebar = () => {
    return (
      <nav className={styles.sidebarNav}>
        {/* Top Level Menus */}
        <SidebarSection>
          <MenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <MenuItem icon={<Settings size={18} />} label="Configuration" />
          <MenuItem icon={<Bell size={18} />} label="Alerts" />
        </SidebarSection>
  
        {/* Metrics Section */}
        <SidebarSection title="Metrics">
          <MenuItem icon={<BarChart3 size={18} />} label="Business Golden sign" hasDropdown />
          <MenuItem icon={<Package size={18} />} label="Sephora" hasDropdown />
          <MenuItem icon={<ShieldAlert size={18} />} label="Reliability incidents" />
          <MenuItem icon={<HardDrive size={18} />} label="Infrastructure" />
          <MenuItem icon={<Receipt size={18} />} label="Error budget" />
          <MenuItem icon={<Layers size={18} />} label="Tier-1 applications" />
        </SidebarSection>
  
        {/* Common Services Section */}
        <SidebarSection title="Common Services">
          <MenuItem icon={<Briefcase size={18} />} label="Product Information" hasDropdown />
        </SidebarSection>
  
        {/* Stores and Digital Section */}
        <SidebarSection title="Stores and Digital">
          {["Associate", "Shop", "Post purchase", "Reliability", "Loyalty & Retail Services"].map(item => (
            <MenuItem key={item} label={item} hasDropdown />
          ))}
        </SidebarSection>
      </nav>
    );
  };
  
  export default Sidebar;