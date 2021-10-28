import React from 'react';
import "./EventCard.css"

const EventCard = ({event}) => {
    const { title, img } = event;
    return (
        <>
            <div className="col-md-3 my-2">
                <div className="event-card rounded-bottom">
                    <div className="card-img">
                        <img className="rounded-top img-fluid" src={img} alt="" />
                    </div>
                    <div className="p-2 bg-danger card-text text-center">
                        <h4 className="text-white">{title}</h4>
                </div>
                </div>
            </div>
        </>
    );
};

export default EventCard;