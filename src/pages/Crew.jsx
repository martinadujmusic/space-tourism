import { useState } from "react";
import "../index.css";

function Crew({ data }) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="container crew-container">
      <h2 className="subheading crew-subheading">
        <span>02</span>
        MEET YOUR CREW
      </h2>
      {data.map((crew, idx) => {
        return (
          <div
            key={crew.bio}
            className={slide === idx ? "crew-slide" : "hidden"}
          >
            <div className="crew-content">
              <div className="crew-text">
                <span className="crew-heading">{crew.role}</span>
                <h3 className="crew-name">{crew.name}</h3>
                <p className="crew-bio">{crew.bio}</p>
              </div>
              <div className="indicators pagination-crew">
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
                    ></button>
                  );
                })}
              </div>
            </div>
            <img
              src={crew.images.webp}
              alt="crew-member"
              className="crew-img"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Crew;
