import "../styles/Cards.css";
import { courses } from "../components/data/Data.jsx";

const Cards = () => {
  return (
    <div className="container__cards">
      {courses.map((item, index) => (
        <div key={index}>
          <h3>{item.titulo}</h3>
          <h4>{item.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default Cards;
