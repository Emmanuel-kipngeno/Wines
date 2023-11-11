import { useEffect, useState } from "react";
import WineCart from "./WineCart";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const WineCategory = ({
  image,
  name,
  wine_type,
  price_750ml,
  price_1litre,
}) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const [count, setCount] = useState(0);

  const handleLikeClick = () => {
    setCount(count + 1);
  };

  const handleDescriptionClick = () => {
    alert(`My name is ${name} and i'm the finest wine in town.ENJOY`);
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span>{wine_type}</span>
      <p>750ml kshs {price_750ml}</p>
      <p>1litre kshs {price_1litre}</p>
      <div className="btn-icons">
        <button className="cat-btn" onClick={handleDescriptionClick}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>
        <button className="cat-btn" onClick={handleLikeClick}>
          <FontAwesomeIcon icon={faHeart} />
          {count}
        </button>
        <button className="cat-btn" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

const CategoryList = () => {
  const [wineCategory, setWineCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/wines")
      .then((res) => res.json())
      .then((wines) => {
        setWineCategory(wines);
      });
  }, []);

  return (
    <>
      <div className="category">
        <h2 className="hero-text">Available Wine Brands</h2>
        <div className="card-container">
          {wineCategory.map((wine) => (
            <WineCategory
              key={wine.id}
              image={wine.image}
              name={wine.name}
              wine_type={wine.wine_type}
              price_750ml={wine.price_750ml}
              price_1litre={wine.price_1litre}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
