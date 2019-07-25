import axios from "axios";


export const FETCH_PHOTO_START = "FETCH_PHOTO_START";

export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";

export const FETCH_PHOTO_FAILURE = "FETCH_PHOTO_FAILURE";


export const getPhoto = () => dispatch => {
    dispatch({ type: FETCH_PHOTO_START });

    return axios
        .get('https://api.nasa.gov/planetary/apod?api_key=OIjcB7SKIhacbA4b2VAIMDCuJVNhD93xdfB8szOh')
        .then(res => {
            console.log(res.data)
            dispatch({
                type: FETCH_PHOTO_SUCCESS,
                payload: res.data
            })
        })
        .catch( ({error}) => {
            console.log(error);
            dispatch({
                type: FETCH_PHOTO_FAILURE,
                payload: error
            })
        })

}