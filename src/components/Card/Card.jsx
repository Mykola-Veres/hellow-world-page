function CategoryItem({ category: { description, imageSrc } }) {
  return (
    <li>
      <a href="#">
        <div className="categoryImageWrapper">
          <img className="categoryImage" src={imageSrc} alt="Category logo" />
        </div>
        {description}
      </a>
    </li>
  );
}

export default CategoryItem;
