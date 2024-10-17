import React, { memo } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../utils';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * ScreenComponent
 * @description A component that provides a layout with a customizable header and child content,
 * taking into account safe area insets for top margin.
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - The main content to render
 * @param {React.ReactNode} props.header - The header content to render
 * @returns {React.ReactElement} - Rendered component
 */
const ScreenComponent = ({ children, header }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <View style={{ marginTop: insets.top }}>
                {header}
            </View>
            <View style={styles.child}>
                {children}
            </View>
        </View>
    );
};

export const Screen = memo(ScreenComponent);

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: '20@ms',
    },
    child: {
        marginTop: '10@ms',
    },
});
