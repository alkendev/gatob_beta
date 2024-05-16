import EventTickets from './EventTickets'
import london from '../app/assets/london.webp'
import carmen from '../app/assets/carmen.avif'
import chenier from '../app/assets/chenier.avif'
import cosi from '../app/assets/cosi.avif'
import dream from '../app/assets/dream.avif'
import lucia from '../app/assets/lucia.avif'
import olimpiade from '../app/assets/olimpiade.avif'
import shortworks from '../app/assets/shortworks.avif'
import winters from '../app/assets/winters.avif'

const events = [
  {
    src: london,
    alt: 'adipisicing elit.',
    heading: 'adipisicing elit.',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'adipisicing elit.',
  },
  {
    src: carmen,
    alt: 'adipisicing elit.',
    heading: 'adipisicing elit.',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'adipisicing elit.',
  },
  {
    src: chenier,
    alt: 'adipisicing elit. adipisicing elit.',
    heading: 'autem magnam quasi quis',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'eius laboriosam autem magnam quasi',
  },
  {
    src: cosi,
    alt: 'eius laboriosam autem magnam quasi',
    heading: 'eius laboriosam autem magnam quasi',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'eius laboriosam autem magnam quasi',
  },
  {
    src: dream,
    alt: 'eius laboriosam autem magnam quasi',
    heading: 'eius laboriosam autem magnam quasi',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'eius laboriosam autem magnam quasi',
  },
  {
    src: lucia,
    alt: 'eius laboriosam autem magnam quasi',
    heading: 'eius laboriosam autem magnam quasi',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'eius laboriosam autem magnam quasi',
  },
  {
    src: olimpiade,
    alt: 'eius laboriosam autem magnam quasi',
    heading: 'eius laboriosam autem magnam quasi',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'eius laboriosam autem magnam quasi',
  },
  {
    src: shortworks,
    alt: 'eius laboriosam autem magnam quasi',
    heading: 'eius laboriosam autem magnam quasi',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'eius laboriosam autem magnam quasi',
  },
  {
    src: winters,
    alt: 'eius laboriosam autem magnam quasi',
    heading: 'sit amet, consectetur adipisicing elit.',
    date: '24 july 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita, repellat dolor consequatur, beatae dolorum aut hic mollitia, eius laboriosam autem magnam quasi quis perferendis asperiores unde consequuntur quos architecto.',
    eventType: 'sit amet, consectetur adipisicing elit.',
  },
]

function Whatson() {
  return (
    <>
      <section className="flex flex-col gap-8">
        {events.map((event, index) => (
          <EventTickets
            key={index}
            src={event.src}
            alt={event.alt}
            heading={event.heading}
            date={event.date}
            info={event.info}
            eventType={event.eventType}
          />
        ))}
      </section>
    </>
  )
}

export default Whatson
