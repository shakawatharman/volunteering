import React from 'react';
import img from "../../img/events/extraVolunteer.png";
import "./UserEventCard.css"

const UserEventCard = () => {
    return (
        <>
        <div className="col-md-6 mb-3">
                <div className="user-event-card bg-white p-3">
                    <div className="user-event-img">
                        <img className="img-fluid" src={img} alt=""/>
                    </div>
                    <div className="user-event-info">
                        <p className="h5">Event name</p>
                        <h6>01. jan 2021</h6>
                        <button className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserEventCard;