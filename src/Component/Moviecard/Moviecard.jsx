import React, { useEffect } from 'react'
import "./moviecard.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Moviecard = (props) => {
  //aos library
  useEffect(()=>{
    Aos.init({duration:500});
  },[]);
  return (
    <div className="movie_card" data-aos="flip-up">
      <img src={props.bgImage} alt="" />
      <div className="moviecard_maincontainer">
        <div className="movie_card_content">
          <div className="moviecard_movie_detail">
            <img src={props.subImage} alt="movieImage" />
            <div>
              <h1>{props.title}</h1>
              <p>
                {props.year},{props.director}
              </p>
              <div className="timeType">
                <div>{props.time}</div>
                <span>{props.type}</span>
              </div>
            </div>
          </div>
          <div className="moviecard_overview">{props.overview}</div>
        </div>
        <div className="moviecard_icons">
          <i class="fa-solid fa-share-nodes"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-message"></i>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
