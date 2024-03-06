import React, { useReducer, useState } from 'react';

const boxReducer = (state, action) => {
    switch (action.type) {
        case "MOVE":
            return {
                ...state,
                left: action.payload.left,
                top: action.payload.top
            }
        default:
            return state;
    }
}

const Drag = () => {

    const [boxState, dispatch] = useReducer(boxReducer, {left: 0, top: 0});
    const [dragging, setDragging] = useState(false)
    const [initialX, setInitialX] = useState(0)
    const [initialY, setInitialY] = useState(0)

    const handleMouseDown = (e) => {
        setDragging(true)
        setInitialX(e.clientX - boxState.left);
        setInitialY(e.clientY - boxState.top);
    };

    const handleMouseUp = () => {
        setDragging(false)
    };

    const handleMouseMove = (e) => {
        if(dragging) {
            const left = e.clientX - initialX;
            const top = e.clientY - initialY;
            dispatch({type: "MOVE", payload: {top, left}});
        }
    };

  return (
    <div>
        <h1>Draggable Component using "useReducer"</h1>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} style={{top: boxState.top, left: boxState.left, position: "absolute", fontSize: "8rem"}}>
            Drag me
        </div>
    </div>
  )
}

export default Drag;