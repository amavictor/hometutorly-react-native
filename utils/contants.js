import { Dimensions } from 'react-native';


export const COLORS = {
    primary: '#e900d2',
    gray: '#F9F9F9',
    background: '#F9F9F9',
    white: '#ffffff',
    black: '#000000',
};


export const DEVICE = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
};


export const APP_SESSION_KEY = 'app_session_id'
export const SESSION_TIMEOUT = 5 * 60 * 1000