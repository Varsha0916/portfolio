import React from 'react';

const ourStory = () => {
  {/* Data for our story */}
      const blocks = [
          { 
            id:1,
            number: "01",
            title: "Decentralized Design",
            description:
              "A team of visionary developers believed in revolutionizing digital trust through decentralization. Their mission was to craft blockchain solutions with robust and secure architectures, empowering businesses to build trustless, transparent systems.",
          },
          {
            id:2,
            number: "02",
            title: "Cutting-Edge Engineering",
            description:
              "Driven by innovation, skilled engineers founded the blockchain development wing to harness the power of distributed ledger technology. Their expertise lay in creating scalable, efficient, and tamper-proof digital ecosystems.",
          },
          {
            id:3,
            number: "03",
            title: "Strategic Implementation",
            description:
              "A dedicated team of project managers ensured blockchain solutions were seamlessly integrated into existing frameworks. They focused on precise planning and execution to deliver impactful, on-time implementations.",
          },
          {
            id:4,
            number: "04",
            title: "Collaborative Ecosystems",
            description:
              "Recognizing the importance of partnerships, the team emphasized creating interoperable blockchain solutions. Their goal was to foster ecosystems where businesses could thrive through collaboration and shared value.",
          },
          {
            id:5,
            number: "05",
            title: "Client-Centric Innovation",
            description:
              "Understanding unique client needs, the team tailored blockchain strategies to solve real-world challenges. Their mission was to drive transformation and empower organizations with secure, transparent, and efficient blockchain solutions.",
          },
          {
            id:6,
            number: "06",
            title: "Shaping the future",
            description:
              "Through constant innovation, the blockchain division expanded its reach across industries, redefining processes in finance, supply chain, healthcare, and beyond. Their passion for progress drives them to shape the future of decentralized technology.",
          },
        ];
  {/*data for semi-circle */}
        const divisions = [
          {
            id:5,
            number:"5",
            title:"Transactions recorded"
          },
          {
            id:4,
            number:"4",
            title:"Network Validated"
          },
          {
            id:3,
            number:"3",
            title:"Blocks Linked"
          },
          {
            id:2,
            number:"2",
            title:"Data Encrypted"
          },
          {
            id:1,
            number:"1",
            title:"Secure Key generated"
          },
        ]; 
  
        
        {/*random dots */}
        
        const numDots = 50;
        const generateDots = () => {
          return Array.from({ length: numDots }).map((_, index) => {
            const x = Math.random() * 100; 
            const y = Math.random() * 100;
            return (
              <div
                key={index}
                className="absolute bg-white rounded-full"
                style={{
                  width: "2px",
                  height: "2px",
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              ></div>
            );
          });
        };
      
  
  return (
  <>   
  {/*our story part 1 */}  
  <h1 className='flex underline text-[32px] mt-[150px]  text-white'><span className='text-[#fe5d26]'>O</span>ur Story in Blockchain Technology</h1>
  <div className="  inset-100 bg-radial-gradient from-orange-600/80 via-transparent to-transparent relative flex items-center justify-center h-[739.16px] w-[1000px] bg-black">
  <img 
  src="./src/assets/images/blockChain.svg" 
  alt="Centered Image" 
  className="z-10 w-[90%] max-w-[1000px] h-auto mx-auto" 
/>

  </div>
  <div className="flex flex-col md:flex-row justify-around items-start p-6 space-x-6 md:space-y-0">
        {blocks
        .filter((blocks) => [1, 2, 3].includes(blocks.id))
        .map((block, index) => (
          <div
            key={index}
            className="block max-w-sm text-center md:text-left "
          ><div className='flex w-[374px] h-[162px] gap-[10.53px]  items-center justify-center'>
            <h1 className="text-[112.58px] max-h font-bold text-orange-500 pb-[19.76px]">{block.number}</h1>
            <h2 className="text-[28.59px] leading-[42.88px] font-semibold pb-[19.76px] pl-[7.52px] border-b-[1px] border-b-[#262626] text-[#fe5d26]">{block.title}</h2>
          </div>
            <p className="text-[#98989A] leading-[27px] text-[18px]">{block.description}</p>
          </div>
        ))}
  </div>
  
  {/*our story part 2 */}
  <div className="relative flex items-center justify-center h-[739.16px] w-[1000px] bg-black">
  <div className="absolute inset-0 bg-radial-gradient from-orange-600/80 via-transparent to-transparent"></div>
  <div className="relative w-screen h-screen">
  <img
      src="./src/assets/images/ourStory/os1.svg"
      alt="Top Left Decoration"
      className="absolute top-0 left-0 w-[141px] h-[123px]"
    />
  <img
      src="./src/assets/images/ourStory/os2.svg"
      alt="Blockchain Centered"
      className="z-10 w-[486.12px] h-[644.14px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  <img
      src="./src/assets/images/ourStory/os3.svg"
      alt="Bottom Right Decoration"
      className="absolute -bottom-12 right-0 w-[195px] h-[207px] "
    />
  </div>
  </div> 
  <div className="flex flex-col md:flex-row justify-around items-start p-6 space-x-6 md:space-y-0">
        {blocks
        .filter((blocks) => [4,5,6].includes(blocks.id))
        .map((block, index) => (
          <div
            key={index}
            className="block max-w-sm text-center md:text-left "
          ><div className='flex w-[374px] h-[162px] gap-[10.53px]  items-center justify-center'>
            <h1 className="text-[112.58px] max-h font-bold text-orange-500 pb-[19.76px]">{block.number}</h1>
            <h2 className="text-[28.59px] leading-[42.88px] font-semibold pb-[19.76px] pl-[7.52px] border-b-[1px] border-b-[#262626] text-[#fe5d26]">{block.title}</h2>
          </div>
            <p className="text-[#98989A] leading-[27px] text-[18px]">{block.description}</p>
          </div>
        ))}
  </div>
  
  {/*our story part 3 */}
  <div className="relative w-full h-[150vw] max-w-[400px] max-h-[300px] min-h-[150px] mx-auto my-[250px] flex items-center justify-center bg-black">
  <div className="absolute w-[600px] h-[600px] bg-[#616161] opacity-[7%] rounded-full "></div>
  <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#fe5d26] to-blue-900 rounded-full blur-2xl opacity-75 "></div>
  {generateDots()}
  <img
      src="./src/assets/images/ourStory/os4.svg"
      alt="Blockchain Centered"
      className="z-10 w-[202px] h-[220px]"
  />
  {divisions.map((division, index) => {
          const angle = (Math.PI * index) / (divisions.length - 1); 
          const radius = 110; 
          const x = 35 + radius * Math.cos(angle); 
          const y = 50 - radius * Math.sin(angle);
  
          return (
            <div
              key={index}
              className="absolute w-[40%] h-[35%] rounded-full flex-row items-center justify-center"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <p className="w-[100%] m-0 text-[#FFF]">{division.title}</p>
              <div className=" h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#fff] bg-opacity-[10%] text-[#fff] border-[#fff] border-2 border-opacity-[10%] mx-auto my-[30px]">{division.number}</div>
            </div>
          );
  })}
  </div>
  
  {/*footer paragraph */}
  
  <p className="width-[204px] height-[82px] top-[21813px] left-[38px] text-[#86868B] leading-[47px] text-[24px]">
  Blockchain technology is a transformative force that enables secure, transparent, and tamper-proof digital<br/> interactions. By leveraging decentralized networks, it eliminates intermediaries, reduces costs, and enhances trust<br/> across industries such as finance, supply chain, healthcare, and real estate. Blockchain's core features, including<br/> immutability, smart contracts, and consensus <span className="text-orange-600">mechanisms</span>, empower businesses to streamline operations,<br/><span className="text-orange-600"> enhance data security</span>, and unlock <span className="text-orange-600">new opportunities.</span></p>
  </>
      
  );
  };
  
  export default ourStory;