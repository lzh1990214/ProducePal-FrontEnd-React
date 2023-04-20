import React, { useState } from 'react';
import './consumerInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faMedal, faCamera } from '@fortawesome/free-solid-svg-icons';
// import ConsumerEditModal from './ConsumerEditModal';

function ConsumerInfo(props) {

    const [showCamera, setShowCamera] = useState(false);

    const handleProfileImageMouseEnter = () => {
        setShowCamera(true);
    };

    const handleProfileImageMouseLeave = () => {
        setShowCamera(false);
    };

    return (
        <div className="container-fluid">
            <div className="toggle-container text-end">
                {props.userType ?
                    <button className="btn btn-primary visually-hidden">
                        Hidden
                    </button> : <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                    </button>}
            </div>
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1>{props.fullName}</h1>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6 profile-image"
                    onMouseEnter={handleProfileImageMouseEnter}
                    onMouseLeave={handleProfileImageMouseLeave}
                >
                    <img
                        src="https://placehold.co/600x600"
                        alt=""
                        className="img-fluid "
                    />
                    {!props.userType && showCamera && (
                        <div className="camera-overlay">
                            <FontAwesomeIcon icon={faCamera} />
                        </div>
                    )}

                </div>
                <div className="col-md-6">
                    <div className="">
                        <div className="">
                            <h3>About</h3>
                        </div>
                        <div className="">
                            <p>{props.description}</p>
                        </div>

                        <div className="mt-5">
                            <div className="row">
                                <div className="col-lg-2 col-md-2"><FontAwesomeIcon icon={faUser} size="3x" /></div>
                                <div className="col-lg-10 col-md-10">
                                    <h5>Address</h5>
                                    <p>{props.address}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-2"><FontAwesomeIcon icon={faPhone} size="3x" /></div>
                                <div className="col-lg-10 col-md-10">
                                    <h5> Contact</h5>
                                    <p>{props.contact}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-2"><FontAwesomeIcon icon={faMedal} size="3x" /></div>
                                <div className="col-lg-10 col-md-10">
                                    <h5>Memberships</h5>
                                    <p>{props.memberships}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control text-muted" id="full-name-input" value={props.fullName} />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control text-muted" id="full-name-input" value={props.address} />
                            </div>
                            <div className="form-group">
                                <label>Contact</label>
                                <input type="text" className="form-control text-muted" id="full-name-input" value={props.contact} />
                            </div>
                            <div className="form-group">
                                <label>Memberships</label>
                                <input type="text" className="form-control text-muted" id="full-name-input" value={props.memberships} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control text-muted" id="description-input" rows="5" value={props.description}></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ConsumerInfo;
