import "../styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer__container">
      <div className="footer__container1">
        <article className="footer__links">
          <h4>Site links</h4>
          <a href="/articles">Articles</a>
          <a href="/pdcasts">Podcasts</a>
          <a href="/about">About Us</a>
          <a href="/contact">ContactUs</a>
        </article>
        <article className="footer__otherPages">
          <h4>Other Pages</h4>
          <a href="#"> 404 Pages</a>
          <a href="#">Login Register</a>
          <a href="#">Privacy Policy</a>
        </article>
      </div>
      <div className="footer__container2">
        <article className="footer__colaboration">
          <h4>Collaboration</h4>
          <a href="#"> 404 Work With Us</a>
          <a href="#">Afiliate</a>
          <a href="#">Support</a>
        </article>
        <article className="footer__about">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi amet nihil provident commodi recusandae asperiores impedit corrupti nisi tenetur? Perferendis accusamus ratione nobis ullam cum?</p>
          <div className="footer__icons">
            <h6>🤣</h6>
            <h6>👻</h6>
            <h6>🍔</h6>
            <h6>🔍</h6>
        </div>
         </article>
      </div>
    </section>
  );
};

export default Footer;
