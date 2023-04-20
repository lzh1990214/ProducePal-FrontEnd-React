import React from 'react';

function UserToggle({ userType, onToggle }) {
    return (
        <div className="container mt-5">
            <div className="toggle-container text-end">
                <button className="btn btn-primary toggle-btn" onClick={onToggle}>
                    {userType ? 'Consumer mode' : 'Vendor mode'}
                </button>
            </div>
        </div>
    );
}

export default UserToggle;
