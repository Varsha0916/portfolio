

const EmbeddedSystems = () => {
  return (
    <>
      <h1 className=" text-glow text-[50px] font-bold text-gray-100 mb-4 flex flex-row mt-[100px]">
        <h1 className="text-[#fe5d26] underline">E</h1>mbedded Services
      </h1>
      <img 
        className="h-[534px] w-[1182px] top-[15453px] left-[49px] radius-[24px] items-center mt-16 justify-center" 
        src='./src/assets/images/emb.svg' 
        alt="Embedded Service" 
      />
  
      <div className="bg-black text-white py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          <div className="border border-gray-700 rounded-lg p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
                <img src="./src/assets/images/emb1.svg" alt="Custom Development" className="w-[40px] h-[40px]" />
              </div>
              <h3 className="text-2xl text-left  mb-2">Custom Embedded Development</h3>
              <p className="text-sm text-left text-gray-400">
                From concept to deployment, we design and develop bespoke embedded systems tailored to your specific requirements.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] text-black rounded-full">
                <img src="./src/assets/images/add.svg" alt="Custom Development" className="w-[15px] h-[15px]" />
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
                <img src="./src/assets/images/emb2.svg" alt="Firmware Design" className="w-[40px] h-[40px]" />
              </div>
              <h3 className="text-2xl text-left  mb-2">Firmware Design and Development</h3>
              <p className="text-sm text-left text-gray-400">
                High-quality firmware solutions optimized for performance and reliability, ensuring seamless hardware-software integration.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] text-black rounded-full">
                <img src="./src/assets/images/add.svg" alt="Custom Development" className="w-[15px] h-[15px]" />
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
                <img src="./src/assets/images/emb3.svg" alt="IoT Solutions" className="w-[40px] h-[40px]" />
              </div>
              <h3 className="text-2xl text-left  mb-10">IoT Solutions</h3>
              <p className="text-sm bottom-44 text-left text-gray-400">
                Empower your devices with intelligent connectivity, enabling real-time data collection, processing, and communication.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] text-black rounded-full">
                <img src="./src/assets/images/add.svg" alt="Custom Development" className="w-[15px] h-[15px]" />
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
                <img src="./src/assets/images/emb4.svg" alt="Testing and Optimization" className="w-[40px] h-[40px]" />
              </div>
              <h3 className="text-2xl text-left  mb-2">Testing and Optimization</h3>
              <p className="text-sm text-left text-gray-400">
                Rigorous testing and fine-tuning to ensure efficient, performance-ready reliability in real-world scenarios.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#fe5d26] text-black rounded-full">
                <img src="./src/assets/images/add.svg" alt="Custom Development" className="w-[15px] h-[15px] z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex items-center justify-between  width-[1189px] height-[591.43px] top-[16366px] left-[45px] p-6 bg-black text-white ">
        <img 
          src="./src/assets/images/hex.svg" 
          alt="IoT Solutions" 
          className="w-[600px] h-[591.43px]  border-neutral-600 border-[1.22px] gap-[12.26px] rounded-xl"
        />
  
        <div className="text-left w-[400px]  font-light  ml-40">
          <ul className="list-disc  text-[28px] leading-[61px] marker:text-orange-600">
            <li><span className="text-orange-500 ">C</span>ustomized Embedded Solutions</li>
            <li><span className="text-orange-500 ">R</span>eal-Time Processing</li>
            <li><span className="text-orange-500 ">S</span>eamless Hardware Integration</li>
            <li><span className="text-orange-500 ">L</span>ow Power Consumption</li>
            <li><span className="text-orange-500 ">S</span>calable and Secure Architectures</li>
          </ul>
        </div>
      </div>
  
      <p className="text-center text-neutral-600 text-[32px] px-[50px] leading-[43px] max-w-[1300px] mx-auto mt-9">
        At the heart of technological innovation lies embedded systems, seamlessly <br/>
        <span className='text-white'>integrating software</span> and hardware to power modern devices and solutions. Our <br/>
        embedded services are designed to provide  <span className='text-white'>robust, efficient</span>, and  <span className='text-white'>scalable systems</span> <br/>
        tailored to your unique needs, ensuring your business stays ahead in today’s <br/>
        competitive landscape.
      </p>
    </>
  );
}

export default EmbeddedSystems;
