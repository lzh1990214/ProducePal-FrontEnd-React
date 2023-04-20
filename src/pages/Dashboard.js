import React, { useState } from 'react';
import VendorDashboard from '../components/VendorDashboard';
import ConsumerDashboard from '../components/ConsumerDashboard';
import NavBar from '../components/NavBar';
import UserToggle from '../components/UserToggle';

function App() {

    const [userType, setUserType] = useState(false);

    const user = {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Water St, Providence RI, USA',
        userType
    };

    const toggleUserType = () => {
        setUserType(!userType);
    };

    return (
        <div>
            <NavBar />
            <UserToggle userType={userType} onToggle={toggleUserType} />
            {userType ? <VendorDashboard {...user} /> : <ConsumerDashboard {...user} />}
        </div>
    );
}

export default App;
