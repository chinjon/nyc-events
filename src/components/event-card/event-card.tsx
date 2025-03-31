import { Event } from "../../core/types/event.interface";
import "./event-card.css";
import {format} from "date-fns"

export default function EventCard(eventInfo: { eventInfo: Event }) {
  const startDate = new Date(eventInfo.eventInfo.start_date_time as string);
  const endDate = new Date(eventInfo.eventInfo.end_date_time as string);
  const dateMonth = format(startDate, "LLL");
  const dateDay = format(startDate, "d");
  const dateYear = format(startDate, "yyyy");

  const startTime = format(startDate, "p");
  const endTime = format(endDate, "p");

  const boroughClassName = (borough: string) => {
    const boroughNormalized = borough.toLowerCase();
    if (boroughNormalized != "staten island") {
      return boroughNormalized;
    }
    return boroughNormalized.split(" ").join("-");
  };

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
          <div>
            <p className="event-times">
              {startTime} - {endTime}
            </p>
          </div>
          <div className="badge-row">
            <span
              className={
                "badge " +
                boroughClassName(eventInfo.eventInfo.event_borough as string) +
                "-badge-color"
              }
            >
              {eventInfo.eventInfo.event_borough}
            </span>
            <span className="badge generic-badge-color">
              {eventInfo.eventInfo.event_type}
            </span>
          </div>
          <div className="truncate">
            {eventInfo.eventInfo.event_location?.split(",")[0]}
          </div>
        </div>
      </div>
    </>
  );
}
