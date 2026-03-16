import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const currentPath = location.pathname;
  
    // 1. UNIQUE PATH LOGIC:
    // A parent is active if the current URL is exactly its path 
    // OR if the current URL starts with its path + a slash (nested route)
    const isParentActive = currentPath === to || currentPath.startsWith(`${to}/`);
  
    // 2. INITIALIZE STATE: 
    // Start open if we are in this specific route hierarchy
    const [isOpen, setIsOpen] = useState(() => isParentActive);
  
    const handleToggle = () => {
      if (hasDropdown) {
        setIsOpen(!isOpen);
      }
    };
  
    return (
      <div className={styles.menuItemWrapper}>
        <NavLink 
          to={to} 
          // Force the active class based on our unique path logic
          className={() => 
            `${styles.menuItem} ${isParentActive ? styles.active : ''}`
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
  
        {hasDropdown && isOpen && subItems && (
          <div className={styles.dropdownContent}>
            {subItems.map((sub, index) => (
              <NavLink 
                key={`${sub.label}-${index}`} 
                to={sub.to} 
                className={({ isActive }) => 
                  // Sub-items only highlight if their specific unique path is hit
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