import { workExperience } from '@/data'
import Image from 'next/image'
import { Button } from './ui/MovingBorders'

const Services = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Our <span className="text-purple">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 p-6">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                width={150}
                height={150}
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-0 text-center">
                <h1 className="text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Services