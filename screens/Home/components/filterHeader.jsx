import { View, TouchableOpacity } from 'react-native';
import React, { memo, useContext, useEffect } from 'react';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { FilterIcon } from '../../../assets';
import { COLORS } from '../../../utils';
import { SelectedList } from './selectedList';
import { FilterList } from './filterList';
import SearchComponent from './searchComponent';
import { SearchContext } from '../../../context';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

/**
 * FilterHeader component
 * @description component that renders the filter header
 * @function
 * @param {object} props - component props
 * @returns {React.ReactElement} - rendered component
 */

const FILTER_REVEAL_HEIGHT = scale(160);
const FilterHeader = () => {
    const { isFilterOpen, setIsFilterOpen } = useContext(SearchContext);
    const handleFilter = () => setIsFilterOpen(prev => !prev);

    const animatedHeight = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            /**
             * height of the filter list container
             * @type {number}
             */
            height: animatedHeight.value,
            /**
             * opacity of the filter list container
             * @type {number}
             */
            opacity: animatedHeight.value > 0 ? 1 : 0,
            /**
             * overflow of the filter list container
             * @type {string}
             */
            overflow: 'hidden',
        };
    });

    useEffect(() => {
        animatedHeight.value = withTiming(
            isFilterOpen ? FILTER_REVEAL_HEIGHT : 0,
            {
                /**
                 * duration of the animation
                 * @type {number}
                 */
                duration: 300,
                /**
                 * easing of the animation
                 * @type {function}
                 */
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }
        );
    }, [animatedHeight, isFilterOpen]);

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[
                        styles.filterContainer,
                        { backgroundColor: isFilterOpen ? COLORS.black : COLORS.white },
                    ]}
                    onPress={handleFilter}
                >
                    <FilterIcon color={isFilterOpen ? COLORS.white : COLORS.black} />
                </TouchableOpacity>
                <SearchComponent />
            </View>
            <SelectedList />
            <Animated.View style={[styles.filterListContainer, animatedStyle]}>
                <FilterList />
            </Animated.View>
        </View>
    );
};

/**
 * memoized FilterHeader component
 * @description memoized version of the FilterHeader component
 * @function
 * @param {object} props - component props
 * @returns {React.ReactElement} - rendered component
 */
export const Filter = memo(FilterHeader);

/**
 * styles for the FilterHeader component
 * @description styles for the FilterHeader component
 * @function
 * @returns {object} - styles object
 */
const styles = ScaledSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: '10@ms',
        marginVertical: '14@s',
        alignItems: 'center',
    },
    filterContainer: {
        padding: '8@ms',
        borderRadius: '8@ms',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 1,
        height: '40@ms',
    },
    filterListContainer: {
        marginTop: '10@ms',
    },
});
