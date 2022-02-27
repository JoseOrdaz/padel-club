
import Image from 'next/image'


const PropiedadesBanners = [
    {
      name: 'RESERVAS PISTAS',
      description: 'Descubre nuestro cuadro de reservas y empieza a jugar',
      imageSrc: '/images/banners/calendario.png',
      imageAlt: 'RESERVAS PISTAS',
      href: '#',
    },
    {
      name: 'SISTEMA PLAY!',
      description: 'Encuentra con quién jugar. Entra en el sistema Play!',
      imageSrc: '/images/banners/personas.png',
      imageAlt: 'SISTEMA PLAY!',
      href: '#',
    },
    {
      name: 'ESCUELA LIGA',
      description: 'Dispondrás de toda la información de la escuela o ligas',
      imageSrc: '/images/banners/raqueta-de-padel.png',
      imageAlt: 'ESCUELA LIGA',
      href: '#',
    },
  ]
  
  export default function Banners() {
    return (
      <div className="bg-[#fff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <div className="banners-portada mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {PropiedadesBanners.map((PropiedadesBanners) => (
                <div key={PropiedadesBanners.name} className="group relative">
                  <div className="item-banner">
                  <>
                    <Image
                      src={PropiedadesBanners.imageSrc}
                      alt={PropiedadesBanners.imageAlt}
                      width={150}
                      height={150}  
                    />
                    </>
                  </div>
                  <h3 className="">
                    <a href={PropiedadesBanners.href}>
                      <span className="" />
                      {PropiedadesBanners.name}
                    </a>
                  </h3>
                  <p className="">{PropiedadesBanners.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  