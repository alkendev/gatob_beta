import React, { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import EventInfo from './EventInfo'
import fonteyn from '../app/assets/fonteyn.avif'
import live from '../app/assets/live.avif'
import photo from '../app/assets/photo.avif'
import shoes from '../app/assets/shoes.avif'
import tea from '../app/assets/tea.avif'

const events = [
  {
    src: fonteyn,
    alt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis laborum et quae aliquam quasi voluptates repudiandae, cupiditate saepe esse.',
    heading: 'adipisicing elit. Ad, eveniet.',
    date: '20 january 2026',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'Lorem ipsum dolor',
  },
  {
    src: live,
    alt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, delectus!',
    heading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    date: '20 january 2027',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'Lorem ipsum',
  },
  {
    src: photo,
    alt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    heading: 'Lorem ipsum, dolor ',
    date: '20 january 2028',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'Lorem ipsum,',
  },
  {
    src: shoes,
    alt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    heading: 'adipisicing elit.',
    date: '20 january 2028',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'adipisicing elit.',
  },
  {
    src: tea,
    alt: 'adipisicing elit.',
    heading: 'adipisicing elit. adipisicing elit.',
    date: '20 january 2028',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'adipisicing elit.',
  },
]

interface AutoPlayProps {}

const MainPageInfoCarousel: React.FC<AutoPlayProps> = () => {
  const sliderRef = useRef<Slider>(null)

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          autoplay: false,
        },
      },
    ],
  }

  return (
    <div className="slider-container my-16">
      <Slider
        ref={sliderRef}
        {...settings}
      >
        {events.map((event, index) => (
          <EventInfo
            key={index}
            src={event.src}
            alt={event.alt}
            heading={event.heading}
            date={event.date}
            info={event.info}
            eventType={event.eventType}
          />
        ))}
      </Slider>
    </div>
  )
}

export default MainPageInfoCarousel
