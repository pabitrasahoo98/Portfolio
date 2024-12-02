function Projects() {
  return (
    <div className="p-5 lg:p-32 text-center">
      <div className="text-gray-500 text-lg">Browse my recent</div>
      <div className="text-gray-900 text-5xl font-bold">Projects</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-10 lg:py-10 space-y-5 lg:space-y-0 lg:space-x-5">
        <div className="ring-1 rounded-3xl p-5 lg:p-10 flex gap-3 lg:gap-10 flex-col">
          <img src="/project-1.png" className="rounded-3xl" />
          <div className="text-gray-900 text-2xl lg:text-4xl font-bold">Projects One</div>
          <div className="flex gap-2">
            <button className="ring-1 rounded-full p-2 lg:p-4 text-md lg:text-xl hover:text-white hover:bg-gray-800 transition">Githube</button>
            <button className="ring-1 rounded-full p-2 lg:p-4  text-md lg:text-xl hover:text-white hover:bg-gray-800 transition">Live Demo</button>
          </div>
        </div>
        <div className="ring-1 rounded-3xl p-5 lg:p-10 flex gap-3 lg:gap-10 flex-col">
          <img src="/project-2.png" className="rounded-3xl" />
          <div className="text-gray-900 text-2xl lg:text-4xl font-bold">Projects Two</div>
          <div className="flex gap-2">
            <button className="ring-1 rounded-full p-2 lg:p-4 text-md lg:text-xl hover:text-white hover:bg-gray-800 transition">Githube</button>
            <button className="ring-1 rounded-full p-2 lg:p-4  text-md lg:text-xl hover:text-white hover:bg-gray-800 transition">Live Demo</button>
          </div>
        </div>
        <div className="ring-1 rounded-3xl p-5 lg:p-10 flex gap-3 lg:gap-10 flex-col">
          <img src="/project-3.png" className="rounded-3xl" />
          <div className="text-gray-900 text-2xl lg:text-4xl font-bold">Projects Three</div>
          <div className="flex gap-2">
            <button className="ring-1 rounded-full p-2 lg:p-4 text-md lg:text-xl hover:text-white hover:bg-gray-800 transition">Githube</button>
            <button className="ring-1 rounded-full p-2 lg:p-4  text-md lg:text-xl hover:text-white hover:bg-gray-800 transition">Live Demo</button>
          </div>
        </div>

      </div>
    </div>

  )
}
export default Projects;