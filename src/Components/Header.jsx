function Header() {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-20 lg:p-32 flex justify-center items-center">
        <img src="/profile-pic.png" className="shadow-xl rounded-full" />
      </div>
      <div className=" py-32 flex justify-center items-center flex-col gap-5">
        <div className="text-3xl font-bold text-gray-700">Hello I'm</div>
        <div className="text-6xl font-bold text-gray-900">Muhammad Ali</div>
        <div className="text-3xl font-bold text-gray-700">Fronten Developer</div>
        <div className="flex gap-3">
          <button className="ring-1 p-3 rounded-full px-6 hover:bg-gray-800 hover:text-white transition">Download CV</button>
          <button className="bg-gray-800 text-white hover:bg-gray-900 p-3 rounded-full px-6 transition">Contact Info</button>
        </div>
        <div className="flex gap-2">
          <img src="/linkedin.png" className="h-10" />
          <img src="/github.png" className="h-10" />
        </div>
      </div>
    </header>
  )
}
export default Header;