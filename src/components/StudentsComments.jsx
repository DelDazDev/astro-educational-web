import "../styles/StudentsComments.css";
import {students} from "../components/data/Data";

const StudentsComments = () => {
  return (
    <div className="container__cardsStudents">
      {students.map((item, index) =>(
        <div className="students__cards" key={index}>
          <img src={item.imagen}/>
          <p>{item.texto}</p>
        </div>
      ))}
    </div>
  )
}

export default StudentsComments;