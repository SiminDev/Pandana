import { TrashIcon } from "@heroicons/react/24/outline";

export default function CartItem() {
  return (
    <div className="grid grid-cols-6 justify-items-center items-center border-b py-4 border-gray-300">
      <img className="rounded-2xl h-52" src="./assets/3.jpg" />
      <p className="col-span-2 text-gray-800 font-medium">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <div className="flex gap-2.5">
        <button className="border border-gray-300 w-7 h-7 rounded-lg">-</button>
        <span>5</span>
        <button className="border border-gray-300 w-7 h-7 rounded-lg">+</button>
      </div>
      <p className="font-medium text-gray-700">$109.95</p>
      <div className="flex justify-center align-middle gap-2 text-gray-500">
        <TrashIcon className="size-5" /> Delete
      </div>
    </div>
  );
}
