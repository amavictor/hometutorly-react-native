import {
    useEffect,
    useState,
    useCallback,
    useRef,
} from 'react';
import { DELAY_CONSTANTS, SEARCH_DATA } from '../utils';

/**
 * useApiGet
 * @description custom hook to fetch data from an API with filter and debouncing
 * @param {string} queryKey - the key to query the API
 * @param {object} filter - the filter object
 * @param {object} options - extra options
 * @param {boolean} [options.enabled=true] - whether to enable the hook
 * @returns {object} - the data and some flags to indicate the state of the data fetching process
 * @prop {array} data - the fetched data
 * @prop {boolean} isLoading - whether the data is being fetched
 * @prop {boolean} isFetching - whether the data is currently being fetched
 * @prop {boolean} isFetched - whether the data has been fetched at least once
 */
export const useApiGet = (queryKey, filter, options = {}) => {
    const { enabled = true } = options;
    const [data, setData] = useState([]);
    const [activityIndicator, setActivityIndicator] = useState({
        isLoading: true,
        isFetching: false,
        isFetched: false,
    });

    const cache = useRef(new Map());
    const isMounted = useRef(false);

    /**
     * Filter data based on the given filter object
     * @function
     * @param {array} rawData - the data to be filtered
     * @param {object} rawFilter - the filter object
     * @returns {array} - the filtered data
     */
    const filterData = useCallback((rawData, rawFilter) => {
        if (!rawFilter ||
            (rawFilter.name === '' && (!rawFilter.tag || rawFilter.tag.length === 0))) {
            return rawData;
        }

        const lowercaseName = rawFilter.name.toLowerCase();
        const tags = Array.isArray(rawFilter.tag) ? rawFilter.tag : [rawFilter.tag];

        return rawData.filter(item => {
            const nameMatch = rawFilter.name === '' ||
                item.name.toLowerCase().includes(lowercaseName);
            const tagMatch = tags.length === 0 ||
                tags.some(tag =>
                    item.tags.some(itemTag =>
                        itemTag.toLowerCase() === tag.toLowerCase()
                    )
                );
            return nameMatch && tagMatch;
        });
    }, []);

    const getCacheKey = useCallback((queryKeyCache) => {
        return JSON.stringify(queryKeyCache);
    }, []);

    const fetchData = useCallback(() => {
        if (!enabled) { return; }

        const cacheKey = getCacheKey(queryKey);
        if (cache.current.has(cacheKey)) {
            setData(cache.current.get(cacheKey));
            setActivityIndicator({
                isLoading: false,
                isFetching: false,
                isFetched: true,
            });
            return;
        }

        setActivityIndicator(prev => ({ ...prev, isFetching: true }));

        setTimeout(() => {
            const filteredData = filterData(SEARCH_DATA, filter);
            if (isMounted.current) {
                setData(filteredData);
                cache.current.set(cacheKey, filteredData);
                setActivityIndicator({
                    isLoading: false,
                    isFetching: false,
                    isFetched: true,
                });
            }
        }, DELAY_CONSTANTS.API);
    }, [enabled, queryKey, filter, filterData, getCacheKey]);

    useEffect(() => {
        isMounted.current = true;
        if (enabled) {
            fetchData();
        }
        return () => {
            isMounted.current = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enabled, filter]);

    const { isLoading, isFetching, isFetched } = activityIndicator;

    return { data, isLoading, isFetching, isFetched };
};

