import React, { useEffect, useReducer } from 'react';

const initialState = {currentPage: 1, totalItem: 0 }

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
    switch (action.type) {
        case "CURRENT_PAGE":
            return {...state, currentPage: action.payload}
        case "TOTAL_ITEMS":
            return {...state, totalItem: action.payload}
        default:
            return state;
    }
}

const Pagination = () => {

    const [state, dispatch] = useReducer(paginationReducer, initialState)

    const data = Array.from({length: 25}, (_, index) => `Item ${index + 1}`);
    // console.log(data);

    useEffect(() => {
        dispatch({type: "TOTAL_ITEMS", payload: data.length})
    }, []);

    const startIndex = (state.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayItems = data.slice(startIndex, endIndex);

    const handleClick = (newPage) => {
        dispatch({type: "CURRENT_PAGE", payload: newPage})
    };


  return (
    <div>
        <h1>Pagination using "useReducer"</h1>

        <ul>
            {
                displayItems.map((e) => (
                    <li key={e.id}>{e}</li>
                ))
            }
        </ul>

        <div>
            <button onClick={() => handleClick(state.currentPage - 1)} disabled={state.currentPage === 1}>Prev</button>
            <button onClick={() => handleClick(state.currentPage + 1)} disabled={endIndex >= data.length}>Next</button>
        </div>
    </div>
  )
}

export default Pagination;