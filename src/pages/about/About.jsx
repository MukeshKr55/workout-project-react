import React from 'react'
import './about.css'
import Header from '../../components/Header'
import H1 from '../../images/header_bg_1.jpg'
import S1 from '../../images/about1.jpg'
import V1 from '../../images/about2.jpg'
import M1 from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={H1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        voluptates at vero ipsa voluptatem officia deserunt dignissimos maiores
        quo. Labore?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={S1} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis sit voluptatem cumque vitae, quasi porro. Cum
              placeat, harum atque corporis vero, voluptates totam corrupti
              voluptatum distinctio facere, earum quae sed.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias necessitatibus sit eius dignissimos quidem sapiente
              debitis explicabo earum, voluptatem itaque porro minus, amet nemo
              cum. Qui repudiandae debitis tenetur! Est.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
              provident quasi! Delectus consequatur neque eveniet.
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis sit voluptatem cumque vitae, quasi porro. Cum
              placeat, harum atque corporis vero, voluptates totam corrupti
              voluptatum distinctio facere, earum quae sed.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias necessitatibus sit eius dignissimos quidem sapiente
              debitis explicabo earum, voluptatem itaque porro minus, amet nemo
              cum. Qui repudiandae debitis tenetur! Est.
            </p>
          </div>
          <div className="about__section-image">
            <img src={V1} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={M1} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis sit voluptatem cumque vitae, quasi porro. Cum
              placeat, harum atque corporis vero, voluptates totam corrupti
              voluptatum distinctio facere, earum quae sed.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias necessitatibus sit eius dignissimos quidem sapiente
              debitis explicabo earum, voluptatem itaque porro minus, amet nemo
              cum. Qui repudiandae debitis tenetur! Est.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
              provident quasi! Delectus consequatur neque eveniet.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
