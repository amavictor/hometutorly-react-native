import Boy from '../assets/images/black_boy.png';
import Girl from '../assets/images/girl.png';
import Man from '../assets/images/young_man.png';

/**
 * Array of options for the filter component. Each item in the array have
 * the following structure:
 * {
 *   name: string,
 *   description: string,
 *   tags: string[],
 *   image: Image,
 * }
 */
export const FILTER_OPTIONS = [
    'Verified',
    'Male',
    'Female',
    'Kids expert',
    'Science',
    'Art',
    'Math',
    'English',
    'Physics',
    '3 Years of Experience',
    '5',
    '4.5',
    '7',
];

export const DELAY_CONSTANTS = {
    SEARCH: 500,
    API: 1500,
    SPLASH_SCREEN_TIME_OUT: 3500,
    SESSION_TIMEOUT: 5 * 60 * 1000
};


/**
 * Array of objects representing the search data. Each item in the array
 * have the following structure:
 * {
 *   name: string,
 *   description: string,
 *   tags: string[],
 *   image: Image,
 * }
 */
export const SEARCH_DATA = [
    {
        name: 'John Doe',
        description: 'A kind, friendly teacher who is passionate about helping students learn and grow.',
        tags: ['Verified', 'Male'],
        image: Boy,
    },
    {
        name: 'Jane Doe',
        description: 'A patient, insightful teacher who makes learning engaging and empowering.',
        tags: ['Female', 'Kids expert', 'Art'],
        image: Girl,
    },
    {
        name: 'Julian Smith',
        description: 'A highly effective teacher with a proven track record of results.',
        tags: ['Verified', 'Male', 'Math'],
        image: Man,
    },
    {
        name: 'Emily Chen',
        description: 'An experienced teacher with a passion for helping students learn and grow.',
        tags: ['Female', 'Kids expert', 'English'],
        image: Girl,
    },
    {
        name: 'Michael Brown',
        description: 'A skilled teacher with a strong background in science and math.',
        tags: ['Verified', 'Male', 'Physics'],
        image: Man,
    },
    {
        name: 'Sarah Lee',
        description: 'A dedicated teacher with a love for helping students learn and grow.',
        tags: ['Female', 'Kids expert', '3 Years of Experience'],
        image: Girl,
    },
    {
        name: 'Kevin White',
        description: 'A patient, insightful teacher who makes learning engaging and empowering.',
        tags: ['Verified', 'Male', 'Science'],
        image: Boy,
    },
    {
        name: 'Linda Davis',
        description: 'A highly effective teacher with a proven track record of results.',
        tags: ['Female', 'Kids expert', 'Art'],
        image: Girl,
    },
    {
        name: 'David Miller',
        description: 'A skilled teacher with a strong background in science and math.',
        tags: ['Verified', 'Male', 'Math'],
        image: Man,
    },
    {
        name: 'Laura Martin',
        description: 'An experienced teacher with a passion for helping students learn and grow.',
        tags: ['Female', 'Kids expert', 'English'],
        image: Girl,
    },
    {
        name: 'Christopher Hall',
        description: 'A patient, insightful teacher who makes learning engaging and empowering.',
        tags: ['Verified', 'Male', 'Physics', '4.5'],
        image: Boy,
    },
    {
        name: 'Heather Brooks',
        description: 'A dedicated teacher with a love for helping students learn and grow.',
        tags: ['Female', 'Kids expert', '3 Years of Experience'],
        image: Girl,
    },
    {
        name: 'Brian Thompson',
        description: 'A skilled teacher with a strong background in science and math.',
        tags: ['Verified', 'Male', 'Science', '5'],
        image: Boy,
    },
    {
        name: 'Lisa Umar',
        description: 'A patient, insightful teacher who makes learning engaging and empowering.',
        tags: ['Female', 'Kids expert', 'Art'],
        image: Girl,
    },
    {
        name: 'Paul Phillips',
        description: 'A dedicated teacher with a love for helping students learn and grow.',
        tags: ['Verified', 'Male', 'Math', '7'],
        image: Man,
    },
    {
        name: 'Lisa Jackson',
        description: 'A patient, insightful teacher who makes learning engaging and empowering.',
        tags: ['Female', 'Kids expert', 'Art'],
        image: Girl,
    },
];

