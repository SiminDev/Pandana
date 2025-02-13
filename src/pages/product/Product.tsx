function Product() {
  return (
    <div className="bg-slate-100 px-10 py-20">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 p-10 rounded-2xl bg-white flex justify-center align-middle">
          <img className="w-2/3 object-contain" src="/assets/3.jpg" />
        </div>
        <div className="col-span-1 p-10 rounded-2xl bg-white">
          <h3 className=" text-3xl text-slate-600 mb-10">
            Fjallraven - Foldsack No. 1 Backpack
          </h3>
          <p className="text-gray-600 text-base/7">
            Slim-fitting style, contrast raglan long sleeve, three-button henley
            placket, light weight & soft fabric for breathable and comfortable
            wearing. And Solid stitched shirts with round neck made for
            durability and a great fit for casual fashion wear and diehard
            baseball fans. The Henley style round neckline includes a
            three-button placket.
          </p>
          <span className="text-2xl text-green-700 font-semibold mt-8 block">$199,00</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
