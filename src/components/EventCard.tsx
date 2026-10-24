
import { Link } from 'react-router'
import type { CampusEvent } from '../data/events'
import Card from './ui/Card'
import Tag from './ui/Tag'

type Props = {
  event: CampusEvent
}

function EventCard({ event }: Props) {
  return (
    <article>
      <Card>
        <h2>{event.title}</h2>

        <p>Date: {event.date}</p>
        <p>Place: {event.place}</p>

        <Tag label={`${event.seats} seats`} />

        <p>
          <Link to={`/events/${event.id}`}>
            Details
          </Link>
        </p>
      </Card>
    </article>
  )
}

export default EventCard
