import './gallery.css'
import Header from '../../components/Header'
import H3 from '../../images/header_bg_3.jpg'

const Gallery = () => {
  const galleryLen = 15
  const images = []

  for (let i = 1; i <= galleryLen; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallery" image={H3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam
        exercitationem quos. Perferendis, rem architecto?
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, idx) => {
            return (
              <article key={idx}>
                <img src={image} alt={`Gallery_Img${idx + 1}`} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery
