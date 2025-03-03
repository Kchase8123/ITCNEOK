import UpcomingEvents from './UpcomingEvents';
import FeaturedEvents from './FeaturedEvents';
import KeyDates from './KeyDates';
import AnnualMeeting from './AnnualMeeting';
import EventRegistration from './EventRegistration';

function Events() {
  return (
    <div className="p-8">
      <UpcomingEvents />
      <FeaturedEvents />
      <KeyDates />
      <AnnualMeeting />
      <EventRegistration />
    </div>
  );
}

export default Events;
