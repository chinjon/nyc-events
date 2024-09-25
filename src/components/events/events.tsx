import EventCard from "../event-card/event-card";
import { Event } from "../../core/types/event.interface";

export default function Events({eventsData} : {eventsData: Event[]}) {
  console.log(eventsData)
  const eventCards = eventsData.map((event) => <EventCard key={event.event_id} eventName={event.event_name}></EventCard>)
  return (
    <>
      {eventCards}
    </>
  )
}