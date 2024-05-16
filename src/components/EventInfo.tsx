import Image, { StaticImageData } from 'next/image'

interface EventInfoProps {
  src: StaticImageData | string
  alt: string
  heading: string
  date: string
  info: string
  eventType: string
}

function EventInfo(props: EventInfoProps) {
  return (
    <>
      <section className="flex flex-col container md:mx-auto px-8 w-[350px] md:w-[450px] justify-start items-start">
        <div className="w-96 md:w-[450px] lg:w-[500px]">
          <Image
            src={props.src}
            alt={props.alt}
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col md:justify-start gap-5 pt-4">
          <p className="uppercase">{props.eventType}</p>
          <h6 className="uppercase text-3xl tracking-wider">{props.heading}</h6>
          <p>{props.date}</p>
          <p>{props.info}</p>
          <div className="flex flex-col md:flex-row justify-start items-start">
            <button className="bg-red-900 text-white w-4/5 h-12 md:w-56">Подробнее...</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventInfo
