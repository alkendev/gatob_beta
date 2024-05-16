import Image, { StaticImageData } from 'next/image'

interface EventProps {
  src: StaticImageData | string
  alt: string
  heading: string
  date: string
  info: string
  eventType: string
}

function EventTickets(props: EventProps) {
  return (
    <>
      <section className="flex flex-col md:flex-row container mx-auto justify-center items-center">
        <div className="pl-8">
          <Image
            src={props.src}
            alt={props.alt}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col pl-8 md:pl-8 md:justify-center gap-5 pt-4 px-4">
          <p className="uppercase">{props.eventType}</p>
          <h6 className="uppercase text-3xl tracking-wider">{props.heading}</h6>
          <p>{props.date}</p>
          <p>{props.info}</p>
          <div className="flex flex-col md:flex-row items-center">
            <button className="bg-red-900 text-white w-4/5 h-12 md:w-56 hover:bg-white hover:text-red-900">
              Приобрести билеты
            </button>
            <button className="bg-white text-red-900 w-4/5 h-12 md:w-56 hover:bg-red-900 hover:text-white">
              Подробнее...
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventTickets
