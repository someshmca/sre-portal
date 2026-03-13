import { Search } from 'lucide-react';
import styles from './Header.module.scss';

export const SearchBox = () => (
  <div className={styles.searchWrapper}>
    <Search size={18} className={styles.searchIcon} />
    <input type="text" placeholder="Search..." className={styles.searchInput} />
  </div>
);