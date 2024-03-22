import { useState } from "react";
import "../index.css";

const Tehnologies = ({ data }) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="container technology-container">
      <h2 className="subheading technology-subheading">
        <span>03</span>
        Space Launch 101
      </h2>
      {data.map((tehnology, idx) => {
        return (
          <div
            key={tehnology.description}
            className={slide === idx ? "technology-slide" : "hidden"}
          >
            <div className="technology-content">
              <div className="indicators pagination-technology">
                {data.map((_, idx) => {
                  return (
                    <button
                      key={idx}
                      className={
                        slide === idx
                          ? "indicator"
                          : "indicator indicator-inactive"
                      }
                      onClick={() => setSlide(idx)}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
              <div className="technology-text">
                <span className="technology-heading">THE TERMINOLOGY...</span>
                <h3 className="technology-name">{tehnology.name}</h3>
                <p className="technology-description">
                  {tehnology.description}
                </p>
              </div>
            </div>
            <img className="technology-img" src={tehnology.images.portrait} />
          </div>
        );
      })}
    </div>
  );
};

export default Tehnologies;
