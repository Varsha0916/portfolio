import React from 'react';

const blockChain = () => {
  const blockchain = [
    {
      id: 1,
      icon: "./src/assets/images/blockChain/bc2.svg", 
      title: "Military-grade encryption",
    },
    {
      id: 2,
      icon: "./src/assets/images/blockChain/bc3.svg", 
      title: "Data Accuracy",
    },
    {
      id: 3,
      icon: "./src/assets/images/blockChain/bc4.svg",
      title: "Scalable Solutions",
    },
    {
      id: 4,
      icon: "./src/assets/images/blockChain/bc5.svg",
      title: "Robust Performance",
    },
  ];

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


    return(
    <div className=" inset-0 min-w-[1300px] mt-[100px] min-h-[1205.83px] bg-radial-gradient from-orange-600/80 via-transparent to-transparent">
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold min-w-[90%] max-w-screen h-auto m-auto text-center">
    <span className="text-[#fe5d26] underline mt-[100px] ml-2">B</span>lockChain Technology
  </h2>
  <img 
  src='./src/assets/images/bc.svg' 
  className='m-auto mt-[80px] rotate-90 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] max-w-[600px]' 
  alt="Blockchain" 
/>

  <div className=" max-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 z-5 mt-0 p-6 max-w-7xl hover:gap-4 transform-all duration-300">
        {blockchain.map((service) => (
          <div
            key={service.id}
            className="bg-[#090909] border-[0.9px] border-[#222222] w-[177.59px] h-[143.2px] hover: rounded-lg shadow-lg p-6 text-center transition duration-300"
          >
            <div className="mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mx-auto  text-blue-500"
              />
            </div>
            <h3 className="text-[#f0f0f0]  mt-[10px] text-[12px] font-400 ">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
    <p className="text-center text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] px-[15px] sm:px-[20px] md:px-[30px] lg:px-[40px] leading-[24px] sm:leading-[30px] md:leading-[35px] lg:leading-[40px] max-w-[100%] lg:max-w-[1300px] mt-10 m-auto">
  Revolutionize the way you do business with our cutting-edge blockchain solutions.
  <span className="text-blue-800"> Blockchain</span> is more than just a <br />technology; it’s a transformative approach to achieving transparency, security, and efficiency across industries.
  <br /> Our expertise covers decentralized applications, smart contracts, and secure digital ledgers, enabling businesses
  <br /> to <span className="text-white">streamline processes, reduce operational costs</span>, and
  <span className="text-white"> build trust with stakeholders.</span><br />
  Whether you aim to optimize supply chains, implement cryptocurrency solutions, or
  <span className="text-white">safeguard sensitive data,</span> our<br /> blockchain services are designed to meet your unique challenges. Harness the power of blockchain to
  <span className="text-white"> unlock new <br /> opportunities,</span> ensure data
  <span className="text-white"> integrity,</span> and <span className="text-white">stay ahead</span> in a competitive digital landscape.
</p>

</div>

    );
};

export default blockChain;