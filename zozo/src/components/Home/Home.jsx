import React from "react";
import "./Home.css";
// import loveline from '../../assets/images/love.png';

const ExampleComponent = () => {
  const imgbg = {
    backgroundImage:
      'url("https://static.vecteezy.com/system/resources/previews/010/853/156/non_2x/heart-abstract-love-symbol-continuous-line-art-drawing-illustration-valentines-day-background-banner-free-png.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const carFeature = (
    <div className="car-feature">
      <div className="card-container">
        <div className="card card1">
          <img
            src="https://via.placeholder.com/300x400/ff9a9e/fad0c4"
            alt="Card 1"
            className="card-image"
          />
          <div className="card-text">
            <h2 className="card-title">Find your love</h2>
          </div>
        </div>
        <div className="card card2">
          <img
            src="https://via.placeholder.com/300x400/a18cd1/fbc2eb"
            alt="Card 2"
            className="card-image"
          />
          <div className="card-text">
            <h2 className="card-title">Find your love</h2>
          </div>
        </div>
        <div className="card card3">
          <img
            src="https://via.placeholder.com/300x400/fbc2eb/a6c1ee"
            alt="Card 3"
            className="card-image"
          />
          <div className="card-text">
            <h2 className="card-title">Find your love</h2>
          </div>
        </div>
      </div>
    </div>
  );

  const headerSection = (
    <header className="header">
      <div className="header-logo">
        <div className="header-icon">❤️</div>
        <span className="header-title">ZOZO</span>
      </div>
      <nav className="header-nav">
        <a href="#" className="header-link">
          Log in
        </a>
        <a href="#" className="header-signup">
          Sign Up
        </a>
      </nav>
    </header>
  );

  const childCardSection = (
    <div className="child-card-section" style={imgbg}>
      <div className="child-card">
        <span className="child-icon">👥</span>
        <h2 className="child-title">10k+ Members</h2>
        <p className="child-text">
          Over thousands of people are using happy match
        </p>
      </div>
      <div className="child-card">
        <span className="child-icon">🧠</span>
        <h2 className="child-title">Smart AI</h2>
        <p className="child-text">
          Best match based on an intelligent algorithm
        </p>
      </div>
      <div className="child-card">
        <span className="child-icon">❤️</span>
        <h2 className="child-title">Perfect Match</h2>
        <p className="child-text">10k+ people are happy using our platform</p>
      </div>
    </div>
  );

  return (
    <div className="main-container">
      {headerSection}
      <div className="content" >
          <div className="content-inner">
            <div className="text-section" >
              <h1 className="main-heading">
                Find your <span className="heading-span">love</span>
                <br />
                <span className="heading-gradient">By Being Yourself</span>
              </h1>
              <p className="main-paragraph">
                We designed a platform for people to find their love without
                being judged.
              </p>
              <button className="cta-button">Find Your Love</button>
              {childCardSection}
            </div>
            {carFeature}
          </div>
          {/* <footer className="footer" ></footer> */}
        </div>
      </div>
  );
};

export default ExampleComponent;
