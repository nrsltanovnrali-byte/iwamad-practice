
import { Link, useParams } from 'react-router'
import { events } from '../data/events'

function EventDetailsPage() {
  const { eventId } = useParams()

  const event = events.find(
    (item) => item.id === Number(eventId)
  )

  if (!event) {
    return (
      <section>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to Events</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{event.title}</h1>

      <p>Date: {event.date}</p>
      <p>Place: {event.place}</p>
      <p>Seats: {event.seats}</p>

      <Link to="/events">Back to Events</Link>
    </section>
  )
}

export default EventDetailsPage
