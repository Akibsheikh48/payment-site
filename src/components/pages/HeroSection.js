import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import {Button} from './Button';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <div
      className={lightBg ? "home__hero_section" : "home__hero_section darkBg"}
    >
      <div className="container">
        <div
          className="row home__hero_row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="col">
            <div className="home__hero_text_wrapper">
              <div className="top_line">{topLine}</div>
              <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
              <p className={lightTextDesc ? 'home__hero_subtitle' : 'home__hero_subtitle dark'}>
                  {description}
              </p>
              <Link to='/sing_up'>
                  <Button buttonSize='btn__wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
              </Link>

            </div>
          </div>
          <div className="col">
            <div className="home__hero_img_wrapper">
                <img className="home__hero_img" src={img} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
