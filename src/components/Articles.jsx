import "../styles/Articles.css";
import { articles } from "./data/Data";

const Articles = () => {
  return(
    <div className="articles">
      {articles.map((item, index) => (
        <div className="content__articles" key={index}>
          <div className="article__grande">
            <img src={item.imgArticle}/>
            <p>{item.tituloArticle}</p>
          </div>
          <div className="article__pequeño">
            <button>{item.vistas}</button>
            <h6>Read More</h6>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Articles