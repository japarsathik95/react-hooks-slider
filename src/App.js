import React, { useState, useEffect } from "react";
import "./style.css";

export default function Slider() {
  let [slidenum, setSlidenum] = useState(1);
  const [slides, setSlider] = useState([
    {
      id: 1,
      headline: "one",
      text: "slide one"
    },
    {
      id: 2,
      headline: "two",
      text: "slide two"
    },
    {
      id: 3,
      headline: "three",
      text: "slide three"
    },
    {
      id: 4,
      headline: "four",
      text: "slide four"
    },
    {
      id: 5,
      headline: "five",
      text: "slide five"
    }
  ]);

  const autoSlider = () => {
    setSlidenum(++slidenum);
  };

  useEffect(() => {
    if (slidenum >= slides.length) {
      setInterval(autoSlider, 3000);
    } else {
      clearInterval(autoSlider);
    }
  });

  // const slideData = slides.filter(data => data.id === slidenum);
  // alert(JSON.stringify(slideData));

  const renderSlides = id => {
    return slides.map(data => {
      if (data.id === id) {
        return (
          <div>
            <h1>{data.headline}</h1>
            <p>{data.text}</p>
          </div>
        );
      }
    });
  };

  return (
    <div class="slider">
      <div class="slider-btn">
        <button disabled={slidenum < 2} onClick={() => setSlidenum(--slidenum)}>
          Prev
        </button>
        <button disabled={slidenum === 1} onClick={() => setSlidenum(1)}>
          Reset
        </button>
        <button
          disabled={slidenum >= slides.length}
          onClick={() => setSlidenum(++slidenum)}
        >
          Next
        </button>
      </div>
      <div class="slides">{renderSlides(slidenum)}</div>
    </div>
  );
}
