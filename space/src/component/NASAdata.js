import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getPhoto, getRidPhoto } from '../store/actions/index'



const NASAdata = props => {


    const grabbingPhoto = e => {
        e.preventDefault();
        props.getPhoto();
    };




    return(
        <div>
            <div>
                <h2>Click to reveal data: {props.title}</h2>

                {/* <h1>{props.title}</h1> */}
            </div>

            <img src={props.photoOfTheDay} alt={null} />

            {props.error && <p> {props.error} </p>}

            {props.isLoading && (
                <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
            )}

            <button onClick={grabbingPhoto}>Render Me!</button>

            <button onClick={props.getRidPhoto}>Remove Me!</button>



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
    { getPhoto, getRidPhoto }
)(NASAdata)