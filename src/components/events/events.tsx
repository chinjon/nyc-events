import EventCard from "../event-card/event-card";
import { Event } from "../../core/types/event.interface";
import "./events.css";

export default function Events({ eventsData }: { eventsData: Event[] }) {
  console.log(eventsData)
  const eventCards = eventsData.map((event) => <EventCard key={event.event_id} eventInfo={event}></EventCard>)
  return (
    <>
      <div className="events-container">
        {eventCards}
      </div>
    </>
  )
}