import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className="about grid-container">
            <h1>About App</h1>
            <p>
                Sneakerzz!! is an app that contains some information about sneaker.
                This app was made to fulfill the Final Assignment of Mobile Device Programming Practicum.
                This app was created using React JS and an API from Rapid API to get the data.
            </p>
            <h2>About Author</h2>
            <img
                src="https://i.ibb.co/WgcTB9r/Capture.png"
                alt="author pic"
            />
            <p>
                My name is Muhammad Firmansyah with NIM 21120119130102 from group 20 of Mobile Device Programming Practicum.
                I am a student of Computer Engineering at Diponegoro University.
            </p>
        </div>
    )
}
