import React from 'react';
import AddEvent from '../../Components/Admin.AddEvent/AddEvent';
import "./Admin.Volunteer.css"

const AdminVolunteer = () => {
    return (
        <>
              <main>
        <div className="container">
            <h1>Add event</h1>
            <div className="row">
                <div className="col-md-3 bg-white">
                    <div className="admin-menu rounded p-4">
                        <a href="registerlist">
                            <img src="src/img/logos/users.png" alt="" />
                            Volunteer Register list
                        </a>
                        <a href="addevent">
                            <img src="src/img/logos/plus.png" alt="" />
                            Add event
                        </a>
                    </div>
                </div>
                <div className="col-md-9 theme-bg p-5">
                    <AddEvent></AddEvent>
                </div>
            </div>
        </div>
    </main>  
        </>
    );
};

export default AdminVolunteer;