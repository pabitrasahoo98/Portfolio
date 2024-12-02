function Contact() {
  return (
    <div className="about p-5 lg:p-32 pb-0 text-center">
      <div className="text-gray-500 text-lg">to</div>
      <div className="text-gray-900 text-5xl font-bold">Contact</div>
      <div className="flex justify-center items-center p-10">
        <div className="ring-1 rounded-3xl p-10 flex gap-10 bg-gray-100">
          <div className="flex justify-center items-center">
            <img src="/email.png" className="h-5 lg:h-10" />
            <div className="hover:text-red-700 transition text-xl lg:text-3xl text-semi-bold">example@gmail.com</div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/email.png" className="h-5 lg:h-10" />
            <div className="hover:text-red-700 transition text-xl lg:text-3xl text-semi-bold">linkedin.com</div>
          </div>
        </div>
      </div>
      <div className="text-sm lg:text-xl text-gray-600 p-10 lg:pb-20">
        Copyright <b>©</b> 2023 Muhammad Ali. All Rights Reserved
      </div>
    </div>
  )
}
export default Contact;