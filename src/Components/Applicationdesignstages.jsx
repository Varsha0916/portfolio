

const DesignStages = () => {

  const services = [
    {
      id: 1,
      title: "Expertise That Drives Results",
      description: "Our team of seasoned professionals brings years of experience and expertise to the table.",
      icon: "./src/assets/images/developmentServices/ds1.svg",
    },
    {
      id: 2,
      title: "Tailored Business Solutions",
      description: "We understand that every business is unique. That's why our solutions are customized.",
      icon: "./src/assets/images/developmentServices/ds2.svg",
    },
    {
      id: 3,
      title: "Cutting-Edge Web Design",
      description: "Leave a lasting impression on your audience with our top-notch web design services.",
      icon: "./src/assets/images/developmentServices/ds3.svg",
    },
    {
      id: 4,
      title: "Mobile-First Approach",
      description: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
      icon: "./src/assets/images/developmentServices/ds4.svg",
    },
    {
      id: 5,
      title: "Marketing Strategies",
      description: "Our data-driven marketing strategies allow us to target the right audience with precision.",
      icon: "./src/assets/images/developmentServices/ds5.svg",
    },
    {
      id: 6,
      title: "Search Engine Optimization",
      description: "Boost your online visibility with our expert SEO techniques.",
      icon: "./src/assets/images/developmentServices/ds6.svg",
    },
  ];



   
  
  return (
    <>
      {/* APPLICATION DESIGN STAGES */}
      <h1 className="text-5xl text-white font-semibold relative text-glow2 w-[724px] h-[74px] p-[50px]">
        Application Design Stages
      </h1>

      <div className="grid grid-cols-3 gap-10 p-20">
        <div className="bg-black border-neutral-400 text-center w-[220px] h-[220px] border-[0.5px] p-[12px] gap-[34.5px]">
          <img src="./src/assets/images/1.svg" alt="Analysis" className="w-[200px] h-[160.7px] mx-auto" />
          <p className="font-bold size-[20px] mt-4 text-white w-[196px] h-[12px]">Analysis</p>
        </div>

        <div className="bg-black border-neutral-400 text-center w-[220px] h-[220px] border-[0.5px] p-[12px] gap-[34.5px]">
          <img src="./src/assets/images/2.svg" alt="Design" className="w-[200px] h-[160.7px] mx-auto" />
          <p className="font-bold size-[20px] mt-4 text-white w-[196px] h-[12px]">Design</p>
        </div>

        <div className="bg-black border-neutral-400 text-center w-[220px] h-[220px] border-[0.5px] p-[12px] gap-[34.5px]">
          <img src="./src/assets/images/3.svg" alt="Development" className="w-[200px] h-[160.7px] mx-auto" />
          <p className="font-bold size-[20px] mt-4 text-white w-[196px] h-[12px]">Development</p>
        </div>

        <div className="bg-black border-neutral-400 text-center w-[220px] h-[220px] border-[0.5px] p-[12px] gap-[34.5px]">
          <img src="./src/assets/images/4.svg" alt="Testing" className="w-[200px] h-[160.7px] mx-auto" />
          <p className="font-bold size-[20px] mt-4 text-white w-[196px] h-[12px]">Testing</p>
        </div>

        <div className="bg-black border-neutral-400 text-center w-[220px] h-[220px] border-[0.5px] p-[12px] gap-[34.5px]">
          <img src="./src/assets/images/5.svg" alt="Launching" className="w-[200px] h-[160.7px] mx-auto" />
          <p className="font-bold size-[20px] mt-4 text-white w-[196px] h-[12px]">Launching</p>
        </div>

        <div className="bg-black border-neutral-400 text-center w-[220px] h-[220px] border-[0.5px] p-[12px] gap-[34.5px]">
          <img src="./src/assets/images/6.svg" alt="Support" className="w-[200px] h-[160.7px] mx-auto" />
          <p className="font-bold size-[20px] mt-4 text-white w-[196px] h-[12px]">Support</p>
        </div>
      </div>


{/*Development Services*/}

<div className="bg-black text-white py-10">
  <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold w-[90%] max-w-[724px] h-auto m-auto text-center">
    <span className="text-[#fe5d26] underline ml-2">D</span>evelopment Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {/* First Row Group */}
    <div className="col-span-3 group grid grid-cols-1 md:grid-cols-3 gap-6">
      {services
        .filter((service) => [1, 2, 3].includes(service.id))
        .map((service) => (
          <div
            key={service.id}
            className={`flex flex-col items-center text-center p-6 border-[#1f1f1f] 
              ${
                [1, 2].includes(service.id) ? "md:border-r" : ""
              } group-hover:text-white group-hover: transition-all duration-300`}
          >
            <div
              className={`bg-[#1a1a1a] p-[14.75px] h-[75px] w-[75px] rounded-full border-[5.53px] 
                border-[#4d4d4d] bg-gradient-to-tl from-[#000000] to-[#4d4d4d] 
                mb-4 flex items-center justify-center 
                group-hover:border-[#fe5d26] group-hover:bg-[#fe5d26] transition-all duration-300`}
            >
              <img
                src={service.icon}
                className="m-auto mt-[3.5px] group-hover:brightness-200 fill-[#fe5d26] transition-all duration-300"
                alt="icon"
              />
            </div>
            <h3 className="text-lg font-semibold leading-[27.66px] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 font-semibold leading-[22.13px] text-[14.75px]">
              {service.description}
            </p>
            <div
              className={`w-[75.59px] h-[51.63px] rounded-[92.19px] border-[0.92px] 
                border-[#1f1f1f] flex items-center justify-center mt-[40px]`}
            >
              <div
                className={`w-[47.94px] h-[33.19px] rounded-[124.45px] flex items-center justify-center 
                  bg-[#1a1a1a] text-white group-hover:bg-[#fe5d26] group-hover:text-[#1a1a1a] transition-all duration-300`}
              >
                ➔
              </div>
            </div>
          </div>
        ))}
    </div>

    {/* Second Row Group */}
    <div className="col-span-3 group grid grid-cols-1 md:grid-cols-3 gap-6">
      {services
        .filter((service) => [4, 5, 6].includes(service.id))
        .map((service) => (
          <div
            key={service.id}
            className={`flex flex-col items-center text-center p-6 border-[#1f1f1f] 
              ${
                [4, 5].includes(service.id) ? "md:border-r" : ""
              } group-hover:text-white group-hover: transition-all duration-300`}
          >
            <div
              className={`bg-[#1a1a1a] p-[14.75px] h-[75px] w-[75px] rounded-full border-[5.53px] 
                border-[#4d4d4d] bg-gradient-to-tl from-[#000000] to-[#4d4d4d] 
                mb-4 flex items-center justify-center 
                group-hover:border-[#fe5d26] group-hover:bg-[#fe5d26] transition-all duration-300`}
            >
              <img
                src={service.icon}
                className="m-auto mt-[3.5px] group-hover:brightness-200 transition-all duration-300"
                alt="icon"
              />
            </div>
            <h3 className="text-lg font-semibold leading-[27.66px] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 font-semibold leading-[22.13px] text-[14.75px]">
              {service.description}
            </p>
            <div
              className={`w-[75.59px] h-[51.63px] rounded-[92.19px] border-[0.92px] 
                border-[#1f1f1f] flex items-center justify-center mt-[40px]`}
            >
              <div
                className={`w-[47.94px] h-[33.19px] rounded-[124.45px] flex items-center justify-center 
                  bg-[#1a1a1a] text-white group-hover:bg-[#fe5d26] group-hover:text-[#1a1a1a] transition-all duration-300`}
              >
                ➔
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>





      {/* TRANSFORMATION */}
      <section className="bg-black text-white flex flex-col items-left p-10 relative h-screen">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fe5d26] via-[#ff5d26] to-transparent blur-[150px]"></div>
        <div className="relative z-10 w-full h-full">
          {/* Step 1 */}
          <div className="absolute -top-9 right-64 flex flex-col items-start gap-4 w-[380px] h-[482px] border-dotted border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
            <div className="text-[40px] font-bold text-gray-400 mb-[8px]">01.</div>
            <img src="./src/assets/images/01page.svg" alt="Step 1 Icon" className="w-[300px] h-[214px] mb-1" />
            <p className="text-gray-400 text-[14px] leading-[20px]">
              We begin by understanding your vision, defining requirements, and creating a roadmap to ensure every aspect aligns with your business goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="absolute top-[300px] -left-52 flex flex-col items-start gap-4 w-[380px] h-[482px] border-dotted border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
            <div className="text-[40px] font-bold text-gray-400 mb-[8px]">02.</div>
            <img src="./src/assets/images/02page.svg" alt="Step 2 Icon" className="w-[300px] h-[214px] mb-1" />
            <p className="text-gray-400 text-[14px] leading-[20px]">
              We bring your ideas to life using cutting-edge design and development practices, delivering solutions that are both functional and visually appealing.
            </p>
          </div>

          {/* Step 3 */}
          <div className="absolute top-[500px] left-52 flex flex-col items-start gap-4 w-[380px] h-[482px] border-dotted border-[2px] border-[#86868B] rounded-[12px] p-[16px]">
            <div className="text-[40px] font-bold text-gray-400 mb-[8px]">03.</div>
            <img src="./src/assets/images/03page.svg" alt="Step 3 Icon" className="w-[300px] h-[214px] mb-1" />
            <p className="text-gray-400 text-[14px] leading-[20px]">
              Rigorous testing ensures a flawless product, followed by seamless deployment to make your solution ready for the world.
            </p>
          </div>
        </div>
      </section>


{/*MOBILE DEVELOPMENT*/}


<div className="flex gap-2 ml-10 mr-[auto] mt-96 p-10">
        <h1 className="text-[32px] font-bold items-start justify-start text-white flex">
          <span className="text-[#fe5d26] underline ml-2">M</span>obile Development
        </h1>
        <img
          src="./src/assets/images/img2.png"
          alt="Icon"
          className="h-[37px] ml-0 item-end"
        />
      </div>

      <img
        src="./src/assets/images/mobile.svg"
        alt="Icon"
        className="h-[845.71px] w-[1000px] top-[6574px] left-[140px] ml-0 item-end"
      />

<div className="flex justify-center items-center space-x-6 border-y-[1px] border-y-[#222]  bg-black p-6 text-white group">
      <div className="flex flex-col items-start text-start p-7">
        <div className="text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] rounded-lg text-2xl  mb-2 group-hover:h-[100px] group-hover:w-[45%] duration-300">
            <img src="./src/assets/images/mobile1.svg"/>
        </div>
        <h3 className="text-sm font-thin">Native iOS and Android App Development</h3>
      </div>
      <div className="h-40 border-l-[1px] border-[#222]"></div>
      <div className="flex flex-col items-start w-1/4 text-start p-7 ">
        <div className="text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] rounded-lg text-2xl  mb-2 group-hover:h-[100px] group-hover:w-[45%] duration-300">
            <img src="./src/assets/images/i1.svg" className="m-[auto]"/>
        </div>
        <h3 className="text-sm font-thin">Cross-Platform App Development(React Native, Flutter)</h3>
      </div>
      <div className="h-40 border-l-[1px] border-[#222]"></div>
      <div className="flex flex-col items-start text-start p-7">
        <div className="text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] rounded-lg text-2xl  mb-2 group-hover:h-[100px] group-hover:w-[45%] duration-300">✨</div>
        <h3 className="text-sm font-thin">App Prototyping and UI/UX Design Integration</h3>
      </div>
      <div className="h-40 border-l-[1px] border-[#222]"></div>
      <div className="flex flex-col items-start text-start p-7">
        <div className="text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] rounded-lg text-2xl  mb-2 group-hover:h-[100px] group-hover:w-[45%] duration-300">🔧</div>
        <h3 className="text-sm font-thin">App Testing, Deployment, and Maintenance</h3>
      </div>
    </div>
<p className="text-center text-neutral-500 text-[24px] px-[50px] leading-10 max-w-[1300px] mx-auto mt-9">
        Our mobile app development process begins with understanding your unique requirements, target audience, and
        business objectives to establish a strong foundation. We then craft intuitive user interfaces and develop feature-
        rich, scalable mobile applications tailored to your vision. Through rigorous quality assurance, we ensure seamless
        functionality, exceptional performance, and a flawless user experience. Finally, we deploy your app to app stores
        and provide continuous updates and support to keep it optimized and competitive in the ever-evolving digital landscape.
      </p>


{/*WEB DEVELOPMENT*/}


      <div className="flex gap-2 ml-10 mr-[auto] mt-[100px] p-10">
        <h1 className="text-[32px] font-bold text-white flex">
          <span className="text-[#fe5d26] underline ml-2">W</span>eb Development
        </h1>
        <img
          src="./src/assets/images/img2.png"
          alt="Icon"
          className="h-[37px] ml-0 item-end"
        />
      </div>

      <img
        src="./src/assets/images/web.svg"
        alt="Icon"
        className="h-[845.71px] w-[1180px] top-[6574px] left-[140px] ml-0 item-end"
      />

<div className="flex justify-center items-center space-x-6 border-y-[1px] border-y-[#222]  bg-black p-6 text-white group">
      <div className="flex flex-col items-start text-start w-1/4 p-7">
        <div className="text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] rounded-lg text-2xl  mb-2 group-hover:h-[100px] group-hover:w-[45%] duration-300">
            <img src="./src/assets/images/mobile1.svg"/>
        </div>
        <h3 className="text-sm font-thin">Front-End Development (HTML,<br /> CSS, JavaScript)</h3>
      </div>
      <div className="h-40 border-l-[1px] border-[#222]"></div>
      <div className="flex flex-col items-start w-1/4 text-start w-1/4 p-7 ">
        <div className="text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] rounded-lg text-2xl  mb-2 group-hover:h-[100px] group-hover:w-[45%] duration-300">
            <img src="./src/assets/images/i1.svg" className="m-[auto]"/>
        </div>
        <h3 className="text-sm font-thin"> Back-End Development (PHP, <br />Python, Ruby)</h3>
      </div>
      <div className="h-40 border-l-[1px] border-[#222]"></div>
      <div className="flex flex-col items-start text-start w-1/4 p-7">
        <div className="text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] rounded-lg text-2xl  mb-2 group-hover:h-[100px] group-hover:w-[45%] duration-300">✨</div>
        <h3 className="text-sm font-thin">Content Management System(CMS) Development(WordPress,<br /> Drupal)</h3>
      </div>
      <div className="h-40 border-l-[1px] border-[#222]"></div>
      <div className="flex flex-col items-start text-start w-1/4 p-7">
        <div className="text-orange-500 bg-[#fe5d26] bg-opacity-[20%] border-[#262626] border-[1px] h-[70px] w-[33%] rounded-lg text-2xl  mb-2 group-hover:h-[100px] group-hover:w-[45%] duration-300">🔧</div>
        <h3 className="text-sm font-thin">E-Commerce Platform Development (Magento, Shopify)</h3>
      </div>
    </div>


      <p className="text-center text-neutral-500 text-[24px] px-[50px] leading-[40px] max-w-[1300px] mx-auto mt-9">
        Our web development process starts with a deep understanding of your goals, audience, and business needs to
        create a solid blueprint for success. We design and build responsive, visually appealing, and highly functional
        websites tailored to your vision. Rigorous testing ensures seamless performance, cross-browser compatibility, and
        a flawless user experience. Once launched, we offer continuous updates and support to keep your website secure,
        optimized, and aligned with the latest industry trends.
      </p>

    </>
  );
}

export default DesignStages;
