import React, { useState } from 'react';
import UserToggle from '../components/UserToggle';
import ConsumerInfo from '../components/consumerInfo/ConsumerInfo';
import NavBar from '../components/NavBar';
{/*  toggle button needs to be removed when implementing */ }


function App() {

    const [userType, setUserType] = useState(false);

    const user = {
        fullName: 'John Doe',
        farmName: 'CSA Providence Farm',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit sapien eu neque blandit, vel finibus urna tincidunt. Vivamus vel magna vestibulum, feugiat quam sed, molestie quam.',
        address: '123 Main St, Providence RI, USA',
        farmAddress: '456 Water St, Providence RI, USA',
        contact: 'johndoe@example.com',
        memberships: 'Silver Tier',
        userType
    };

    const handleSave = (data) => {
        // setFullName(data.fullName);
        // setDescription(data.description);
        // setAddress(data.address);
        // setContact(data.contact);
        // setMemberships(data.memberships);
        console.log('need data');
    };

    const toggleUserType = () => {
        setUserType(!userType);
    };

    return (
        <div>
            <NavBar />
            {/* this toggle button needs to be removed when implementing */}
            <UserToggle userType={userType} onToggle={toggleUserType} />
            <div className="container mt-5">
                <ConsumerInfo {...user} onSave={handleSave} />
            </div>
        </div>
    );
}

export default App;
