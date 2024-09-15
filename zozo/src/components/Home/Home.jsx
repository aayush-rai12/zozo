import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Home.css";
import imgbg0 from '../../assets/image/love.png';
import testIMG1 from '../../assets/image/loveBgm6.jpg';
import testIMG2 from '../../assets/image/loveBgm4.jpg';
import testIMG3 from '../../assets/image/loveBgm3.jpg';

const HomeSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imgbg = {
    backgroundImage: `url(${imgbg0})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const carFeature = (
    <div className="car-feature">
      <div className="card-container" >
        <div className="card card1" data-aos="fade-up">
          <img
            src={testIMG1}
            alt="Card 1"
            className="card-image"
          />
          <div className="card-text" >
            <h2 className="card-title" data-aos="zoom-in-left">Find your love</h2>
          </div>
        </div>
        <div className="card card2" data-aos="fade-up" data-aos-delay="200">
          <img
            src={testIMG2}
            alt="Card 2"
            className="card-image"
          />
          <div className="card-text" >
            <h2 className="card-title" data-aos="zoom-in-left">Find your love</h2>
          </div>
        </div>
        <div className="card card3" data-aos="fade-up" data-aos-delay="400">
          <img
            src={testIMG3}
            alt="Card 3"
            className="card-image"
          />
          <div className="card-text" >
            <h2 className="card-title" data-aos="zoom-in-left">Find your love</h2>
          </div>
        </div>
      </div>
    </div>
  );

  const headerSection = (
    <header className="header" data-aos="fade-down">
      <div className="header-logo">
        <div className="header-icon">❤️</div>
        <span className="header-title">ZOZO</span>
      </div>
      <nav className="header-nav">
        <Link to="/login" className="header-link">
          Log in
        </Link>
        <Link to="/register" className="header-signup">
          Sign Up
        </Link>
      </nav>
    </header>
  );

  const childCardSection = (
    <div className="child-card-section" style={imgbg}>
      <div className="child-card" data-aos="zoom-in">
        <span className="child-icon">👥</span>
        <h2 className="child-title">10k+ Members</h2>
        <p className="child-text">
          Over thousands of people are using happy match
        </p>
      </div>
      <div className="child-card" data-aos="zoom-in" data-aos-delay="200">
        <span className="child-icon">🧠</span>
        <h2 className="child-title">Smart AI</h2>
        <p className="child-text">
          Best match based on an intelligent algorithm
        </p>
      </div>
      <div className="child-card" data-aos="zoom-in" data-aos-delay="400">
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
              <h1 className="main-heading" data-aos="fade-right">
                Find your <span className="heading-span">love</span>
                <br />
                <span className="heading-gradient">By Being Yourself</span>
              </h1>
              <p className="main-paragraph" data-aos="fade-right" data-aos-delay="200">
                We designed a platform for people to find their love without
                being judged.
              </p>
              <button className="zozo-button" variant="primary" onClick={handleShow} data-aos="fade-right" data-aos-delay="400">Find Your Love</button>
              {childCardSection}
            </div>
            {carFeature}
          </div>
          {/* <footer className="footer" ></footer> */}
        </div>
       {/* Modal component with custom classes */}
      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header className="custom-modal-header">
          <Modal.Title className="custom-modal-title">ZOZO Dating</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">Join now and start finding your perfect match!</Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Link to="/register" className="custom-modal-save-button">
          Create Account
        </Link>
        </Modal.Footer>
      </Modal>
      </div>
  );
};

export default HomeSection;
