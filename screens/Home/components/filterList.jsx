import React, { memo } from 'react';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { Typography } from '../../../components';
import { FilterBadge } from './filterBadge';
import { View, ScrollView } from 'react-native';
import { COLORS } from '../../../utils';
import { FILTER_OPTIONS } from '../../../utils';

const FILTER_CONTAINER_HEIGHT = scale(160);

/**
 * Filter list component
 * @description renders a list of filters
 * @returns {React.ReactElement} - rendered component
 */
const List = () => {
    return (
        <View style={styles.container}>
            <Typography size="md" weight="bold">Filter</Typography>
            <ScrollView
                style={styles.filterItems}
                contentContainerStyle={styles.filterItemsContent}
            >
                {FILTER_OPTIONS.map((item, index) => (
                    <FilterBadge key={item.toString()}>{item}</FilterBadge>
                ))}
            </ScrollView>
        </View>
    );
};

/**
 * memoized FilterList component
 * @description memoized version of the FilterList component
 * @function
 * @param {object} props - component props
 * @returns {React.ReactElement} - rendered component
 */


export const FilterList = memo(List);

/**
 * styles for the FilterList component
 * @description styles for the FilterList component
 * @function
 * @returns {object} - styles object
 */
const styles = ScaledSheet.create({
    /**
     * container style
     * @type {object}
     */
    container: {
        width: '100%',
        padding: '20@ms',
        backgroundColor: COLORS.white,
        borderRadius: '12@ms',
        height: FILTER_CONTAINER_HEIGHT,
    },
    /**
     * filter items style
     * @type {object}
     */
    filterItems: {
        marginTop: '10@ms',
    },
    /**
     * filter items content style
     * @type {object}
     */
    filterItemsContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '5@ms',
    },
});

