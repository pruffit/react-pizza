import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
	const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://63c6867c4ebaa8028547adb6.mockapi.io/Items')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
		window.scrollTo(0,0);
  }, []);
	return (
		<div className='container'>
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
	)
}
export default Home;