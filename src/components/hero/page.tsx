import { TitleHeroSection } from "../TitleHeroSection";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen">
        {/* TITLE HERO SECTION */}
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <div className="rounded-xl px-5 py-4">
            <TitleHeroSection />
            <h1 className="text-md text-center max-w-3xl mt-3">
              <span className="block text-lg text-justify sm:text-xl sm:text-center md:text-2xl md:text-center lg:text-center mb-3">
                Full Stack Developer
              </span>
            </h1>

            {/* DESCRIPTION HERO - justified on mobile, centered on md+ */}
            <p className="max-w-3xl mx-auto text-justify md:text-center text-sm leading-relaxed mt-3">
              Transitioning from Warehouse & logistics and administration to
              full stack development, I merge real world problem solving with
              technical skills in data and web technologies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
