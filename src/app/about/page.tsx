import Image from 'next/image'
import gatob from '../assets/gatob.png'

export default function About() {
  return (
    <>
      <div className="container mx-auto py-8 flex flex-col gap-8">
        <h1 className="text-2xl font-bold">История театра</h1>
        <hr />
        <div className="flex">
          <Image
            src={gatob}
            alt="Театр оперы и балета имени Абая"
            height={1000}
            width={1000}
          />

          <p className="text-xl ml-8 self-center">
            Здание Казахского национального театра им. Абая, вмещающего 793 зрительских места, является сегодня одной из
            известнейших достопримечательностей города Алматы. Современный КазНТОБ им. Абая - один из крупнейших театров
            Евразийского пространства, в творческом составе которого, наряду с прославленными мастерами сцены оттачивают
            своё искусство и молодые таланты.
          </p>
        </div>
      </div>
    </>
  )
}
