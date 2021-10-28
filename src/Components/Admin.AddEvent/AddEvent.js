import React, { useRef } from 'react';
import "./AddEvent.css"

const AddEvent = () => {
    
    const titleRef = useRef()
    const dateRef = useRef()
    const descRef = useRef()
    const imgRef = useRef()
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const title = titleRef.current.value;
        const date = dateRef.current.value;
        const desc = descRef.current.value;
        const img = imgRef.current.value;

       const event = {
            title,date,desc,img
        }

        fetch("http://localhost:5000/events",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(event)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                e.target.reset();
            }
        })
        console.log(event)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="event-form" action="#">
                        <div className="row bg-white rounded p-4">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="title">Event title</label>
                                <input ref={titleRef} type="text" id="title" placeholder="Enter title" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="date">Event date</label>
                                <input ref={dateRef} type="date" id="date" placeholder="Enter date" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="textarea">Event date</label>
                                <textarea ref={descRef} placeholder="Enter description" id="textarea"></textarea>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="upload">Banner</label>
                                <img src="src/img/logos/upload.png" alt="" />
                                <input ref={imgRef} type="text" id="upload" />
                                    
                            </div>
                        </div>
                        <input type="submit" value="Add" />
                    </form>
        </>
    );
};

export default AddEvent;