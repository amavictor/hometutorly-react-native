import React, { memo } from 'react';
import { Text, TextStyle } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';

/**
 * Font size presets
 * @property {number} xs - Extra small font size
 * @property {number} sm - Small font size
 * @property {number} md - Medium font size
 * @property {number} lg - Large font size
 * @property {number} xl - Extra large font size
 */
const FONT_SIZES = {
    xxs: scale(10),
    xs: scale(12),
    sm: scale(14),
    md: scale(16),
    lg: scale(18),
    xl: scale(20),
};

/**
 * Font weight presets
 * @property {string} light - Light font weight
 * @property {string} regular - Regular font weight
 * @property {string} medium - Medium font weight
 * @property {string} semibold - Semibold font weight
 * @property {string} bold - Bold font weight
 * @property {string} black - Black font weight

 */
const FONT_WEIGHTS = {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '800',
};

/**
 * Typography component props
 * @typedef {Object} TypographyProps
 * @property {string} [size='md'] - Font size preset (xs, sm, md, lg, xl)
 * @property {string} [weight='regular'] - Font weight preset (light, regular, medium, semibold, bold)
 * @property {string} [color='#000000'] - Text color
 * @property {number} [lineHeight] - Line height
 * @property {string} [align='left'] - Text alignment
 * @property {boolean} [uppercase=false] - Convert text to uppercase
 * @property {TextStyle} [style] - Additional custom styles
 * @property {React.ReactNode} children - Child components (text content)
 */


/**
 * Typography component for consistent text styling
 * @param {TypographyProps} props - Component props
 * @returns {React.ReactElement} Rendered Typography component
 */
const TypoText = ({
    size = 'md',
    weight = 'regular',
    color = '#000000',
    lineHeight,
    align = 'left',
    uppercase = false,
    style,
    children,
}) => {
    const fontSize = FONT_SIZES[size];
    const fontWeight = FONT_WEIGHTS[weight];

    const textStyles = {
        fontSize,
        fontWeight,
        color,
        textAlign: align,
        ...(lineHeight && { lineHeight: moderateScale(lineHeight) }),
        ...(uppercase && { textTransform: 'uppercase' }),
        ...style,
    };

    return <Text style={textStyles}>{children}</Text>;
};

export const Typography = memo(TypoText)