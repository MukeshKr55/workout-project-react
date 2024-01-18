import Header from '../../components/Header'
import H5 from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitterX } from 'react-icons/bs'
import './trainers.css'
import Trainer from '../../components/Trainer'

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={H5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quasi
        minima amet dolorum voluptate quod.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <BsTwitterX />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Trainers
