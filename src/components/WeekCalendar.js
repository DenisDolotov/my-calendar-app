import React, { useState } from 'react';
import Header from './Header';
import {
  Container,
  DaysContainer,
  Hour,
  Footer,
  TodayButton,
  DeleteButton,
  TimeSlot,
} from './WeekCalendar.styles';
import Title from './Title';
import { addEvent ,deleteEvent, getKey } from './EventManager';



const WeekCalendar = ({ }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEventId, setSelectedEventId] = useState(null);

  const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
  const days = Array.from({ length: 7 }, (_, i) => new Date(firstDayOfWeek.getTime() + i * 24 * 60 * 60 * 1000));

  const handlePrevWeek = () => {
    const prevWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    setCurrentDate(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    setCurrentDate(nextWeek);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleDelete = () => {
    if(selectedEventId){
      deleteEvent(selectedEventId);
      setSelectedEventId(null);
    }
  };

  const getEvent = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const handleTimeSlotClick = (date, hour) => {
    const eventKey = getKey(date, hour);
    const event = getEvent(eventKey) ? getEvent(eventKey) : '';
    const eventValue = prompt('Enter event description:', event);
    if (eventValue !== null && eventValue !== '') {
      addEvent(eventKey, eventValue);
      setSelectedEventId(getKey(date, hour));
    }
  };


  return (
    <Container>
      <Title setSelectedEventId={setSelectedEventId}/>
      <Header
        days={days}
        month={currentDate.toLocaleString('default', { month: 'long' })}
        handlePrevWeek={handlePrevWeek}
        handleNextWeek={handleNextWeek}
      />

      <DaysContainer>
        {Array.from({ length: 24 }).map((_, index) => (
          <React.Fragment key={index}>
            <Hour>{`${index}:00`}</Hour>
            {days.map((day) => (
              <TimeSlot
                key={day.getTime() + index}
                onClick={() => handleTimeSlotClick(day, index)}
                hasEvent={getEvent(getKey(day, index))}
                isSelected={selectedEventId === getKey(day, index)} />
            ))}
          </React.Fragment>
        ))}
      </DaysContainer>
      <Footer>
        <TodayButton onClick={handleToday}>Today</TodayButton>
        {selectedEventId !== null ? (
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        ) : null}
      </Footer>
    </Container>
  );
};

WeekCalendar.propTypes = {};

export default WeekCalendar;
