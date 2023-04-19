// import React, { useState } from 'react';
// import FarmCard from './FarmCard';
// import { createPopper } from "@popperjs/core";


// const farms = [
//     {
//         name: 'Farm A',
//         location: 'Washington DC',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
//     },
//     {
//         name: 'Farm B',
//         location: 'Arlington VA',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
//     },
//     {
//         name: 'Farm C',
//         location: 'College Park Maryland',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
//     },
// ];

// const FarmList = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [searchError, setSearchError] = useState('');
//     const [showResults, setShowResults] = useState(false);

//     const handleSearchChange = (event) => {
//         const value = event.target.value;
//         setSearchTerm(value);
//         setSearchError('');

//         const locations = [...new Set(farms.map((farm) => farm.location))];
//         // filter locations based on search term
//         const results = locations.filter((location) =>
//             location.toLowerCase().includes(value.toLowerCase())
//         );

//         setSearchResults(results.slice(0, 6)); // only show top 6 results
//         setShowResults(true);

//     };

//     const handleSelectResult = (result) => {
//         setSearchTerm(result);
//         setShowResults(false);
//     };


//     const handleSearchSubmit = () => {
//         if (searchTerm.trim() === '') {
//             setSearchError('Please enter a valid city.');
//             setSearchResults([]);
//         } else {
//             const filteredFarms = farms.filter((farm) =>
//                 farm.location.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             setSearchResults(filteredFarms);
//             setSearchError(filteredFarms.length === 0 ? 'No results found, please try again.' : '');
//         }
//     };


//     return (
//         <div >

//             <ul class="dropdown-menu">
//                 <li><a class="dropdown-item" href="#">Regular link</a></li>
//                 <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
//                 <li><a class="dropdown-item" href="#">Another link</a></li>
//             </ul>

//             <div className="d-flex justify-content-center mt-5 mb-5">
//                 <div className="input-group mb-3 w-50">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter location..."
//                         value={searchTerm}
//                         onChange={handleSearchChange}
//                     />
//                     <button
//                         className="btn btn-outline-secondary"
//                         type="button"
//                         onClick={handleSearchSubmit}
//                     >
//                         Search
//                     </button>
//                 </div>
//             </div>



//             {showResults && (
//                 <div className="search-results">
//                     {searchResults.map((result, index) => (
//                         <div clasName='' key={index} onClick={() => handleSelectResult(result)}>
//                             {result}
//                         </div>
//                     ))}
//                 </div>
//             )}

//             <div>
//                 {searchResults.length > 0
//                     ? (
//                         // searchResults.map((farm) => <FarmCard key={farm.id} farm={farm} />)
//                         searchResults.map((farm) => <FarmCard key={farm.id} farm={farm} />)
//                         // console.log('inside ?')
//                     )
//                     : (
//                         // Wrap the error message and the farm cards together in one parent element 'React.Fragment'. Conditionally display the search error message with the farm cards. //
//                         <>
//                             {searchError && (
//                                 <p className="text-danger">{searchError}</p>
//                             )}
//                             {farms.map((farm) => (
//                                 <FarmCard key={farm.id} farm={farm} />
//                             ))}
//                         </>
//                     )}
//             </div>

//         </div>
//     );
// };

// export default FarmList;

// import React, { useState } from 'react';
// import FarmCard from './FarmCard';

// const farms = [
//     {
//         name: 'Farm A',
//         city: 'New York',
//         description: 'This is a farm with cows and chickens.',
//     },
//     {
//         name: 'Farm B',
//         city: 'Los Angeles',
//         description: 'This is a farm with goats and sheep.',
//     },
//     {
//         name: 'Farm C',
//         city: 'San Francisco',
//         description: 'This is a farm with pigs and horses.',
//     },
//     {
//         name: 'Farm D',
//         city: 'Chicago',
//         description: 'This is a farm with sheep and ducks.',
//     },
// ];

// const cities = [...new Set(farms.map((farm) => farm.city))];

// const FarmList = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [searchError, setSearchError] = useState('');
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [dropdownItems, setDropdownItems] = useState([]);

//     const handleSearchChange = (event) => {
//         const value = event.target.value;
//         setSearchTerm(value);
//         setShowDropdown(value !== '');
//         setDropdownItems(
//             cities
//                 .filter((city) => city.toLowerCase().includes(value.toLowerCase()))
//                 .slice(0, 3)
//         );
//         setSearchError('');
//     };

//     const handleSearchSubmit = () => {
//         if (searchTerm.trim() === '') {
//             setSearchError('Please enter a search term');
//             setSearchResults([]);
//         } else {
//             const filteredFarms = farms.filter((farm) =>
//                 farm.city.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             setSearchResults(filteredFarms);
//             setSearchError(filteredFarms.length === 0 ? 'No results found' : '');
//         }
//     };

//     return (
//         <div>
//             <div className="d-flex justify-content-center">
//                 <div className="input-group mb-3 w-50 dropdown">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search by city..."
//                         value={searchTerm}
//                         onChange={handleSearchChange}
//                         data-bs-toggle="dropdown"
//                     />
//                     <button
//                         className="btn btn-outline-secondary"
//                         type="button"
//                         onClick={handleSearchSubmit}
//                     >
//                         Search
//                     </button>
//                     {showDropdown && dropdownItems.length > 0 && (
//                         <div className="dropdown-menu w-100">
//                             {dropdownItems.map((city) => (
//                                 <button
//                                     className="dropdown-item"
//                                     type="button"
//                                     key={city}
//                                     onClick={() => {
//                                         setSearchTerm(city);
//                                         setShowDropdown(false);
//                                     }}
//                                 >
//                                     {city}
//                                 </button>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div>
//                 {searchResults.length > 0 ? (
//                     searchResults.map((farm) => <FarmCard key={farm.name} farm={farm} />)
//                 ) : (
//                     <>
//                         {searchError && (
//                             <p className="text-danger">{searchError}</p>
//                         )}
//                         {farms.map((farm) => (
//                             <FarmCard key={farm.name} farm={farm} />
//                         ))}
//                     </>
//                 )}
//             </div>
//         </div>)
// };

// export default FarmList;
