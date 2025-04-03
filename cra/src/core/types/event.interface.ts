export interface Event {
  event_id: string;
  event_name: string;
  event_type: string;
  event_location?: string;
  start_date_time?: string;
  end_date_time?: string;
  street_closure_type?: string;
  police_precinct?: string;
  event_borough?: string;
  event_agency?: string;
}