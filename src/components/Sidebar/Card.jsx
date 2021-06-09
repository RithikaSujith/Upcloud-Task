import React from "react";
import {FiBookmark} from "react-icons/fi";
import {TiMessages} from "react-icons/ti";
import {BsCameraVideoFill} from "react-icons/bs";
import {MdCall} from "react-icons/md";
import {AiFillLike} from "react-icons/ai";
import doctor_img from "../../assets/images/doctor.jpg";


function Card( props ) {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-image">
                        <img src={doctor_img} alt="" />
                    </div>
                    <div className="details">
                        <div className="options">
                            <p className="distance">~{props.distance}~</p>
                            <FiBookmark style={{ color: 'red', height: '18px', width: '18px' }}/>
                        </div>
                        <p className="name">{props.name}</p>
                        <div className="description">
                            <p>{props.specialization} | {props.rating} </p>
                            <AiFillLike style={{ color: 'blue', height: '14px', width: '14px' }}/>
                        </div>
                        
                        <p className="hospital-name">{props.hospital}</p>    
                    </div>
                    <div className="contact">
                        <div className="contact-options">
                            <TiMessages style={{ color: '#202020', height: '26px', width: '26px', margin: '0 30px 0 0' }}/>
                            <BsCameraVideoFill style={{ color: '#202020', height: '26px', width: '26px', margin: '0 30px 0 0'}}/>
                            <MdCall style={{ color: '#202020' , height: '26px', width: '26px', margin: '0 30px 0 0' }}/>
                            <div className="rate">
                                <p className="rate-text" style={{color:'green'}}>{props.rate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;