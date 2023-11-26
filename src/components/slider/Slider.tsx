import React from 'react';
import Flickity from "react-flickity-component";
import "./Slider.css";
import slide1 from "../../assets/казеной.excursion.jpg";
import slide2 from "../../assets/вечерниеМечетиЧечни.jpg";
import slide3 from "../../assets/аргунскоеУшелье.jpg";




const Slider = () => {
    const flickityOptions = {
        initialIndex: 2,
        wrapAround: true,
      };
    
      const films = {
        id: [1, 2, 3],
        title: [
          "Путешествие в гостеприимный Грозный и горные селения Чечни с Hello, World!",
          "Приглашаю вас в вечернее путешествие по самым красивым мечетям Чечни",
        ],
        image: [slide1, slide2, slide3],
      };
    return (
        <div className="App">
      <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {films["id"].map((index) => {
          return (
            <div key={index} className="Plate">
              <>
                <div className="imageTitle">{films["title"][index - 1]}</div>
                <div
                  style={{
                    backgroundImage: `url(${films["image"][index - 1]})`,
                    width: "100%",
                    height: 500,
                    backgroundSize: "100% 100%",
                    borderRadius: "32px",
                  }}
                  className="firstImg"
                ></div>
              </>
            </div>
          );
        })}
      </Flickity>
    </div>
  );
};
    


export default Slider;