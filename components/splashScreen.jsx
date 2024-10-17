import React, { useEffect, useRef } from 'react';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { COLORS, DEVICE } from '../utils';
import { Animated, Easing } from 'react-native';
import { SplashIcon } from '../assets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    BlueStarIcon,
    GreenStarIcon,
    MagicStarIcon,
    MedalStarIcon,
    YellowStarIcon,
} from '../assets';

/**
 * The Splash Screen component.
 *
 * @param {{ onAnimationComplete?: Function, visible?: boolean }} props - Props
 * @param {Function} [props.onAnimationComplete] - A callback that is called when the animation is complete.
 * @param {boolean} [props.visible] - Whether the splash screen should be visible.
 * @returns {React.ReactElement} - The rendered component
 */

export const SplashScreen = ({ onAnimationComplete, visible = true }) => {
    const insets = useSafeAreaInsets();
    const fadeAnim = useRef(new Animated.Value(1)).current;

    // Animations for each star
    const star1Animation = {
        scale: new Animated.Value(0),
        rotation: new Animated.Value(0),
        position: new Animated.ValueXY({ x: 0, y: 0 }),
    };

    const star2Animation = {
        scale: new Animated.Value(0),
        rotation: new Animated.Value(0),
        position: new Animated.ValueXY({ x: 0, y: 0 }),
    };

    const star3Animation = {
        scale: new Animated.Value(0),
        rotation: new Animated.Value(0),
        position: new Animated.ValueXY({ x: 0, y: 0 }),
    };

    const star4Animation = {
        scale: new Animated.Value(0),
        rotation: new Animated.Value(0),
        position: new Animated.ValueXY({ x: 0, y: 0 }),
    };

    const star5Animation = {
        scale: new Animated.Value(0),
        rotation: new Animated.Value(0),
        position: new Animated.ValueXY({ x: 0, y: 0 }),
    };

    const star6Animation = {
        scale: new Animated.Value(0),
        rotation: new Animated.Value(0),
        position: new Animated.ValueXY({ x: 0, y: 0 }),
    };

    const finalPositions = {
        star1: { x: moderateScale(-140), y: moderateScale(-150) },
        star2: { x: moderateScale(140), y: moderateScale(-150) },
        star3: { x: moderateScale(0), y: moderateScale(-200) },
        star4: { x: moderateScale(-140), y: moderateScale(150) },
        star5: { x: moderateScale(140), y: moderateScale(150) },
        star6: { x: moderateScale(0), y: moderateScale(200) },
    };

    useEffect(() => {
        if (visible) {
            // Start animations
            const animateElement = (animation, finalPos, delay) => {
                return Animated.sequence([
                    Animated.delay(delay),
                    Animated.spring(animation.scale, {
                        toValue: 1,
                        tension: 40,
                        friction: 5,
                        useNativeDriver: true,
                    }),
                    Animated.parallel([
                        Animated.timing(animation.rotation, {
                            toValue: 1,
                            duration: 800,
                            easing: Easing.bezier(0.175, 0.885, 0.32, 1.275),
                            useNativeDriver: true,
                        }),
                        Animated.spring(animation.position, {
                            toValue: finalPos,
                            tension: 50,
                            friction: 7,
                            useNativeDriver: true,
                        }),
                    ]),
                ]);
            };

            // Reset fade value when showing
            fadeAnim.setValue(1);

            // Start animations
            Animated.parallel([
                animateElement(star1Animation, finalPositions.star1, 0),
                animateElement(star2Animation, finalPositions.star2, 100),
                animateElement(star3Animation, finalPositions.star3, 200),
                animateElement(star4Animation, finalPositions.star4, 300),
                animateElement(star5Animation, finalPositions.star5, 400),
                animateElement(star6Animation, finalPositions.star6, 500),
            ]).start();
        } else {
            // Fade out animation when visible becomes false
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1500, // 1.5 seconds
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (finished && onAnimationComplete) {
                    onAnimationComplete();
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    const getRotation = (animation) => {
        return animation.rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
    };

    return (
        <Animated.View style={[
            styles.container,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingRight: insets.right,
                paddingLeft: insets.left,
                opacity: fadeAnim,
            },
        ]}>
            <SplashIcon />

            <Animated.View style={[styles.icon, {
                transform: [
                    { scale: star1Animation.scale },
                    { rotate: getRotation(star1Animation) },
                    { translateX: star1Animation.position.x },
                    { translateY: star1Animation.position.y },
                ],
            }]}>
                <MedalStarIcon />
            </Animated.View>

            <Animated.View style={[styles.icon, {
                transform: [
                    { scale: star2Animation.scale },
                    { rotate: getRotation(star2Animation) },
                    { translateX: star2Animation.position.x },
                    { translateY: star2Animation.position.y },
                ],
            }]}>
                <MagicStarIcon />
            </Animated.View>

            <Animated.View style={[styles.icon, {
                transform: [
                    { scale: star3Animation.scale },
                    { rotate: getRotation(star3Animation) },
                    { translateX: star3Animation.position.x },
                    { translateY: star3Animation.position.y },
                ],
            }]}>
                <GreenStarIcon />
            </Animated.View>

            <Animated.View style={[styles.icon, {
                transform: [
                    { scale: star4Animation.scale },
                    { rotate: getRotation(star4Animation) },
                    { translateX: star4Animation.position.x },
                    { translateY: star4Animation.position.y },
                ],
            }]}>
                <BlueStarIcon />
            </Animated.View>

            <Animated.View style={[styles.icon, {
                transform: [
                    { scale: star5Animation.scale },
                    { rotate: getRotation(star5Animation) },
                    { translateX: star5Animation.position.x },
                    { translateY: star5Animation.position.y },
                ],
            }]}>
                <YellowStarIcon />
            </Animated.View>

            <Animated.View style={[styles.icon, {
                transform: [
                    { scale: star6Animation.scale },
                    { rotate: getRotation(star6Animation) },
                    { translateX: star6Animation.position.x },
                    { translateY: star6Animation.position.y },
                ],
            }]}>
                <MedalStarIcon />
            </Animated.View>
        </Animated.View>
    );
};

const styles = ScaledSheet.create({
    container: {
        width: DEVICE.WIDTH,
        height: DEVICE.HEIGHT,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
    },
});
