import "../styles/Fromulario.css"

const Formulario = () => {
  return(
    <div className="container__form">
      <div>
        <button className="btn__header"
          >Try it free 7 days <span>then $20/mo. thereafter</span></button
        >
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button className="btn__form">Claim your frre trial</button>
        </form>
      </div>
    </div>
  )
}

export default Formulario;