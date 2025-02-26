function Footer() {
  return (
    <footer className="bg-gray-100 px-10 py-15">
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-3 flex flex-col">
          <img src="/assets/logo-black.svg" className="w-40 mb-4" />
          <p className="text-gray-500 text-sm mb-1.5">© 2025 Pandana</p>
          <p className="text-gray-500 text-sm">All Rights Reserved</p>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <span className="font-semibold">ABOUT US</span>
          <ul className="text-sm text-gray-500 flex flex-col gap-3">
            <li>About us</li>
            <li>Store location</li>
            <li>Contact</li>
            <li>Orders tracking</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <span className="font-semibold">USEFUL LINKS</span>
          <ul className="text-sm text-gray-500 flex flex-col gap-3">
            <li>Returns</li>
            <li>Support Policy</li>
            <li>Size guide</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <span className="font-semibold">FOLLOW US</span>
          <ul className="text-sm text-gray-500 flex flex-col gap-3">
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
