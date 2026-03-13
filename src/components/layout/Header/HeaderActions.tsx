import { Plus, Bell, UserCircle, Settings } from 'lucide-react';
import styles from './Header.module.scss';

export const HeaderActions = () => (
  <div className={styles.actions}>
    <button aria-label="Add"><Plus size={20} /></button>
    <button aria-label="Notifications"><Bell size={20} /></button>
    <button aria-label="Profile"><UserCircle size={20} /></button>
    <button aria-label="Settings"><Settings size={20} /></button>
  </div>
);