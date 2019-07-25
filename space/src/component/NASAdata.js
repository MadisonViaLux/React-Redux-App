import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getPhoto } from '../store/actions/index'


const NASAdata = props => {


    const grabbingPhoto = e => {
        e.preventDefault();
        props.getPhoto();
    };




    return(
        <div>

            <h2>click to render data</h2>

            <h1>{props.title}</h1>

            <img src={props.photoOfTheDay} alt={null} />

            {props.error && <p> {props.error} </p>}

            {props.isLoading && (
                <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
            )}

            <button onClick={grabbingPhoto}>Click Me!</button>



        </div>
    );

};


const mapStateToProps = state => {
    return{
        error: state.error,
        isLoading: state.isLoading,
        photoOfTheDay: state.photoOfTheDay,
        title: state.title
    }
}


export default connect(
    mapStateToProps,
    { getPhoto }
)(NASAdata)