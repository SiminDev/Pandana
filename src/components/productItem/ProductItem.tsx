import { Product } from "../../types/server"

function ProductItem({title, image, price}: Product) {
  return (
    <div className="bg-white p-5 shadow-xl shadow-gray-100 rounded-2xl border border-slate-100">
      <div className=" rounded-2xl overflow-hidden ">
        <img src={image} />
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{title}</h3>
        <p className="text-gray-500">${price}</p>
      </div>
    </div>
  )
}

export default ProductItem