import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FAQ = ({ question, answer }) => {
  const [ansShow, setAnsShow] = useState(false)
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button
          className="faq__icon"
          onClick={() => setAnsShow((prev) => !prev)}
        >
          {ansShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {ansShow && <p>{answer}</p>}
    </article>
  )
}

export default FAQ
