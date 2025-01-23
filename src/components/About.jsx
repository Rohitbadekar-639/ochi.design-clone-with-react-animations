function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-3xl text-black">
      <h1 className="text-[4vw] leading-[4vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      
      <div className="flex border-t-[1px] pt-6 mt-20 border-[#84a01e]">
        {/* Left Section */}
        <div className="w-1/4">
          <h1 className="">What you can expect:</h1>
        </div>

        {/* Middle Section */}
        <div className="w-2/4">
          <p className="px-[12.5vw]">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people. <br /> <br />
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/4 text-left pt-[4vw] px-[6vw]">
          <p className="font-bold mb-2">S:</p>
          <ul className="underline">
            <li>Instagram</li>
            <li>Behance</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#84a01e]">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our approach:</h1>
          <button className="flex items-center uppercase gap-10 px-10 py-6 rounded-full text-white bg-zinc-900 mt-10">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#b4d347] h-[60vh] rounded-3xl">
          <img
            className="bg-gray-200 w-full max-w-full rounded-xl entered loaded"
            data-component="lazyload"
            data-animate="data-animate"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            width="663"
            height="469"
            data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x"
            alt="image description"
            data-ll-status="loaded"
            srcSet="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x"
          />
        </div>
      </div>
    </div>
  );
}

export default About;