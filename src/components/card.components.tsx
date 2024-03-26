const Card = ({ title, text }) => {
  return (
    <div className="card-container rounded-[20px]">
      <div className="card min-h-[450px] p-[24px] rounded-[20px] shadow-lg flex items-center">
        <div>
          <h3 className="text-center text-[32px] text-pink-cloud">{title}</h3>
          <p className="text-center text-white mt-[24px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
