import React, { useState, useMemo, createContext } from 'react';

export const SearchContext = createContext();

/**
 * Provides the search context to the app.
 *
 * @param {object} props - the props object
 * @param {React.ReactNode} props.children - the children of the component
 *
 * @returns {React.ReactElement} - the search context provider
 */
export const SearchContextProvider = ({ children }) => {
    /**
     * The state of the filter.
     * @type {boolean}
     */
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    /**
     * The state of the search filter.
     * @type {object}
     * @property {string} name - the name filter
     * @property {string[]} tag - the tag filters
     */
    const [searchFilter, setSearchFilter] = useState({
        name: '',
        tag: [],
    });

    /**
     * The value of the search context.
     * @type {object}
     * @property {object} searchFilter - the search filter state
     * @property {boolean} isFilterOpen - the filter open state
     * @property {function} setIsFilterOpen - the function to set the filter open state
     * @property {function} setSearchFilter - the function to set the search filter state
     */
    const contextValue = useMemo(() => ({
        searchFilter,
        isFilterOpen,
        setIsFilterOpen,
        setSearchFilter,
    }), [isFilterOpen, searchFilter]);

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};
