
import Image from 'next/image'

const propNoticias = [
    {
      name: 'WPT Challenger en Padel Club',
      description: 'Disfruta de profesionales en nuestro club.',
      imageSrc: '/images/galeria/galeria1.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'Americanas de Verano',
      description: 'Animate y juega a padel sin parar!',
      imageSrc: '/images/galeria/galeria6.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'Torneo femenino infantil',
      description: 'Disfruta del mejor padel infantil',
      imageSrc: '/images/galeria/galeria7.jpg',
      imageAlt: '',
      href: '#',
    },
  ]
  
  export default function Noticias() {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-center text-4xl font font-extrabold tracking-tight text-[#000] sm:text-6xl">Noticias Padel Club</h2>
            <p className="mt-4 mb-4 text-center max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Sección donde puedes ver las noticias de nuestro club. </p>
            <div className="lg:pt-16 md:pt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {propNoticias.map((propNoticias) => (
                <div key={propNoticias.description} className="group relative">
                <div className="m-auto relative w-full max-w-sm flex items-center h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={propNoticias.imageSrc}
                    alt={propNoticias.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                  
                  <h2 className="mt-6 sm:text-center text-xl font-semibold text-gray-900">{propNoticias.name}</h2>
                  <h3 className=" sm:text-center text-sm text-gray-500">
                    <a href={propNoticias.href}>
                      <span className="absolute inset-0" />
                      {propNoticias.description}
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  