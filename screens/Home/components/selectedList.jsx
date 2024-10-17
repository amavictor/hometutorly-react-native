import React, { memo, useContext } from 'react';
import { FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { SelectedBadge } from './selectedBadge';
import { SearchContext } from '../../../context';


/**
 * SelectedList component
 * @description displays a horizontal list of selected tags
 * @returns {React.ReactElement} - rendered component
 */
const List = () => {
    const { searchFilter } = useContext(SearchContext);

    return (
        <FlatList
            data={searchFilter?.tag}
            renderItem={({ item }) => <SelectedBadge item={item} />}
            keyExtractor={(item) => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
        />
    );
};

export const SelectedList = memo(List);


const styles = ScaledSheet.create({
    listContainer: {
        paddingHorizontal: 10,
    },
    badge: {
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
    },
    badgeText: {
        color: '#333',
        fontSize: 14,
    },
});
