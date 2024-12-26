import Card from './Card';
const Navbar = () => {

  const members = [
    { image: './rao.png', name: 'Rao Ghuge', location: 'Pargaon, MH', company: 'The Baap Company' },
    { image: './atul.png', name: 'Atul Batra', location: 'Noida, UP', company: 'Simplify Workforce' },
    { image: './nikita.png', name: 'Nikita Bhagwat', location: 'India, MH', company: 'IBM' },
    { image: './monika.png', name: 'Radhika Dere', location: 'India, MH', company: 'Google' },
    { image: './popat.png', name: 'Popat Erape', location: 'India, MH', company: 'Plastic Omnium' },
    { image: './men.png', name: 'Vaibhav Nehe', location: 'India, MH', company: 'Baap Company' },
    { image: './naina.png', name: 'Sakshi Daut', location: 'India, Hyderabad', company: 'Microsoft' },
    { image: './nikita.png', name: 'Nikita Bhagwat', location: 'India, MH', company: 'IBM' },
  ];
  return (
<div className="bg-[#F8F7F7] h-full pt-8 container mx-auto md:px-10 sm:px-8">

    <nav className="flex justify-between items-center border-b-[1px] border-light-gray]">
   
      <div className="flex flex-col items-start">
  <span className="font-extrabold text-[28px] font-gilroy-heavy  lg:text-[28px] lg:font-bold  md:text-[15px]  " style={{color:"#000000", font:"bold"}}>
  <span className="bg-[#A8CE46] px-1 rounded-sm ">
  Good People
    </span>{""}
    Foundation  
  </span>
  <p className="font-[14px] text-[16px] text-[#3E3737] font-dmSans md:text-[10px]   lg:text-[14px]">
  Changing the System | Creating better India
</p>

</div>

<div className="hidden lg:flex  md:flex space-x-8 text-[#3E3737] font-dmSans text-[14px]  w-1/3 justify-end items-center md:text-[10px] md:w-1/4  lg:text-[14px] ">
  <a href="#projects" className="hover:text-green-600 ">
    Projects
  </a>
  <a href="#events" className="hover:text-green-600">
    Events
  </a>
  <a href="#mission" className="hover:text-green-600">
    Mission
  </a>
</div>


      <div className="flex items-center space-x-4">
        <div className="">
          <p className="text-[#3E3737]   text-[15px] font-normal font-dmSans md:text-[10px] lg:text-[15px] ">Know more about it</p>
          <p className=" text-[#000000]  text-[18px] font-bold font-dmSans lg:text-[15px] md:text-[18px]">+91 868 998 8686</p>
        </div>
        <button className="bg-[hsla(77,58%,54%,1)] text-[#3E3737] px-4 py-2 rounded-full font-bold text-[14px] font-sans lg:text-[14px] md:text-[10px]">
        Be a Good Person
        </button>
      </div>
    </nav>

    <div className="text-[#000000] text-[50px] font-dmSans tracking-[0] font-normal mt-1 lg:text-[40px] md:text-[20px]">
  Let&apos;s come together to change the System
</div>
<div className="text-[#525252] text-[16px]  font-dmSans lg:text-[16px] md:text-[10px]" >
<p>There should be better place to live, we can&apos;t tolerate corrupt system, we can&apos;t let our Mother Earth get more spoiled. We at </p>
<p>Good People Foundation, coming together for better future, to build a better place to live for our future generations.</p>
</div>

<div className="flex justify-between mt-5">
<div className=" text-[#000000] font-bold text-[18px] font-dmSans lg:text-[18px] md:text-[13px]">
  Good People
</div>
<div className="text-[#000000] font-medium text-[15px]  font-dmSans lg:text-[15px] md:text-[10px]">View All</div>
</div>

<div className="text-[#777272]  text-[15px] font-dmSans lg:text-[15px] md:text-[11px]">
  Total 239 individuals has joined to be part of this initiative so far from 100 places.
  </div>

  <div className="flex flex-wrap gap-4 mt-1">
  {members.map((member, index) => (
    <Card
      key={index}
      image={member.image}
      name={member.name}
      location={member.location}
      company={member.company}
    />
  ))}
</div>


<div className="text-[#3E3737] font-bold text-[18px] font-dmSans mt-5 lg:text-[18px] md:text-[13px]">Projects</div>
<div className="text-[#777272] text-[15px]  font-dmSans lg:text-[15px] md:text-[11px]">All the initiatives taken up by the all good people out there.</div>

<div className="relative bg-[#FFFFFF] bg-no-repeat bg-clip-padding w-56 h-auto mt-16 lg:w-56 md:w-48">
  <img src="./Gav.png"  alt="Raosaheb Ghuge" className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-t-lg  mt-3 md:w-20 md:h-20 lg:w-28 lg:h-28"/>
  <p className="text-[#727272] font-light text-[15px] font-dmSans p-4 pt-16 lg:text-[15px] lg:pt-20 md:text-[11px]">
    This is a community village development project through which we are creating a social ecosystem for old age people, aging population, youth, and women. This Gaogotha will also create a themed village where people would love to stay and enjoy.
  </p>
</div>

<footer className="mt-8 lg:text-[15px] md:text-[13px]" style={{ color: '#B56D2F' }}>
  All rights reserved @ <b>Good People Foundation</b>
</footer>


    </div>
  );
};

export default Navbar;
