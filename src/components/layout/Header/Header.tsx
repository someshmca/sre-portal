import { Menu } from 'lucide-react';
import { SearchBox } from './SearchBox';
import { HeaderActions } from './HeaderActions';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.headerInner}>
      <div className={styles.leftSection}>
        <span className={styles.logoText}>Reliability Engineering</span>
        <button className={styles.menuBtn}>
          <Menu size={24} />
        </button>
      </div>

      <div className={styles.centerSection}>
        <SearchBox />
      </div>

      <div className={styles.rightSection}>
        <HeaderActions />
      </div>
    </div>
  );
};

export default Header;