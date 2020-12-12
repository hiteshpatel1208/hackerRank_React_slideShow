import React, { useState } from 'react';

function Slides({slides}) {

    const [curSlideIndx, setCurSlideIndx] = useState(0);
    const [curSlide, setCurSlide] = useState(slides[curSlideIndx]);
    const [disableNextBtn, setDisableNextBtn] = useState(false);
    const [disablePrevBtn, setDisablePrevBtn] = useState(true);
    const [disableResetBtn, setDisableResetBtn] = useState(true);

    const handleNextClick = () => {
        let activeSlideIndx = curSlideIndx;
        if(activeSlideIndx < slides.length-1){
            activeSlideIndx++;
            setCurSlideIndx(activeSlideIndx);
            setCurSlide(slides[activeSlideIndx]);
            setDisablePrevBtn(false);
            setDisableResetBtn(false);
        }
        
        if(activeSlideIndx === slides.length-1) {
            setDisableNextBtn(true);
        }
    }

    const handlePrevClick = () => {
        let activeSlideIndx = curSlideIndx;
        if(activeSlideIndx > 0){
            activeSlideIndx--;
            setCurSlideIndx(activeSlideIndx);
            setCurSlide(slides[activeSlideIndx]);
            setDisableNextBtn(false);
        }
        
        if(activeSlideIndx === 0) {
            setDisablePrevBtn(true);
            setDisableResetBtn(true);
        }
    }

    const handleResetClick = () => {
        setCurSlideIndx(0);
        setCurSlide(slides[0]);
        setDisablePrevBtn(true);
        setDisableResetBtn(true);
        setDisableNextBtn(false);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" onClick={() => handleResetClick()} className="small outlined" disabled={disableResetBtn}>Restart</button>
                <button data-testid="button-prev" onClick={() => handlePrevClick()} className="small" disabled={disablePrevBtn}>Prev</button>
                <button data-testid="button-next" onClick={() => handleNextClick()} className="small" disabled={disableNextBtn}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{curSlide.title}</h1>
                <p data-testid="text">{curSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
