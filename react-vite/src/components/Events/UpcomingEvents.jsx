import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  { date: '2023-12-25', title: 'Christmas Celebration' },
  { date: '2023-11-24', title: 'Thanksgiving Feast' },
  // Add more events here
];

function UpcomingEvents() {
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onChange = (newDate) => {
    setDate(newDate);
    const event = events.find(e => e.date === newDate.toISOString().split('T')[0]);
    setSelectedEvent(event);
  };

  return (
    <section className="mb-8 flex flex-col items-center pt-24">
      <div className="ml-8 mt-8 p-4 bg-[#f69b28] rounded-lg shadow-lg flex justify-center items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white text-center">Event Calendar</h2>
          <Calendar onChange={onChange} value={date} className="rounded-lg shadow-md" />
        </div>
      </div>
      <div className="ml-8 mt-8 p-4 bg-[#f69b28] rounded-lg shadow-lg flex justify-center items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Event Details</h2>
          {selectedEvent ? (
            <p className="text-lg">{selectedEvent.title}</p>
          ) : (
            <p className="text-lg">No events on this day</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
