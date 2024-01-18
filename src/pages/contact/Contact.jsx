import Header from '../../components/Header'
import H2 from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsMessenger } from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={H2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        doloremque illum aspernatur! Quaerat ipsam eligendi magni ullam dicta
        laboriosam fuga?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:mk5504475@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://wa.me/+917004132739"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://m.me/mukeshkr55"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
