
import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import type { CampusEvent } from '../data/events'
import { validateSignup } from '../lib/validateSignup'
import type { SignupValues } from '../lib/validateSignup'
import TextField from './ui/TextField'
import Button from './ui/Button'

type Props = {
  event: CampusEvent
}

function EventSignupForm({ event }: Props) {
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1'
  })

  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    tickets: false
  })
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [message, setMessage] = useState('')

  const errors = validateSignup(values, seatsLeft)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value
    })

    setMessage('')
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    setTouched({
      ...touched,
      [event.target.name]: true
    })
  }

  function getError(field: keyof SignupValues) {
    if (touched[field] || submitAttempted) {
      return errors[field]
    }

    return undefined
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length > 0) {
      return
    }

    const tickets = Number(values.tickets)

    setSeatsLeft(seatsLeft - tickets)
    setMessage(`Booked: ${tickets} for ${values.fullName.trim()}.`)

    setValues({
      fullName: '',
      email: '',
      tickets: '1'
    })

    setTouched({
      fullName: false,
      email: false,
      tickets: false
    })

    setSubmitAttempted(false)
  }

  return (
    <section>
      <h2>Book Tickets</h2>

      <p>Seats left: {seatsLeft}</p>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('fullName')}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('email')}
        />

        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min="1"
          max="4"
          step="1"
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('tickets')}
        />

        <Button type="submit">Book</Button>
      </form>

      {message && <p role="status">{message}</p>}
    </section>
  )
}

export default EventSignupForm
