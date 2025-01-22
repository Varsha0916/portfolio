import React from 'react';

const EmbeddedSystems = () => {
  return (
    <>
      <h1 className="text-glow2 text-[50px] font-bold text-gray-100 mb-4 flex flex-row mt-[100px] justify-center"><span className="text-[#fe5d26] underline">E</span>mbedded Services</h1>
      <img 
        className="h-auto max-w-full rounded-xl mt-16 mx-auto" 
        src='./src/assets/images/emb.svg' 
        alt="Embedded Service" 
      />

<div className="bg-black text-white py-10 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">

    
    <div className="group border border-gray-700 hover:border-[#fe5d26] hover:scale-105 transition-transform duration-300 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
          <img src="./src/assets/images/emb1.svg" alt="Custom Development" className="w-[40px] h-[40px]" />
        </div>
        <h3 className="text-2xl text-left mb-2">Custom Embedded Development</h3>
        <p className="text-sm text-left text-gray-400">
          From concept to deployment, we design and develop bespoke embedded systems tailored to your specific requirements.
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] group-hover:bg-white text-black rounded-full transition-colors duration-300">
          <img src="./src/assets/images/add.svg" alt="Add Icon" className="w-[15px] h-[15px] group-hover:hidden" />
          <h1 className="  text-bold w-[15px] h-[15px] hidden group-hover:block " >X</h1>
        </div>
      </div>
    </div>

    
    <div className="group border border-gray-700 hover:border-[#fe5d26] hover:scale-105 transition-transform duration-300 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
          <img src="./src/assets/images/emb2.svg" alt="Firmware Design" className="w-[40px] h-[40px]" />
        </div>
        <h3 className="text-2xl text-left mb-2">Firmware Design and Development</h3>
        <p className="text-sm text-left text-gray-400">
          High-quality firmware solutions optimized for performance and reliability, ensuring seamless hardware-software integration.
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] group-hover:bg-white text-black rounded-full transition-colors duration-300">
          <img src="./src/assets/images/add.svg" alt="Add Icon" className="w-[15px] h-[15px] group-hover:hidden" />
          <h1 className="  text-bold w-[15px] h-[15px] hidden group-hover:block " >X</h1>
        </div>
      </div>
    </div>

   
    <div className="group border border-gray-700 hover:border-[#fe5d26] hover:scale-105 transition-transform duration-300 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
          <img src="./src/assets/images/emb3.svg" alt="IoT Solutions" className="w-[40px] h-[40px]" />
        </div>
        <h3 className="text-2xl text-left mb-2">IoT Solutions</h3>
        <p className="text-sm text-left text-gray-400">
          Empower your devices with intelligent connectivity, enabling real-time data collection, processing, and communication.
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] group-hover:bg-white text-black rounded-full transition-colors duration-300">
          <img src="./src/assets/images/add.svg" alt="Add Icon" className="w-[15px] h-[15px] group-hover:hidden" />
          <h1 className="  text-bold w-[15px] h-[15px] hidden group-hover:block " >X</h1>
        </div>
      </div>
    </div>

    
    <div className="group border border-gray-700 hover:border-[#fe5d26] hover:scale-105 transition-transform duration-300 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
          <img src="./src/assets/images/emb4.svg" alt="Testing and Optimization" className="w-[40px] h-[40px]" />
        </div>
        <h3 className="text-2xl text-left mb-2">Testing and Optimization</h3>
        <p className="text-sm text-left text-gray-400">
          Rigorous testing and fine-tuning to ensure efficient, performance-ready reliability in real-world scenarios.
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] group-hover:bg-white text-black rounded-full transition-colors duration-300">
          <img src="./src/assets/images/add.svg" alt="Add Icon" className="w-[15px] h-[15px] group-hover:hidden" />
          <h1 className="  text-bold w-[15px] h-[15px] hidden group-hover:block " >X</h1>
        </div>
      </div>
    </div>

  </div>
</div>
      
<div className="flex flex-col lg:flex-row items-center justify-between w-full p-6 bg-black text-white my-12 space-y-0 lg:space-y-0">
  <img 
    src="./src/assets/images/hex.svg" 
    alt="IoT Solutions" 
    className="w-full lg:w-[600px] h-auto lg:h-[591.43px] border-neutral-600 border-[1.22px] gap-[12.26px] rounded-xl mb-0 lg:mb-0 lg:mr-9" 
  />

  <div className="text-left w-full lg:w-[400px] font-light lg:ml-0">  
    <ul className="list-disc text-[26px] leading-[61px] marker:text-orange-600 pl-4 lg:pl-0">
      <li><span className="text-orange-500 ">C</span>ustomized Embedded Solutions</li>
      <li><span className="text-orange-500 ">R</span>eal-Time Processing</li>
      <li><span className="text-orange-500 ">S</span>eamless Hardware Integration</li>
      <li><span className="text-orange-500 ">L</span>ow Power Consumption</li>
      <li><span className="text-orange-500 ">S</span>calable and Secure Architectures</li>
    </ul>
  </div>
</div>

      <p className="text-center text-neutral-600 text-[32px] px-[50px] leading-[43px] max-w-[1300px] mx-auto mt-9">
        At the heart of technological innovation lies embedded systems, seamlessly <br />
        <span className='text-white'>integrating software</span> and hardware to power modern devices and solutions. Our <br />
        embedded services are designed to provide <span className='text-white'>robust, efficient</span>, and <span className='text-white'>scalable systems</span> <br />
        tailored to your unique needs, ensuring your business stays ahead in today’s <br />
        competitive landscape.
      </p>
    </>
  );
}

export default EmbeddedSystems;
