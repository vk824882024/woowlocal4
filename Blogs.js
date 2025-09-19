import React from 'react'
import Slider from 'react-slick'
import { Card, Button } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import banner2 from './banner2.png'
// Custom arrow components for react-slick
const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <button
      className={className}
      style={{ ...style, display: 'block', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', border: 'none', width: 40, height: 40 }}
      onClick={onClick}
      aria-label="Next"
    />
  )
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <button
      className={className}
      style={{ ...style, display: 'block', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', border: 'none', width: 40, height: 40 }}
      onClick={onClick}
      aria-label="Previous"
    />
  )
}

const sampleCards = [
  {
    title: 'Card One',
    text: 'This is a short description for card one. Use any content here.' ,
    img:banner2,
  },
  {
    title: 'Card Two',
    text: 'Second card with a little longer text to show alignment.',
    img: banner2,
  },
  {
    title: 'Card Three',
    text: 'Third card — perfect for product preview or testimonial snippets.',
    img: banner2,
  },
  {
    title: 'Card Four',
    text: 'Fourth card — repeat the pattern as many times as you need.',
    img: banner2,
  },
  {
    title: 'Card Five',
    text: 'Fifth card — responsive layout will show fewer cards on small screens.',
    img: banner2,
  }
]

export default function ReactSlickBootstrapCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992, // <992px
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576, // <576px
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div className="container-fluid py-4" style={{backgroundColor:"#C1F52F"}}>
      <h3 className="mb-3">News</h3>
      <Slider {...settings}>
        {sampleCards.map((c, idx) => (
          <div key={idx} className="px-2">
            <Card className="h-100 container shadow-sm">
              <div style={{ overflow: 'hidden' }}>
                <Card.Img variant="top" src={c.img} style={{ objectFit: 'fill', width: '100%', height: '100%' }} />
              </div>
              <Card.Body className="d-flex flex-column bg-warning">
                <Card.Title>{c.title}</Card.Title>
                <Card.Text className="flex-grow-1">{c.text}</Card.Text>
                <a href='#' className="btn btn stretched-link"></a>
                <div className="mt-2">
                  <Button variant="primary">Action</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  )
}
