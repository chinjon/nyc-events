import { Event } from "../../core/types/event.interface";
import "./event-card.css";

export default function EventCard(eventInfo: { eventInfo: Event }) {
  return (
    <>
      <div className="event-card">
        <div className="event-title">{eventInfo.eventInfo.event_name}</div>
        <div><span className="event-type">{eventInfo.eventInfo.event_type}</span> <span>{new Intl.DateTimeFormat("en-us").format(new Date(eventInfo.eventInfo.start_date_time as string))}</span></div>
        <div className="truncate">{eventInfo.eventInfo.event_location}</div>
      </div>
    </>
  )
}