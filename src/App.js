import React from 'react'

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock/index'
import Skeleton from './components/PizzaBlock/Skeleton';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://63c6867c4ebaa8028547adb6.mockapi.io/Items')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <PizzaBlock {...obj} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;