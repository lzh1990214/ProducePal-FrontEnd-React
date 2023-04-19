import React, { useState } from 'react';
import FarmCard from './FarmCard';

const farms = [
    { name: 'Farm A', city: 'New York', description: 'Grass-fed beef in rural farm near New York.', }, { name: 'Farm B', city: 'Los Angeles', description: 'Organic produce in the hills of California near Los Angeles.', },
    { name: 'Farm C', city: 'San Francisco', description: 'Sustainable produce in farms near San Francisco', },
    { name: 'Farm D', city: 'Chicago', description: 'Organic crops in the farmland of corns near Chicago.', },];

const FarmList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [selectedResult, setSelectedResult] = useState([]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setShowResults(value !== '');
        setSearchError('');
        if (value === '') {
            setSearchResults([]);
        } else {
            const filteredResults = farms
                .filter((farm) =>
                    farm.city.toLowerCase().includes(value.toLowerCase())
                )
                .slice(0, 6)
                .map((farm) => farm.city);
            setSearchResults(filteredResults);
        }
    };

    const handleResultClick = (result) => {
        setSearchTerm(result);
        setShowResults(false);
    };

    const handleSearchSubmit = () => {
        if (searchTerm.trim() === '') {
            setSearchError('Please enter a search term');
            setSearchResults([]);
        } else {
            const filteredFarms = farms.filter((farm) =>
                farm.city.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSelectedResult(filteredFarms);
            setSearchError(filteredFarms.length === 0 ? 'No results found' : '');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center" >
                {/* search bar */}
                <div className="col-12 col-md-8 mb-5 mt-5" style={{ width: '50%' }}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by city name..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleSearchSubmit}
                        >
                            Search
                        </button>
                    </div>
                    {/* drop down list */}
                    {showResults && searchResults.length > 0 && (
                        <div className="bg-light p-2 rounded w-100">
                            {searchResults.map((result) => (
                                <div
                                    className="cursor-pointer"
                                    key={result}
                                    onClick={() => handleResultClick(result)}
                                >
                                    {result}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/* farm information cards */}
            <div className="row justify-content-center">
                <div className="col-12 col-md-8" style={{ width: '75%' }}>
                    {searchError && (
                        <p className="text-danger">{searchError}</p>
                    )}
                    {/* if the user selected a result from the dropdown list, it will show the farm location that matches the selected Result */}
                    {selectedResult.length > 0 ? (
                        selectedResult.map((farm) => (
                            <FarmCard key={farm.name} farm={farm} />
                        ))
                    ) :
                        (farms.map((farm) => (
                            <FarmCard key={farm.name} farm={farm} />
                        )))}
                </div>
            </div>

        </div>
    )
};


export default FarmList;
