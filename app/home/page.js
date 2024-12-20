import Card from './Card';
const Navbar = () => {

  const members = [
    { image: './rao.png', name: 'Raosaheb Ghuge', location: 'Pargaon, MH', company: 'The Baap Company' },
    { image: './atul.png', name: 'Atul Batra', location: 'Noida, UP', company: 'Simplify Workforce' },
    { image: './nikita.png', name: 'Nikita Bhagwat', location: 'India, MH', company: 'IBM' },
    { image: './monika.png', name: 'Monika Godase', location: 'India, MH', company: 'Google' },
    { image: './popat.png', name: 'Popat Erape', location: 'India, MH', company: 'Plastic Omnium' },
    { image: './men.png', name: 'Vaibhav Nehe', location: 'India, MH', company: 'Baap Company' },
    { image: './naina.png', name: 'Sakshi Daut', location: 'India, Hyderabad', company: 'Microsoft' },
  ];
  return (
<div className="bg-[hsla(0,7%,97%,1)] h-full pl-20 pr-20 pt-8">

    <nav className="flex justify-between items-center border-b-[1px] border-light-gray]">
   
      <div className="flex flex-col items-start">
  <span className="text-[28px] leading-[41px] font-bold font-gilroy text-[hsla(0, 0%, 0%, 1)]">
  <span className="bg-[hsla(77,58%,54%,1)] px-1 rounded-sm text-[28px] leading-[41px]">
  Good People
    </span>{" "}
    Foundation  
  </span>
  <p className="text-[16px] leading-[29px] font-light text-[#3e3737] font-dmSans " >
  Changing the System | Creating better India
</p>

</div>

<div className="hidden md:flex space-x-8 text-[hsla(0, 6%, 23%, 1)] font-dmSans text-[15px]  w-1/2 justify-end items-center ">
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
          <p className="text-[hsla(0, 6%, 23%, 1)] text-normal  text-[16px] leading-[29px] font-dmSans">Know more about it</p>
          <p className=" text-hsla(0, 0%, 0%, 1) font-bold text-[18px] leading-[26px] font-dmSans">+91 868 998 8686</p>
        </div>
        <button className="bg-[hsla(77,58%,54%,1)] text-[hsla(0, 6%, 23%, 1)] px-4 py-2 rounded-full font-bold text-[14px] leading-[29px] font-sans">
        Be a Good Person
        </button>
      </div>
    </nav>

    <div className="text-[hsla(0,0%,0%,1)] text-[46px] leading-[60px] font-dmSans tracking-[0] font-normal ">
  Let&apos;s come together to change the System
</div>
<div className=" text-[16px] leading-[29px] font-dmSans font-normal" >
<p>There should be better place to live, we can&apos;t tolerate corrupt system, we can&apos;t let our Mother Earth get more spoiled. We at </p>
<p>Good People Foundation, coming together for better future, to build a better place to live for our future generations.</p>
</div>

<div className="flex justify-between mt-5">
<div className="font-bold text-[18px] leading-[29px] font-dmSans">
  Good People
</div>
<div className="font-medium text-[14px] leading-[29px] font-dmSans">View All</div>
</div>

<div className="text-[hsla(0, 2%, 46%, 1)] font-normal text-[15px] leading-[29px] font-dmSans">
  Total 239 individuals has joined to be part of this initiative so far from 100 places.
  </div>

  <div className="flex gap-4 overflow-x-auto">
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

<div className="text-[hsla(0, 6%, 23%, 1)] font-bold text-[18px] leading-[29px] font-dmSans mt-5">Projects</div>
<div className="text=[hsla(0, 2%, 46%, 1)] text-[15px] leading-[29px] font-dmSans">All the initiatives taken up by the all good people out there.</div>

<div className="relative bg-white bg-[0%_0%] bg-no-repeat bg-clip-padding w-56 h-60 mt-16">
  <img src="./Gav.png"  alt="Raosaheb Ghuge" className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-t-lg"/>
  <p className="text-[hsla(0, 0%, 45%, 1)] font-light text-[14px] leading-[19px] font-dmSans p-4 pt-16">
    This is a community village development project through which we are creating a social ecosystem for old age people, aging population, youth, and women. This Gaogotha will also create a themed village where people would love to stay and enjoy.
  </p>
</div>

<footer className="mt-10" style={{ color: 'hsla(28, 59%, 45%, 1)' }}>
  All rights reserved @ <b>Good People Foundation</b>
</footer>


    </div>
  );
};

export default Navbar;
