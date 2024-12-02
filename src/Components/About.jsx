function About() {
  return (
    <div className="about p-20 lg:p-32  text-center" id="about">
      <div className="text-gray-500 text-lg">Get to know</div>
      <div className="text-gray-900 text-5xl font-bold">About Me</div>
      <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center gap-5 lg:gap-10 py-10">
        <img src="/about-pic.png" className="lg:h-[400px] rounded-3xl" />
        <div className=" py-10 flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center">
              <img src="/education.png" className="h-20" />
              <div className="text-3xl font-bold text-gray-900">Education</div>
              <div className="text-xl font-semibold text-gray-600">3 Years Diploma</div>
              <div className="text-md font-semibold text-gray-600">Frontend Development</div>
            </div>
            <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center">
              <img src="/experience.png" className="h-20" />
              <div className="text-3xl font-bold text-gray-900">Experience</div>
              <div className="text-xl font-semibold text-gray-600">6 Years +</div>
              <div className="text-md font-semibold text-gray-600">Frontend Development</div>
            </div>
          </div>
          <div className="text text-start text-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur et est soluta, error tempore veniam reiciendis modi asperiores corrupti ea ipsum totam labore culpa cupiditate repellat? Non, corporis tenetur?
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;