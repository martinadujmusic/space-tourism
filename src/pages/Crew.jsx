import { useState } from "react";
import "../index.css";

import Body from "../components/Body";

function Crew({ data }) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="container">
      {data.map((crew, idx) => {
        return (
          <article
            key={crew.bio}
            className={
              slide === idx ? "slide crew-container" : " slide slide-hidden"
            }
          >
            <h2 className="subheading">
              <span>02</span>
              MEET YOUR CREW
            </h2>
            <div className="crew-content">
              <div className="crew-text">
                <Body>
                  <span>{crew.role}</span>
                  <h3 className="name">{crew.name}</h3>
                  <p className="crew-bio">{crew.bio}</p>
                </Body>
              </div>
              <img
                src={crew.images.webp}
                alt="crew-member"
                className="crew-img"
              />
            </div>
          </article>
        );
      })}

      <div className="indicators pagination-crew">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default Crew;
