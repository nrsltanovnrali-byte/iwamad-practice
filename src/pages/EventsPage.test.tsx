
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { events } from '../data/events'
import EventsPage from './EventsPage'

describe('EventsPage', () => {
  it('shows all events', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>
    )

    const cards = screen.getAllByRole('article')

    expect(cards).toHaveLength(events.length)
  })
})
