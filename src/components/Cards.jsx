import "../styles/Cards.css";
import { courses } from "../components/data/Data.jsx";

const Cards = () => {
  return (
    <div className="container__cards">
      {courses.map((item, index) => (
        <div className="cards" key={index}>
          <div className="cards__grande">
            <div className="cards__img">
              <img src={item.img}/>
            </div>
            <div className="cards__texto">
              <h3>{item.titulo}</h3>
              <p>Author: {item.autor}</p>
              <p>Duration: {item.duration}</p>
              <p>Lifetime: Support</p>
            </div>
          </div>
          <div className="cards__pequeña">
            <div className="cards__precio">
              <h4>Price: {item.price}</h4>
              <h6>Old Price: {item.oldPrice}</h6>
            </div>
            <div className="btn">
              <button>{item.students}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
