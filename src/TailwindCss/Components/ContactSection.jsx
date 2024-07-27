import React from 'react'

const ContactSection = () => {
  return (
    <section>
        <section className=" body-font relative bg-BgColor text-TextColor">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap text-TextColor">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative text-TextColor">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold  tracking-widest text-xs text-TextColor">ADDRESS</h2>
          <p className="mt-1 text-TextColor">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold  tracking-widest text-xs text-TextColor">EMAIL</h2>
          <a className="text-blue-500 leading-relaxed text-TextColor">example@email.com</a>
          <h2 className="title-font font-semibold tracking-widest text-xs mt-4 text-TextColor">PHONE</h2>
          <p className="leading-relaxed text-TextColor">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className=" text-lg mb-1 font-medium title-font text-TextColor">Feedback</h2>
      <p className="leading-relaxed mb-5 text-TextColor">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-TextColor">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-TextColor">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-TextColor">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-[chartreuse] rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
    </section>
  )
}

export default ContactSection