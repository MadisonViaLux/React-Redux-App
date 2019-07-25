import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getPhoto, getRidPhoto } from '../store/actions/index'



const NASAdata = props => {


    const grabbingPhoto = e => {
        e.preventDefault();
        props.getPhoto();
    };

    console.log(props.info)


    return(
        <div>
            <div>
                <h2>Click to reveal data: {props.title}</h2>

                {/* <h1>{props.title}</h1> */}
            </div>

            <div>
                <img className='dailyPhoto' src={props.photoOfTheDay} alt={''} />

                {props.error && <p> {props.error} </p>}

                <p>{props.info}</p>
            </div>

            {props.isLoading && (
                <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
            )}
            
            <div className='buttonBottom'>

                <button onClick={grabbingPhoto}>Render Me!</button>

                <button onClick={props.getRidPhoto}>Remove Me!</button>
            </div>    


        </div>
    );

};


const mapStateToProps = state => {
    return{
        error: state.error,
        isLoading: state.isLoading,
        photoOfTheDay: state.photoOfTheDay,
        title: state.title,
        info: state.info
    }
}


export default connect(
    mapStateToProps,
    { getPhoto, getRidPhoto }
)(NASAdata)