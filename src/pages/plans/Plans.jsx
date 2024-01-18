import Header from '../../components/Header'
import './plans.css'
import H4 from '../../images/header_bg_4.jpg'
import { plans } from '../../data'
import Card from '../../UI/Card'

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={H4}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        inventore consequuntur fugiat? Neque, reprehenderit atque!
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, idx) => {
                  return (
                    <p key={idx} className={!available ? 'disabled' : ''}>
                      {feature}
                    </p>
                  )
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Plans
