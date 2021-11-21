import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Bobur pizzallari </h1>
        <p>HAR QANDAY TAMGA UYG'UNLASHA OLADI.</p>
        <Link to="/menu">
          <button>BUYURTMA QILISH</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;