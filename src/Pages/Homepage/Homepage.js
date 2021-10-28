import React,{useState,useEffect} from 'react';
import EventCard from '../../Components/EventCard/EventCard';
import "./Homepage.css"
const Homepage = () => {

    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/events")
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])


    return (
        <>
        <main>
            <div className="container">
                <div className="row justify-content-center my-2 text-center">
                    <div className="search-container">
                        <h1 className="search-title">I grow by helping people in need</h1>
                        <form className="search-form" action="">
                            <input type="text" placeholder="Search" />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <div className="row py-5">
                   {/* <EventCard></EventCard> */}
                {
                    events.map(event=><EventCard key={event._id} event={event}></EventCard>)
                }
                </div>
            </div>
        </main>
        </>
    );
};

export default Homepage;