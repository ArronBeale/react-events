import { useLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();

    return (
      <EventItem event={data.event} />
    );
  }
  
  export default EventDetailPage;

  export async function loader({reqeust, params}) {
    const id = params.eventId;

    const response = await fetch('https://8080-arronbeale-reactevents-xvwen2ceig2.ws-eu104.gitpod.io/events/' + id);
    
    if (!response.ok) {
      throw json({message: 'Could not fetch details for selected event.'},
      {
        status: 500
      })
    } else {
      return response;
    }
  }