import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ConsumerDashboard({ firstName, lastName, address }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>{firstName} {lastName}</h2>
                    <p>{address}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faUser} size="3x" />
                            <h5 className="card-title">My profile</h5>
                            <p className="card-text">Profile description goes here.</p>
                            <button className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faUser} size="3x" />
                            <h5 className="card-title">Order history</h5>
                            <p className="card-text">Profile description goes here.</p>
                            <button className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faUser} size="3x" />
                            <h5 className="card-title">Search farm products</h5>
                            <p className="card-text">Profile description goes here.</p>
                            <button className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsumerDashboard;
