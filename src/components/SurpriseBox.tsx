import "./SurpriseBox.css";

interface SurpriseBoxProps {
  onOpen: () => void;
}

const SurpriseBox = ({ onOpen }: SurpriseBoxProps) => {
  return (
    <div
      className="relative flex items-center justify-center cursor-pointer"
      onClick={onOpen}
    >
      <div className="gift"></div>
    </div>
  );
};

export default SurpriseBox;
