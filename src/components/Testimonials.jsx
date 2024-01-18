import { useState } from 'react'
import Card from '../UI/Card'
import SectionHead from './SectionHead'
import { ImQuotesLeft } from 'react-icons/im'
import { testimonials } from '../data'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'

const Testimonials = () => {
  const [idx, setIdx] = useState(0)
  const { name, quote, job, avatar } = testimonials[idx]

  const prevTestimonial = () => {
    setIdx((prev) => prev - 1)
    if (idx <= 0) {
      setIdx(testimonials.length - 1)
    }
  }
  const nextTestimonial = () => {
    setIdx((prev) => prev + 1)
    if (idx >= testimonials.length - 1) {
      setIdx(0)
    }
  }

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button className="testimonials__btn" onClick={prevTestimonial}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonials__btn" onClick={nextTestimonial}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
