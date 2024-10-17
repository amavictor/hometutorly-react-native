import React from 'react';
import { TouchableOpacity } from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../utils';
import { Typography } from './typography';

const Menu = ({ focused, title, Icon, enabled }) => {
  const canDisplay = focused && enabled;
  return (
    <TouchableOpacity
      pointerEvents={enabled ? 'auto' : 'none'}
      style={[
        styles.container,
        !enabled && styles.disabledContainer, // apply disabled styling if not enabled
        focused && styles.focusedContainer // apply focused styling if focused
      ]}
    >
      <Icon
        width={moderateScale(24)}
        height={moderateScale(24)}
        fill={focused ? COLORS.black : COLORS.gray}
      />
      {
        canDisplay && <Typography size='xxs' weight="light">{title}</Typography>
      }
    </TouchableOpacity>
  );
};

export const MenuOption = React.memo(Menu);

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16@ms',
    paddingVertical: '10@ms',
    paddingHorizontal: '12@ms',
    gap: '5@ms',
    backgroundColor: COLORS.gray
  },
  disabledContainer: {
    opacity: 0.5,
  },
  focusedContainer: {
    backgroundColor: COLORS.lightGray,
    padding: '4@ms',
  },
  text: {
    color: COLORS.gray,
    marginLeft: '10@ms',
    fontWeight: 'bold',
  },
  focusedText: {
    color: COLORS.black,
  },
});