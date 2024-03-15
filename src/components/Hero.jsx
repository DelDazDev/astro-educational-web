import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="container__hero">
      <h1>Learn Coding Easier With AsmrProg</h1>
      <h4>Learn Programming With Coach and Mentor!</h4>
      <div className="btn__hero">
        <button className="btn__see">See Courses</button>
        <button className="btn__what">What Is Coding?</button>
      </div>
      <input type="text" placeholder="Search what you want" />
    </div>
  );
};

export default Hero;
