import s from "./App.module.css";
import AppHeader from "./AppHeader/AppHeader";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className={s.app}>
      <AppHeader />
      <main className={s.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
