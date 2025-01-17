const DesignServices = () => {

  const boxes = [
    { title: "User Interface", icon: <img
      src="./src/assets/images/mobapp1.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[197px]", top: "top-[1440px]" }, 
    
    { title: "Smooth Development", icon: <img
      src="./src/assets/images/mobapp2.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[283px]", top: "top-[1540px]" },
    
    { title: "User Experience", icon: <img
      src="./src/assets/images/mobapp3.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[218px]", top: "top-[1670px]" }, 
    
    { title: "Interactions", icon: <img
      src="./src/assets/images/mobapp4.svg"
      alt="Icon"
      className="width-[24px] h-[24px]"
    />, width: "w-[175px]", top: "top-[1800px]" }, 
  ];
    

    
      const items = [
        "User-Centric Website Design",
        "Custom Website Design",
        "Responsive and Adaptive Layouts",
        "Interactive Prototyping",
      ];
  
  
    return (
      <>

        {/* DESIGN SERVICES*/}
        <h1 className="text-glow text-[50px] font-bold text-gray-100 mb-4 flex flex-row mt-[147px]">
          <h1 className="text-[#fe5d26] underline">D</h1>esign Services
        </h1>
  



        {/* Mobile Application*/}
        <div className="flex gap-1 ml-0 mr-[auto] mt-[100px] p-10 width-[375px] h-[41px] top-[1296px]">
          <h1 className="text-[32px] font-bold text-white flex">
            In<span className="text-[#fe5d26] underline ml-2">M</span>obile Application
          </h1>
          <img
            src="./src/assets/images/img2.png"
            alt="Icon"
            className="h-[37px] ml-0 item-end"
          />
        </div>
  
        {/* Boxes */}
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`absolute ${box.top} left-[85px] ${box.width} h-[58px] bg-transparent border border-orange-600 rounded-lg shadow-lg flex justify-between items-center px-4 gap-2`}
            style={{
              boxShadow:
                "8px 8px 4px 0px #FFFFFF40, 12px 12px 200px 0px #FFFFFF40",
            }}
          >
            <span className="text-orange-600 text-[20px] leading-[41px]">{box.title}</span>
            <span className="text-xl">{box.icon}</span>
          </div>
        ))}
  
        {/* Gradient and Image Section */}
        <div className="relative h-[594px] w-[870px] flex items-end rounded-tl-[24px] rounded-bl-[24px] mr-0 ml-[auto] bg-[#1d1d1f] mt-[50px]">
  <div className="absolute top-1/4 right-0 transform translate-x-3/4 -translate-y-1/2">
    <div className="w-[260px] h-[260px] bg-gradient-to-b from-[#7e3535] to-[#fe5d26] rounded-full"></div>
  </div>

  <div className="relative">
  <img
  src="./src/assets/images/img3.png"
  alt="Phones"
  className="w-[820px] h-[458.75px] transform -translate-y-8"
/>

  </div>
</div>

  
        {/* Content Section */}
        <div className="mt-[80px] px-10">
        <div className="flex justify-around text-left text-white gap-[20px] items-start">
  <div className="w-[300px] group">
    <h2 className="text-[22px] font-bold flex items-center gap-2 group-hover:text-[#fe5d26] transition-all duration-300">
      <span className="icon">
        <img
          src="./src/assets/images/research.svg"
          alt="Research Icon"
          className="transition-all duration-300 group-hover:brightness-0 group-hover:filter-orange"
        />
      </span>
      Research & Discovery
    </h2>
    <hr className="border-t border-gray-500 mt-2 mb-4 group-hover:border-[#fe5d26]" />
    <p className="text-gray-500 text-[16px] leading-[24px]">
      We start by understanding your vision, target audience, and market trends. This ensures our designs
      align with your goals and resonate with your users.
    </p>
  </div>
  <div className="w-[300px] group">
    <h2 className="text-[22px] font-bold flex items-center gap-2 group-hover:text-[#fe5d26] transition-all duration-300">
      <span className="icon">
        <img
          src="./src/assets/images/search.svg"
          alt="Ideation Icon"
          className="transition-all duration-300 group-hover:brightness-0 group-hover:filter-orange"
        />
      </span>
      Ideation
    </h2>
    <hr className="border-t border-gray-500 mt-2 mb-4 group-hover:border-[#fe5d26]" />
    <p className="text-gray-500 text-[16px] leading-[24px]">
      Through brainstorming and wireframing, we create innovative concepts and layouts, focusing on
      functionality, aesthetics, and user experience.
    </p>
  </div>
  <div className="w-[300px] group">
    <h2 className="text-[22px] font-bold flex items-center gap-2 group-hover:text-[#fe5d26] transition-all duration-300">
      <span className="icon">
        <img
          src="./src/assets/images/paint.svg"
          alt="Design Icon"
          className="transition-all duration-300 group-hover:brightness-0 group-hover:filter-orange"
        />
      </span>
      Design & Prototyping
    </h2>
    <hr className="border-t border-gray-500 mt-2 mb-4 group-hover:border-[#fe5d26]" />
    <p className="text-gray-500 text-[16px] leading-[24px]">
      Our team transforms ideas into detailed, visually appealing designs. Interactive prototypes allow you
      to experience the look and feel before finalization.
    </p>
  </div>
  <div className="w-[300px] group">
    <h2 className="text-[22px] font-bold flex items-center gap-2 group-hover:text-[#fe5d26] transition-all duration-300">
      <span className="icon">
        <img
          src="./src/assets/images/review.svg"
          alt="Review Icon"
          className="transition-all duration-300 group-hover:brightness-0 group-hover:filter-orange"
        />
      </span>
      Review & Refinement
    </h2>
    <hr className="border-t border-gray-500 mt-2 mb-4 group-hover:border-[#fe5d26]" />
    <p className="text-gray-500 text-[16px] leading-[24px]">
      We incorporate feedback and refine designs to perfection, ensuring the final product meets your
      expectations and is ready for implementation.
    </p>
  </div>
</div>

          
          <p className="text-center text-gray-500 text-[20px] px-[50px] leading-[30px] max-w-[1300px] mx-auto mt-9">
            We specialize in developing products that not only meet user needs but exceed their expectations. With a
            perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality, we craft
            solutions that people genuinely love to use. Our goal is to create experiences that are intuitive,
            engaging, and leave a lasting impression, ensuring that every product we deliver becomes an integral
            part of our users’ lives.
          </p>


          {/*Web Application*/}
          <h1 className="text-[32px] font-bold text-white flex mt-8">In<span className="text-[#fe5d26] underline ml-2">W</span>eb Application</h1>
<img className="h-[90%] w-[80%] t-[2620px] l-[500px] m-auto " src='./src/assets/images/img4.png'/>
</div>


<div className="bg-black text-white py-10 px-4">
  <h2 className="text-center text-[40px] font-semibold mb-8">
    <span className="text-orange-500 font-bold underline">T</span>ransform Your Digital Presence with Exceptional Website Design
  </h2>
  <div className="flex flex-wrap justify-center items-center gap-4">
    {items.map((item, index) => (
      <div
        key={index}
        className="w-[23%] h-[134px] flex items-center justify-between gap-2 px-4 py-2 border-2 border-gray-600 rounded-3xl group 
                  hover:border-blue-500 transition-transform duration-300"
      >
        {/* Text */}
        <span className="text-2xl text-[#86868b] font-medium group-hover:text-blue-500 transform transition-transform duration-300">
          {index + 1}. {item}
        </span>
        {/* Arrow */}
        <span className="text-[#86868b] text-3xl rounded-lg transform transition-transform duration-300 group-hover:text-blue-500 group-hover:translate-y-[-40px] group-hover:rotate-[30deg]">
          ▶
        </span>
      </div>
    ))}
  </div>
</div>




      </>
    
    );
  };
  
  export default DesignServices;
  