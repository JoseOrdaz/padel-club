export default function Galeria() {
    return (
      <div className="relative bg-[#fff] overflow-hidden">
        <div className="pt-12 pb-40 lg:py-32 sm:py-24 lg:pb-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static flex justify-center text-center">
            <div className="sm:max-w-64">
              <h1 className="text-4xl font font-extrabold tracking-tight text-[#0e46af] sm:text-6xl">
                Nuestro Club.
              </h1>
              <p className="mt-4 mb-4 text-xl text-gray-500 lg:mx-auto">
                Sección donde puedes ver fotos de nuestras instalaciones, campeonatos y mucho más. </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
              
                </div>
  
              </div>
            </div>
          </div>
      
<section className="overflow-hidden text-gray-700">
  <div className="container px-5 py-2 mx-auto lg:pt-16 md:pt-16 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/galeria/galeria4.jpg"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/galeria/galeria3.jpg"/>
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/galeria/galeria1.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/galeria/galeria2.jpg"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/galeria/galeria5.jpg"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="/images/galeria/galeria6.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
      </div>
    )
  }
  