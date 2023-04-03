import CardIcons from "../../assets/card-Icon.png";
const DashCard = () => {
  return (
    <div className="custom-card flex gap-3 xs:flex-col sm:flex-row">
      <div className="flex gap-4">
        <div className="my-auto">
          <img src={CardIcons} alt="CardIcons" />
        </div>
        <div className="my-auto">
          <div className="text-[#6C757D] text-xs mb-1">Subscription Status</div>
          <div>Expiring in 2 days</div>
        </div>
      </div>
      <div className="sm:ml-auto sm:mr-0 my-auto xs:ml-0 xs:mr-auto xs:mt-2">
        <button className="py-4 px-6 custom-button">Renew Subscription</button>
      </div>
    </div>
  );
};

export default DashCard;
