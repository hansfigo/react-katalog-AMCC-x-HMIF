import { IoSearch } from "react-icons/io5";

export default function FormSearch({ handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="flex justify-center gap-x-5">
    <input type="text" placeholder="Search product here...." className="w-full md:w-2/5 border-2 border-orange-900/40 focus:border-orange-900 focus:ring-orange-900 outline-none p-2 rounded-lg" />
    <button className="flex items-center gap-x-2 rounded-lg py-2 px-5 bg-orange-900 text-white text-md transition-all hover:scale-105">
      <IoSearch className="size-5"/> 
      Search
    </button>
  </form>
  );
}