const Card = ({ image, name, location, company }) => {
    return (
      <div className="flex flex-col items-center bg-white rounded-lg shadow w-52 h-48">
<img src={image}  alt={name} className="w-full h-24 object-cover object-top rounded-t-lg"/>        <h3 className="text-lg font-bold mt-2 text-[hsla(0, 0%, 0%, 1)]">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-700">{company}</p>
      </div>
    );
  };
  
  export default Card;
  