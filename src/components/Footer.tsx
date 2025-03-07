function Footer() {
  return (
    <footer className="bg-slate-100 px-5 py-5 md:py-10 lg:px-15 lg:py-15">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-3">
        <div className="md:col-span-1 lg:col-span-3 flex flex-col border-b border-slate-200 md:border-b-0 pb-4 md:pb-0">
          <img src="../../public/assets/logo-black.svg" className="w-28 lg:w-40 mb-4" />
          <p className="text-gray-500 text-sm mb-1.5">© 2025 Pandana</p>
          <p className="text-gray-500 text-sm">All Rights Reserved</p>
        </div>
        <div className="md:col-span-1 flex flex-col gap-2 md:gap-5">
          <span className="font-semibold">ABOUT US</span>
          <ul className="text-sm text-gray-500 flex md:flex-col gap-5 md:gap-3">
            <li>About us</li>
            <li>Store location</li>
            <li>Contact</li>
            <li>Orders tracking</li>
          </ul>
        </div>
        <div className="md:col-span-1 flex flex-col gap-2 md:gap-5">
          <span className="font-semibold">USEFUL LINKS</span>
          <ul className="text-sm text-gray-500 flex md:flex-col gap-5 md:gap-3">
            <li>Returns</li>
            <li>Support Policy</li>
            <li>Size guide</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="md:col-span-1 flex flex-col gap-2 md:gap-5">
          <span className="font-semibold">FOLLOW US</span>
          <ul className="text-sm text-gray-500 flex md:flex-col gap-5 md:gap-3">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
