import React, { memo, useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../../../utils';
import { Typography } from '../../../components';
import { SearchContext } from '../../../context';
import { checkStarAndVerified } from '../../../utils/functions';

/**
 * Badge component for filter
 * @param {string} children - text to render
 * @returns {React.ReactElement} - rendered component
 */
export const Badge = ({ children }) => {
    const { searchFilter, setSearchFilter } = useContext(SearchContext);
    const isSelected = searchFilter.tag.includes(children);
    const icon = checkStarAndVerified(children);
    /**
     * Toggle tag in search filter context
     */
    const handleToggleTag = () => {
        setSearchFilter(prevFilter => {
            const updatedTags = isSelected
                ? prevFilter.tag.filter(tag => tag !== children)
                : [...prevFilter.tag, children];
            return { ...prevFilter, tag: updatedTags };
        });
    };

    return (
        <TouchableOpacity
            style={[styles.container,
            {
                backgroundColor: isSelected ? COLORS.black : COLORS.gray,
            },
            ]}
            activeOpacity={0.8}
            onPress={handleToggleTag}
        >
            <Typography
                size="xxs"
                weight="medium"
                style={{
                    color: isSelected ? COLORS.white : COLORS.black,
                }}
            >
                {children}
            </Typography>
            <View>{icon}</View>
        </TouchableOpacity>
    );
};

/**
 * Filter badge wrapper component
 * @returns {React.ReactElement} - rendered component
 */
export const FilterBadge = memo(Badge);

/**
 * Styles for badge component
 */
const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.gray,
        paddingHorizontal: '12@ms',
        paddingVertical: '6@ms',
        borderRadius: '17@ms',
        flexDirection: 'row',
        gap:'3@ms',
    },
});

