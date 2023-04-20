import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faMedal } from '@fortawesome/free-solid-svg-icons';

function VendorProfile(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1>CSA Farm A</h1>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        src="https://placehold.co/600x600"
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <div className="">
                        <div className="">
                            <h3>About</h3>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit sapien eu neque blandit, vel finibus urna tincidunt. Vivamus vel magna vestibulum, feugiat quam sed, molestie quam.</p>
                        </div>

                        <div className="mt-5">
                            <div className="">
                                <div>
                                    <h5><FontAwesomeIcon icon={faUser} /> Address</h5>
                                    <p>{props.address}</p>
                                </div>
                            </div>
                            <div className="">
                                <h5><FontAwesomeIcon icon={faPhone} /> Contact</h5>
                                <p>{props.contact}</p>
                            </div>
                            <div className="">
                                <h5><FontAwesomeIcon icon={faMedal} /> Memberships</h5>
                                <p>{props.memberships}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorProfile;
