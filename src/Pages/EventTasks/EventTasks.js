import React from 'react';
import UserEventCard from '../../Components/UserEventCard/UserEventCard';
import "./EventTasks.css";

const EventTasks = () => {
    return (
        <>
            <main>
        <div className="container">
            <div className="row">
                <UserEventCard></UserEventCard>
                <UserEventCard></UserEventCard>
                <UserEventCard></UserEventCard>
                <UserEventCard></UserEventCard>
            </div>
        </div>
    </main>
        </>
    );
};

export default EventTasks;