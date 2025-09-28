import Lanyard from "../ui/Lanyard";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-md text-center max-w-3xl">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Hi, I'm Vibby Febriyan Sakti
            </span>
            <br />
            <span className="block text-lg sm:text-xl md:text-2xl">
              Full Stack Developer
            </span>
            <br />
            I craft scalable web applications and seamless digital experiences,
            <br />
            from front-end to back-end.
          </h1>
        </div>
        <Lanyard position={[0, 0, 20]} gravity={[0, -50, 0]} />
      </section>
    </>
  );
}
