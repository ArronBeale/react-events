import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('https://8080-arronbeale-reactevents-xvwen2ceig2.ws-eu104.gitpod.io/events');
      if (!response.ok) {
        // ...
      } else {
        return response;
      }
}