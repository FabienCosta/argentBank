/* eslint-disable react/prop-types */
import "./features.scss";

const Features = (props) => {
  return (
    <>
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={props.iconUrl} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export { Features };
