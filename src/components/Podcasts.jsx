import "../styles/Podcasts.css"
import { podcasts } from "./data/Data";

const Podcasts = () => {
  return (
    <div className="contenedor__podcasts">
      {podcasts.map((item, index) => (
        <div className="content__podcasts" key={index}>
          <div className="podcasts__grande">
            <div className="img">
              <img src={item.imgAuriculares}/>
            </div>
            <div className="texto">
              <h4>{item.titulo}</h4>
              <p>{item.fecha}</p>
              <p>{item.listened}</p>
            </div>
          </div>
          <div className="podcasts__pequeño">
            <div className="imgPequeño">
              <img src={item.play}/>
              <p>{item.time}</p>
            </div>
            <button>{item.oyentes}</button>
          </div>
        </div>
        
      ))}
    </div>
  )
}

export default Podcasts;