import { Event } from "../../core/types/event.interface";

export default function EventCard(eventInfo: {eventInfo: Event}) {
  return (
    <>
    <div>{eventInfo.eventInfo.event_name}</div>
    </>
  )
}