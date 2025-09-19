import React from 'react'
import Slider from 'react-slick'
const Section5 = () => {
    const settings = {
    dots: false,            // show navigation dots
    infinite:false,        // infinite loop
    //speed: 500,            // transition speed (ms)
    slidesToShow: 3,       // how many slides visible at once
    slidesToScroll: 1,     // how many to scroll at once
    //autoplay: true,        // auto scroll
    autoplaySpeed: 2000,
    arrow:true,   // 2s per slide
    responsive: [
      {
        breakpoint: 768,   // mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  const items = [
    {
      year: "2021",
      img: "https://picsum.photos/200/150?random=1",
      text: "talabat launches in Kuwait with a goal: to make food ordering simple & easy",
    },
    {
      year: "2022",
      img: "https://picsum.photos/200/150?random=2",
      text: "Expansion to UAE, Bahrain & Oman",
    },
    {
      year: "2023",
      img: "https://picsum.photos/200/150?random=3",
      text: "Expansion to Qatar",
    },
    {
      year: "2024",
      img: "https://picsum.photos/200/150?random=4",
      text: "talabat acquired by Delivery Hero",
    },
    {
      year: "2025",
      img: "https://picsum.photos/200/150?random=5",
      text: "Expansion to Jordan & Egypt. Launch of own-delivery service",
    },
     {
      year: "2026",
      img: "https://picsum.photos/200/150?random=6",
      text: "100 million lifetime orders milestone",
    },
     {
      year: "2019",
      img: "https://picsum.photos/200/150?random=7",
      text: "talabat launches Groceries and Retail Vertical with Local Shops and tMarts",
    },
     {
      year: "2020",
      img: "https://picsum.photos/200/150?random=8",
      text: "Otlob rebrands to talabat in Egypt",
    },
     {
      year: "2021",
      img: "https://picsum.photos/200/150?random=9",
      text: "Expansion to Iraq",
     },
     {
      year: "2022",
      img: "https://picsum.photos/200/150?random=10",
      text: "PostPaid & talabat pro launched",
     },
     {
      year: "2023",
      img: "https://picsum.photos/200/150?random=11",
      text: "talabat launches tech-hub Headquarters in Dubai",
     },
      {
      year: "2024",
      img: "https://picsum.photos/200/150?random=12",
      text: "talabat listed on Dubai Financial Market",
     },
      {
      year: "2025",
      img: "https://picsum.photos/200/150?random=13",
      text: "talabat acquires instashop",
     },
     {
      year: "2026",
      img: "https://picsum.photos/200/150?random=13",
      text: "talabat acquires instashop",
     },
  ];
 
  return (
    <div className='container-fluid' style={{cursor:"grabbing"}}>
         <h2 className="fw-bold mb-4">The big moments that made us</h2>

      <div id='container-fluid' className="container py-4 w-100">
       {/* <h2 className="mb-3">React Slick Example</h2> */}
       <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className=""
            style={{ Width: "20px" }}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.year}
              className="rounded"
              style={{ width: "200px", height: "150px", objectFit: "cover" }}
            />
            {/* Year */}
            <h4 className="fw-bold mt-3">{item.year}</h4>
            {/* Description */}
            <p className="text-muted">{item.text}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default Section5