import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые'
  ];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  }
  return(
    <div className="categories">
      <ul>
        {
          categories.map((value, index) => (
            <li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''} key={index}>{value}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default Categories;