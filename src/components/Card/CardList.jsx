import { useState } from 'react';
import categoriesData from './Card.json';
import CardItem from './CardItem';
import './Card.css';

function CardList() {
  const [categories] = useState([...categoriesData]);

  const mapCategories = category => (
    <CardItem key={category.id} category={category} />
  );

  return <ul className="categoriesList">{categories.map(mapCategories)}</ul>;
}

export default CardList;
