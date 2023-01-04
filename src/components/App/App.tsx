import { useEffect, useState } from "react";
import s from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import PreLoader from "../PreLoader/PreLoader";
import Modal from "../Modal/Modal";

function App() {
  const [state, setState] = useState({ data: [] });
  const [loading, setLoading] = useState(true);

  const urlData = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    const fetchData = () => {
      fetch(urlData)
        .then((response) => response.json())
        .then((result) => {
          setState(result);
        })
        .catch((err) => alert(err))
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <div className={s.app}>
      <AppHeader />

      {loading ? (
        <PreLoader />
      ) : (
        <main className={s.main}>
          <BurgerIngredients data={state.data} />
          <BurgerConstructor data={state.data} />
        </main>
      )}
    </div>
  );
}

export default App;
