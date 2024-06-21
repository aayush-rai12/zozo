import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import imgbg0 from '../../assets/image/love.png';
import testIMG1 from '../../assets/image/testImg1.jpg';
import testIMG2 from '../../assets/image/testImg2.jpg';

const HomeSection = () => {

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
      <div className="card-container">
        <div className="card card1">
          <img
            src={testIMG1}
            alt="Card 1"
            className="card-image"
          />
          <div className="card-text">
            <h2 className="card-title">Find your love</h2>
          </div>
        </div>
        <div className="card card2">
          <img
            src={testIMG2}
            alt="Card 2"
            className="card-image"
          />
          <div className="card-text">
            <h2 className="card-title">Find your love</h2>
          </div>
        </div>
        <div className="card card3">
          <img
            src={testIMG1}
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
              <button className="zozo-button" variant="primary" onClick={handleShow}>Find Your Love</button>
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
