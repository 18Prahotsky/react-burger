import s from "./AppHeader.module.css";
import NavigationPanel from "./NavigationPanel/NavigationPanel";

const AppHeader = () => {
  return (
    <header className={s.appHeader}>
      <NavigationPanel />
    </header>
  );
};

export default AppHeader;
