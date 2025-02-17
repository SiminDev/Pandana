function Footer() {
  return (
    <footer className="bg-black px-10 py-10">
      <div className="grid grid-cols-8 gap-3 text-white">
        <div className="col-span-5 flex flex-col gap-1.5">
          <img src="/assets/logo-white.svg" className="w-40" />
          <p className="font-light">Discover style and Innovation Together</p>
        </div>
        <div className="col-span-1 flex- flex-col">
          <ul className="text-sm font-light flex flex-col gap-1.5">
            <li>Contact</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-span-1 flex- flex-col">
          <ul className="text-sm font-light flex flex-col gap-1.5">
            <li>info@pandana.com</li>
            <li>+1 (416) 1123-4567</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
