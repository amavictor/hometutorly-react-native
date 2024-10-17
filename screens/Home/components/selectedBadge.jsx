import { View } from 'react-native';
import React, { memo } from 'react';
import { Typography } from '../../../components';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../../utils';
import { checkStarAndVerified } from '../../../utils/functions';


/**
 * Small badge component to display selected tags
 * @param {string} item - text to render
 * @returns {React.ReactElement} - rendered component
 */
const Badge = ({
    item,
}) => {
    const icon = checkStarAndVerified(item);
    return (
        <View style={styles.container}>
            <Typography size="xxs" weight="medium">{item}</Typography>
            <View>
                {icon}
            </View>
        </View>
    );
};


export const SelectedBadge = memo(Badge);

const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: '12@ms',
        paddingVertical: '6@ms',
        borderRadius: '17@ms',
        gap: '3@ms',
    },
});

