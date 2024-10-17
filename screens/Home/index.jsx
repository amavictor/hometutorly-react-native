import React, { memo, useContext } from 'react';
import { Screen, Typography } from '../../components';
import { Filter, TutorCard } from './components';
import { SearchContext } from '../../context';
import { useApiGet } from '../../hooks';
import { View, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../utils';

/**
 * Home screen component
 * @description displays a list of tutors based on the user's search criteria
 * @returns {React.ReactElement} - rendered component
 */
const Home = () => {
    const { searchFilter } = useContext(SearchContext);

    /**
     * Fetches the list of tutors based on the user's search criteria
     * @type {{ data: any[], isLoading: boolean, isFetching: boolean }}
     */
    const { data, isLoading, isFetching } = useApiGet(
        ['search', { searchFilter }],
        searchFilter,
        {
            enabled: !!searchFilter,
        }
    );

    /**
     * Function to render each item in the list
     * @param {object} item - The item to be rendered
     * @returns {React.ReactElement} - The rendered item
     */
    const renderItem = ({ item }) => (
        <TutorCard item={item} />
    );

    /**
     * Function to render the empty state
     * @returns {React.ReactElement} - The rendered empty state
     */
    const renderEmptyState = () => (
        <View style={styles.emptyState}>
            <Typography weight="regular" size="xs">No tutors found. Try adjusting your search.</Typography>
        </View>
    );

    return (
        <Screen
            /**
             * The header component for the screen
             */
            header={<Filter />}
        >
            {isLoading ? (
                /**
                 * The loading state component
                 */
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={'small'} color={COLORS.primary} />
                </View>
            ) : (
                /**
                 * The list component
                 */
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item?.name}
                    ListEmptyComponent={renderEmptyState}
                    contentContainerStyle={styles.listContentContainer}
                    style={styles.list}
                    refreshing={isFetching}
                    showsVerticalScrollIndicator={false}
                    accessible={true}
                    accessibilityLabel="List of available tutors"
                    accessibilityHint="Displays a list of tutors based on your search criteria"
                />
            )}
        </Screen>
    );
};

export const HomeScreen = memo(Home);


const styles = ScaledSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: '10@ms',
        fontSize: '16@ms',
    },
    list: {
        backgroundColor: COLORS.white,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '20@ms',
    },
    emptyStateText: {
        fontSize: '16@ms',
        textAlign: 'center',
    },
    listHeader: {
        padding: '15@ms',
        backgroundColor: '#f0f0f0',
    },
    listHeaderText: {
        fontSize: '18@ms',
        fontWeight: 'bold',
    },
    listContentContainer: {
        flexGrow: 1,
        paddingBottom:Dimensions.get('window').height * 0.3,
    },
});
