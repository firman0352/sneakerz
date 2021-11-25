import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className="homepage-wrapper">
            <img src="https://i.ibb.co/tcm3qJ2/Sneakerzz-logos-black.png"
                alt="" />
            <div className="homepage-buttons">
                <a href='./Men' className="btn">
                    Men
                </a>
                <a href='./Women' className="btn">
                    Women
                </a>
                <a href='./about' className="btn">
                    About
                </a>
            </div>
        </div>
    );
}

export default Home;