import React, { memo, useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

/**
 * Input component with optional icon and submit functionality.
 *
 * @param {object} props
 * @param {function} props.onSubmit - Callback function to handle form submission.
 * @param {ReactNode} props.icon - Optional icon to display alongside the input.
 * @param {string} props.value - Initial value of the input field.
 * @param {function} props.onChangeText - Callback function to handle text changes.
 * @param {function} props.iconAction - Callback function to handle icon press.
 * @param {object} props.props - Additional props to pass to the TextInput component.
 */
const Input = ({
    onSubmit,
    icon,
    value,
    onChangeText,
    iconAction,
    ...props
}) => {
    /**
     * Handle form submission by calling the onSubmit callback and resetting the input field.
     */
    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(value);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={handleSubmit}
                placeholder="Search..."
                placeholderTextColor="#999"
                returnKeyType="search"
                {...props}
            />
            {icon && (
                <TouchableOpacity onPress={iconAction} style={styles.iconContainer}>
                    {icon}
                </TouchableOpacity>
            )}
        </View>
    );
};

/**
 * Memoized version of the Input component to prevent unnecessary re-renders.
 */
export const TextField = memo(Input);

/**
 * Styles for the Input component.
 */
const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '8@ms',
        paddingLeft: '20@ms',
        paddingRight: '6@ms',
        paddingVertical: '2@vs',
        flex: 1,
    },
    input: {
        flex: 1,
        fontSize: '12@ms',
    },
    iconContainer: {
        padding: 5,
    },
});
