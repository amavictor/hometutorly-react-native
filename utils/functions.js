import React from 'react';
import { StarIcon, TickIcon } from '../assets';


export const checkStarAndVerified = (text) => {
    const parsedNumber = parseFloat(text);

    if (!isNaN(parsedNumber)) {
        return <StarIcon />;
    }

    if (text === 'Verified') {
        return <TickIcon />;
    }

    return null;
};

