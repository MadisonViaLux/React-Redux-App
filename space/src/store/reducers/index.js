import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE
  } from "../actions";

const initialState = {
    photoOfTheDay: null,
    error: "",
    isLoading: false,
    title: ""
  };

export const reducer = (state = initialState, action) => {
    console.log('this is the reducer', action)
    switch(action.type){

        // case FETCH_PHOTO_START:
        //     return {
        //         ...state,
        //         error: 'You done messed up your code bruh..',
        //         isLoading: true
        //     };

        // case FETCH_PHOTO_SUCCESS:
        //     return{
        //         ...state,
        //         isLoading: false,

        //     }

    }
}