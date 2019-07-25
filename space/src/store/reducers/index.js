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
    switch(action.type){

    }
}