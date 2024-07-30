import "./SurpriseBox.css";

interface SurpriseBoxProps {
  onOpen: () => void;
}

const SurpriseBox = ({ onOpen }: SurpriseBoxProps) => {
  return (
    <div className="relative flex items-center justify-center ">
      <div className="gift cursor-pointer" onClick={onOpen}></div>
    </div>
  );
};

export default SurpriseBox;
