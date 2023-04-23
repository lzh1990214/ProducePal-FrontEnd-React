import React, { useState } from 'react';
import UserToggle from '../components/UserToggle';
import ConsumerInfo from '../components/userInfo/ConsumerInfo';
import VendorInfo from '../components/userInfo/VendorInfo';
import NavBar from '../components/NavBar';


function Profile() {

    const [vendorStatus, setVendorStatus] = useState(false);


    const user = {
        firstName: 'John',
        lastName: 'Doe',
        biography: 'I am John Doe.',
        vendorName: 'CSA Providence Farm',
        vendorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit sapien eu neque blandit, vel finibus urna tincidunt. Vivamus vel magna vestibulum, feugiat quam sed, molestie quam.',
        address: '123 Main St, Providence RI, USA',
        vendorAddress: '456 Water St, Providence RI, USA',
        pickupLocation: '789 Farmers Market, Providence RI, USA',
        email: 'johndoe@gmail.com',
        memberships: 'Silver Tier',
        vendorStatus,
        // test if the profile page is mine or other user's page. True means the profile page is mine. Will be replaced by code comparing user id.
        currentUser: true
    };

    const handleSave = (data) => {
        // setDescription(data.description);
        console.log('need data from database');
    };

    const toggleVendorStatus = () => {
        setVendorStatus(!vendorStatus);
    };

    return (
        <div>
            <NavBar />
            {/* this toggle button needs to be removed when implementing */}
            <UserToggle vendorStatus={vendorStatus} onToggle={toggleVendorStatus} />
            {/* <div className="container mt-5">
                <ConsumerInfo {...user} onSave={handleSave} />
            </div> */}
            <div className="container mt-5">
                {vendorStatus ? <VendorInfo {...user} /> : <ConsumerInfo {...user} />}
            </div>
        </div >
    );
}

export default Profile;
