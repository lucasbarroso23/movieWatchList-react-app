import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist'))
        : [],
    watched: localStorage.getItem('watched')
        ? JSON.parse(localStorage.getItem('watched'))
        : [],
}

//create context 
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //local storege only saves in string format, so we need do use JSON.stringfy to parse the array of elements to a string
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

    //actions
    const addMovieToWatchlist = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    }

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchlist
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}