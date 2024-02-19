import React, { useEffect, useRef, useState } from 'react';

const Checkout = ({ stepsConfig = [] }) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [margin, setMargin] = useState({
        marginLeft: 0,
        marginRight: 0
    })
    const stepRef = useRef([]);

    useEffect(() => {
        setMargin({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2
        });
    }, [stepRef])

    if(!stepsConfig.length) {
        return <></>
    };


    const handleNext = () => { 
        setCurrentStep(prevStep => {
            if(prevStep === stepsConfig.length) {
                setComplete(true)
                return prevStep
            } else {
                return prevStep + 1
            }
        })
     };

     const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
     };

    const ActiveComponent = stepsConfig[currentStep - 1]?.Component

  return (
    <>
    
    <div className='stepper'>
        {
            stepsConfig.map((item, index) => {
                return (
                    <div key={index.name}
                    ref={el => (stepRef.current[index] = el)}
                    className={`step ${currentStep > index + 1 || complete ? "complete" : ""} ${currentStep === index + 1 ? "active" : ""} `}>

                    {/* numbers */}
                        <div className='step-number'>
                            {
                                currentStep > index + 1 || complete ? (
                                    <span>&#10003;</span>
                                ) : ( index + 1 )
                            }
                        </div>

                        <div className='step-name'>{item.name}</div>

                    </div>
                )
            })
        }

        {/* progess bar */}
        <div className="progress-bar" 
        style={{
            width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
            marginLeft: margin.marginLeft,
            marginRight: margin.marginRight
        }}>
            <div className="progress" style={{width: `${calculateProgressBarWidth()}% `}}>

            </div>
        </div>

    </div>

    <ActiveComponent />

    <div>
        { !complete && 
            <button className='btn' onClick={handleNext}>{ currentStep === stepsConfig.length ? "Finish" : "Next" }</button> 
        }
    </div>

    </>
  )
}

export default Checkout