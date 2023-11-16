import React, { useState } from 'react';
import facultyData from '../../Utils/facultyData.json';
import './FacultySearch.css'

const FacultySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [matchingFaculty, setMatchingFaculty] = useState([]);

    const handleSearch = () => {
        const searchTermLower = searchTerm.toLowerCase();
        const results = facultyData.filter((faculty) =>
            faculty.name.toLowerCase().includes(searchTermLower)
        );

        setMatchingFaculty(results);
    };

    return (
        <div className='facultySearchContainer'>
            <div className='inputDiv'>
                <input
                    type="text"
                    placeholder="Enter faculty name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {matchingFaculty.length > 0 && (
                    <div>
                        {matchingFaculty.map((faculty) => (
                            <div className='resultsDiv'
                                key={faculty.id}>
                                <p>Name: {faculty.name}</p>
                                <p>Email: {faculty.email}</p>
                                <p>Department: {faculty.department}</p>
                                <p>Position: {faculty.position}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FacultySearch;
