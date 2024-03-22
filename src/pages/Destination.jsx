import { useState } from "react";
import "../index.css";

export const Destination = ({ data }) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="container destination-container">
      <h2 className="subheading destination-subheading">
        <span>01</span> PICK YOUR DESTINATION
      </h2>

      {data.map((destination, idx) => {
        return (
          <div
            key={destination.description}
            className={slide === idx ? "destination-slide" : "hidden"}
          >
            <img
              src={destination.images.webp}
              alt="destination image"
              className="destination-img"
            />
            <div className="destination-content">
              <div className="indicators destination-names">
                {data.map((destination, idx) => {
                  return (
                    <span
                      key={idx}
                      className={
                        slide === idx
                          ? "indicator active"
                          : "indicator indicator-inactive"
                      }
                      onClick={() => setSlide(idx)}
                    >
                      {destination.name}
                    </span>
                  );
                })}
              </div>
              <div className="destination-text">
                <h1 className="destination-name">{destination.name}</h1>
                <p className="destination-description">
                  {destination.description}
                </p>
                <span className="destination-line"></span>

                <div className="destination-information">
                  <div className="average-distance">
                    <h4>Avg. distance</h4>
                    <span>{destination.distance}</span>
                  </div>

                  <div className="destination-travel-time">
                    <h4>Est.travel time</h4>
                    <span>{destination.travel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
