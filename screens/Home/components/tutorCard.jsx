import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../../utils';
import FastImage from 'react-native-fast-image';
import { Typography } from '../../../components';
import { checkStarAndVerified } from '../../../utils/functions';

/**
 * Card component for displaying tutor information
 * @param {object} item - Tutor data to display
 * @returns {React.ReactElement} - Rendered component
 */
const Card = ({ item }) => {

    /**
     * Renders an individual tag
     * @param {object} tag - Tag data
     */
    const renderTag = ({ item: tag }) => (
        <View style={styles.tag}>
            <Typography size="xxs" weight="regular">{tag}</Typography>
            <View>{checkStarAndVerified(tag)}</View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View>
                <FastImage
                    style={styles.image}
                    source={item?.image}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <FlatList
                data={item?.tags}
                renderItem={renderTag}
                keyExtractor={(tag, index) => `${tag}-${index}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tagList}
                style={styles.listContainer}
            />
            <View style={styles.details}>
                <Typography size="sm" weight="black">{item?.name}</Typography>
                <Typography size="xs" weight="light">
                    {item?.description}
                </Typography>
            </View>
        </View>
    );
};

export const TutorCard = memo(Card);

const styles = ScaledSheet.create({
    container: {
        width: '100%',
        padding: '20@ms',
        borderRadius: '12@ms',
        marginBottom: '10@ms',
    },
    details: {
        marginTop: '10@ms',
        gap: '5@ms',
    },
    tag: {
        paddingVertical: '6@ms',
        paddingHorizontal: '10@ms',
        backgroundColor: COLORS.gray,
        borderRadius: '24@ms',
        flexDirection: 'row',
        alignItems: 'center',
        gap:'2@ms',
    },
    tagList: {
        flexDirection: 'row',
        gap: '6@ms',
    },
    listContainer: {
        marginTop: '10@ms',
    },
    image: {
        width: 'auto',
        height: '170@ms',
        backgroundColor: COLORS.gray,
        borderRadius: '12@ms',
    },
    imageContainer: {
        paddingHorizontal: '10@ms',
        borderRadius: '12@ms',
    },
});

