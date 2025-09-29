export default function Footer() {
  return (
    <>
      <footer className="py-6 mt-12 [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center text-center">
          <p className="text-xs">
            @ {new Date().getFullYear()} - Vibby Febriyan Sakti
          </p>
        </div>
      </footer>
    </>
  );
}
