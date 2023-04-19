import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { TitleContainer } from './WeekCalendar.styles';
import { addEvent, getKey } from './EventManager';

function formatDate(date) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    };
    return date.toLocaleDateString('sv-SE', options).replace(',', '');
}

const Title = ({ setSelectedEventId }) => {
    const [showAddEventPopup, setShowAddEventPopup] = useState(false);

    const handleAddEventClick = () => {
        let date = new Date();
        const now = formatDate(date);
        const input = prompt('Enter event date and time (YYYY-MM-DD HH:mm:ss):', now);
        const regex = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/;
        date = new Date(input);
        if (!input) {
            return;
        }
        if (regex.test(input) && !isNaN(date.getTime())) {
            const event = prompt(`Enter the event description`);
            if (event) {
                const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}`
                addEvent(key, event);
                setSelectedEventId(key)
            }
            ;
        } else {
            alert('Invalid date and time format. Please enter date and time in YYYY-MM-DD HH:mm:ss format.');
        }
    };

    return (
        <TitleContainer>
            <span>Interviewer Calendar</span>
            <FaPlus onClick={() => handleAddEventClick()} />
        </TitleContainer>
    );
};

export default Title;