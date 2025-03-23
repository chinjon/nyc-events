import { Event } from "../../core/types/event.interface";
import "./event-card.css";
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'


export default function EventCard(eventInfo: { eventInfo: Event }) {
  dayjs.extend(localizedFormat);
  const startDate = new Date(eventInfo.eventInfo.start_date_time as string);
  const endDate = new Date(eventInfo.eventInfo.end_date_time as string);
  const dateMonth = dayjs(startDate).format("MMM");
  const dateDay = dayjs(startDate).format("DD");
  const dateYear = dayjs(startDate).format("YYYY");

  const startTime = dayjs(startDate).format("LTS");
  const endTime = dayjs(endDate).format("LTS");

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
        <div className="event-details">
          <div className="event-title">{eventInfo.eventInfo.event_name}</div>
          <div><p className="event-times">{startTime} - {endTime}</p></div>
          <div className="badge-row">
          <span className="badge borough-badge-color">{eventInfo.eventInfo.event_borough}</span>
            <span className="badge generic-badge-color">{eventInfo.eventInfo.event_type}</span>
          </div>
          <div className="truncate">
            {eventInfo.eventInfo.event_location?.split(",")[0]}
          </div>
        </div>
      </div>
    </>
  );
}
