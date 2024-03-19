import React, {useState} from 'react';

const PhotoContainer = (props) => {
    console.log(props);
    const [currentIndex, setCurrentIndex] = useState(0);
    if (!props.photos || props.photos.length === 0 || currentIndex >= props.photos.length) {
        return <div>No photos available</div>;
    }
    const {url} =props.photos[currentIndex];
    const leftArrow={
        position: "absolute",
        top: "50%",
        left: "32px",
        color: "#fff",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        fontSize: "45px",
        zIndex: 1
    };
    const rightArrow={
        position: "absolute",
        top: "50%",
        right: "32px",
        color: "#fff",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        fontSize: "45px",
        zIndex: 1
    };
    const imageStyles={
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: 'cover'
    };
    const imageSliderStyles={
        position: "relative",
        height: "100%",
    };
    const dotsContainer = {
        display: "flex",
        justifyContent: "center"
    };
    const dotStyles ={
        cursor: "pointer",
        fontSize: "20px",
        margin: "0 10px"
    }
    const goToPrevious = () => {
        const isFirstIndex= currentIndex===0;
        const ind = isFirstIndex ? props.photos.length-1: currentIndex-1;
        setCurrentIndex(ind);
    };
    const goToNext = () => {
        const isLastIndex= currentIndex===props.photos.length-1;
        const ind = isLastIndex ? 0: currentIndex+1;
        setCurrentIndex(ind);
    };
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div style={imageSliderStyles}>
            
          <div  style={imageStyles}></div>
          <div style={leftArrow} onClick={goToPrevious}>  ❰ </div>
            <div style={rightArrow} onClick={goToNext}>  ❱ </div>
            <div style={dotsContainer}>
                
                    {
                        props.photos.map((photo,index) => (
                                <div key={index} onClick={() => goToSlide(index)} style={dotStyles}> ● </div>
                        ))
                    }
               
            </div>
        </div>
    );
}

export default PhotoContainer;