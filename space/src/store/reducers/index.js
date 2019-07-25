import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
    REMOVE_CONTENT
  } from "../actions";



const initialState = {
    photoOfTheDay: null,
    error: "",
    isLoading: false,
    title: "",
    info: ""
  };



export const reducer = (state = initialState, action) => {
    // console.log('this is the reducer', action.payload)
    switch(action.type){

        case FETCH_PHOTO_START:
            return {
                ...state,
                error: 'You done messed up your code bruh..',
                isLoading: true
            };

        case FETCH_PHOTO_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: '',
                photoOfTheDay: action.payload.url,
                title: action.payload.title,
                info: action.payload.explanation
            };

        case FETCH_PHOTO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case REMOVE_CONTENT:
            return{
                ...state,
                photoOfTheDay: null,
                title: '',
                info: ''
            }

        default: return state;
    }
}