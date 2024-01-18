import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer-Img" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui
            soluta enim eius quod repellendus ut, sint veniam reiciendis
            quaerat?
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2024 MUKESH &copy; All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
