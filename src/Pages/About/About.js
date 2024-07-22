import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Discover a world of literature at your fingertips. Explore our vast collection of books across all genres, from timeless classics to contemporary masterpieces. Whether you're seeking thrilling adventures, heartwarming romances, or insightful non-fiction, Book Haven has something for every reader. Dive in and let your next great read find you!</p>
            <p className='fs-17'>Dive into a world of endless stories and adventures. Explore a vast collection of books from every genre, discover new authors, and find your next favorite read. Join our community of book lovers today!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
