import React, { useContext, useState, useCallback } from 'react';
import { SearchContext } from '../../../context';
import { TextField } from '../../../components';
import { SearchIcon } from '../../../assets';


/**
 * Search component for home screen
 * @description renders a search bar with a button to execute the search
 * @returns {React.ReactElement} - rendered component
 */
const SearchComponent = () => {
    const { searchFilter, setSearchFilter } = useContext(SearchContext);
    const [searchTerm, setSearchTerm] = useState(searchFilter.name || '');

    /**
     * Handle search input change
     * @param {string} text - new search term
     */
    const handleInputChange = useCallback((text) => {
        setSearchTerm(text);
    }, []);

    /**
     * Handle search submission
     * @param {Event} event - submit event
     */
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setSearchFilter((prevFilter) => ({
            ...prevFilter,
            name: searchTerm,
        }));
    }, [setSearchFilter, searchTerm]);

    return (
        <TextField
            value={searchTerm}
            onChangeText={handleInputChange}
            onSubmit={handleSubmit}
            iconAction={handleSubmit}
            placeholder="Search Tutors"
            icon={<SearchIcon />}
        />
    );
};

export default SearchComponent;
