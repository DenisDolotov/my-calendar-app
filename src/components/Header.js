import React from 'react';
import PropTypes from 'prop-types';
import ArrowButton from './ArrowButton';
import {
    HeaderContainerWrapper,
    HeaderContainer,
    WeekDays,
    WeekDay,
    Navigation,
    Days,
    Day,
    Month,
} from './WeekCalendar.styles';

const Header = ({ days, month, handlePrevWeek, handleNextWeek }) => {
    const today = new Date();
    const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return (
        <HeaderContainerWrapper>
            <HeaderContainer>
                <WeekDays>
                    {weekDays.map((day, index) => (
                        <WeekDay key={index}>{day}</WeekDay>
                    ))}
                </WeekDays>

                <Days>
                    {Array.from({ length: 7 }).map((_, index) => {
                        const day = days[index];
                        const isCurrentDay = day.getFullYear() === today.getFullYear() &&
                            day.getMonth() === today.getMonth() &&
                            day.getDate() === today.getDate();
                        return (
                            <Day key={day.getTime()} isCurrentDay={isCurrentDay}>
                                {day.getDate()}
                            </Day>
                        );
                    })}
                </Days>
                <Navigation>
                    <ArrowButton direction="left" onClick={handlePrevWeek} />
                    <Month>{month} {days[0].getFullYear()}</Month>
                    <ArrowButton direction="right" onClick={handleNextWeek} />
                </Navigation>
            </HeaderContainer>
        </HeaderContainerWrapper>
    );
};

Header.propTypes = {
    days: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
    month: PropTypes.string.isRequired,
    handlePrevWeek: PropTypes.func.isRequired,
    handleNextWeek: PropTypes.func.isRequired,
};

export default Header;
