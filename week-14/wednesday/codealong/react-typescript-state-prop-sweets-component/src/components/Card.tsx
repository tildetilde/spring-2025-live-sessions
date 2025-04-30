import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  icon: string;
  coloe: "purple" | "teal" | "coral";
  onSelect: () => void;
}

const Card = ({ title, description, icon, color, onSelect }) => {
  return (
    <div className={`card ${color}`} onClick={onSelect}>
      <img src={icon} alt={`${title} icon`} className="card-icon" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="learn-more">Learn More</button>
    </div>
  );
};

export default Card;
