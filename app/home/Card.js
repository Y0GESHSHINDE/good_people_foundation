const Card = ({ image, name, location, company }) => {
    return (
      <div className="flex flex-col items-center bg-white rounded-lg shadow w-auto max-w-[300px] lg:w-44 md:w-36  md:h-36 lg:h-44">
  <img src={image} alt={name} className="w-full h-24 object-cover object-top rounded-t-lg lg:h-20 md:h-16" />
  <h3 className="text-[18px] font-bold mt-2 text-[#000000] lg:text-[15px] md:text-[11px] ">{name}</h3>
  <p className="text-[14px] text-[#6A6A6A] lg:text-[13px] md:text-[11px]">{location}</p>
  <p className="text-[11px] text-[#5A5A5A] text-center font-bold lg:text-[11px] md:text-[9px]">{company}</p>
</div>

    );
  };
  
  export default Card;
  