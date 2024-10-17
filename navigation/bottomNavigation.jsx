import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../utils';
import { HomeIcon, DonateIcon, StatsIcon, SettingsIcon } from '../assets';
import {
  HomeScreen,
  DonateScreen,
  StatsScreen,
  SettingsScreen,
} from '../screens';
import { moderateScale } from 'react-native-size-matters';
import { Typography } from '../components';

/**
 * This component renders the bottom navigation bar of the app
 * @returns {React.ReactElement} - rendered component
 */
const Tab = createBottomTabNavigator();

/**
 * Array of objects that describe the screens of the app
 * @description Each object has the following properties:
 * - name: string, name of the screen
 * - component: React.Component, component to render
 * - icon: React.Component, icon component to render
 * - enabled: boolean, whether the screen is enabled
 */
export const screens = [
  { name: 'Home', component: HomeScreen, icon: HomeIcon, enabled: true },
  { name: 'Donate', component: DonateScreen, icon: DonateIcon, enabled: false },
  { name: 'Statistics', component: StatsScreen, icon: StatsIcon, enabled: false },
  { name: 'Settings', component: SettingsScreen, icon: SettingsIcon, enabled: false },
];

/**
 * This component renders a single tab button
 * @param {object} props - component props
 * @param {string} name - name of the screen
 * @param {React.Component} component - component to render
 * @param {React.Component} icon - icon component to render
 * @returns {React.ReactElement} - rendered component
 */
const TabButton = ({
  name,
  component,
  icon,
  ...props
}) => {
  const IconComponent = icon;
  const { onPress, accessibilityState } = props;
  const isFocused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer]}
    >
      <View style={[styles.item,
      isFocused && {
        backgroundColor: COLORS.gray,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(9),
        borderRadius: moderateScale(9),
        gap: moderateScale(10),
      }]}
      >
        <IconComponent
          width={moderateScale(24)}
          height={moderateScale(24)}
        />
        {isFocused && <Typography size="xxs" weight="regular">{name}</Typography>}
      </View>

    </TouchableOpacity>

  );
};

/**
 * This component renders the bottom navigation bar
 * @returns {React.ReactElement} - rendered component
 */
export const BottomNavigation = () => {
  const insets = useSafeAreaInsets();

  /**
   * This function renders an icon
   * @param {string} color - color of the icon
   * @param {boolean} focused - whether the icon is focused
   * @param {React.Component} icon - icon component to render
   * @returns {React.ReactElement} - rendered component
   */
  const renderIcon = (color, focused, icon) => {
    const IconComponent = icon;
    return <IconComponent
      width={moderateScale(24)}
      height={moderateScale(24)}
    />;
  };

  /**
   * This function renders a tab button
   * @param {object} props - component props
   * @param {string} name - name of the screen
   * @param {React.Component} component - component to render
   * @param {React.Component} icon - icon component to render
   * @returns {React.ReactElement} - rendered component
   */
  const renderTabButton = (props, name, component, icon) => {
    return <TabButton
      {...props}
      name={name}
      component={component}
      icon={icon}
    />;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.background, { paddingBottom: insets.bottom }]} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            height:moderateScale(75),
            bottom: moderateScale(32),
            paddingTop: moderateScale(0),
            paddingHorizontal: moderateScale(28),
            paddingBottom: moderateScale(0),
            right: moderateScale(16),
            left: moderateScale(16),
            borderRadius: moderateScale(16),
            backgroundColor: COLORS.white,
            shadowColor: COLORS.black,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 2,
          },
        }}
      >
        {screens.map(({ name, component, icon }, index) => (
          <Tab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, focused }) => renderIcon(color, focused, icon),
              tabBarButton: (props) => renderTabButton(props, name, component, icon),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
