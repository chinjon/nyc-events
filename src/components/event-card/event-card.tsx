import { Event } from "../../core/types/event.interface";
import "./event-card.css";
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'


export default function EventCard(eventInfo: { eventInfo: Event }) {
  dayjs.extend(localizedFormat);
  const date = new Date(eventInfo.eventInfo.start_date_time as string);
  const dateMonth = dayjs(date).format("MMM");
  const dateDay = dayjs(date).format("DD");
  const dateYear = dayjs(date).format("YYYY");

  return (
    <>
      <div className="event-card">
        <div className="event-date">
          <div className="event-date-month-day">
            <div>{dateMonth}</div>
            <div>{dateDay}</div>
          </div>
          <div className="event-date-year">{dateYear}</div>
        </div>
        <div>
          <div className="event-title">{eventInfo.eventInfo.event_name}</div>
          <div>
            <span className="event-type">{eventInfo.eventInfo.event_type}</span>{" "}
          </div>
          <div className="truncate">
            {eventInfo.eventInfo.event_location?.split(",")[0]}
          </div>
        </div>
      </div>
    </>
  );
}
