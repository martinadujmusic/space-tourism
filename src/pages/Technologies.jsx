import { useState } from "react";
import "../index.css";

import Header from "../components/Header";
import Body from "../components/Body";

const Tehnologies = ({ data }) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="container">
      <Header>
        <h2 className="subheading">
          <span>03</span>
          Space Launch 101
        </h2>
      </Header>
      <div className="container technology-container">
        <div className="indicators pagination-technology">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {data.map((tehnology, idx) => {
          return (
            <article
              key={tehnology.description}
              className={
                slide === idx
                  ? "slide technology-content"
                  : "slide slide-hidden"
              }
            >
              <Body>
                <span>THE TERMINOLOGY...</span>
                <h3>{tehnology.name}</h3>
                <p>{tehnology.description}</p>
              </Body>
              <img
                className="technology-image"
                src={tehnology.images.portrait}
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Tehnologies;
