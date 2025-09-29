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
              <span className="block text-lg sm:text-xl md:text-2xl mb-3">
                Full Stack Developer
              </span>
              Transitioning from Warehouse & logistics and administration to
              full stack development, I merge real world problem solving with
              technical skills in data and web technologies.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
