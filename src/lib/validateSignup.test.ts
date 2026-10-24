
import { describe, it, expect } from 'vitest'
import { validateSignup } from './validateSignup'

const validValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2'
}

describe('validateSignup', () => {
  it('accepts valid data', () => {
    const errors = validateSignup(validValues, 10)
    expect(errors).toEqual({})
  })

  it('rejects an empty full name', () => {
    const errors = validateSignup(
      { ...validValues, fullName: ' ' },
      10
    )
    expect(errors.fullName).toBe('Enter your full name')
  })

  it('rejects an invalid email', () => {
    const errors = validateSignup(
      { ...validValues, email: 'invalid-email' },
      10
    )
    expect(errors.email).toBe(
      'Enter a valid email, like name@example.com'
    )
  })

  it('rejects invalid ticket numbers', () => {
    for (const tickets of ['0', '5', '1.5']) {
      const errors = validateSignup(
        { ...validValues, tickets },
        10
      )
      expect(errors.tickets).toBe('Choose 1 to 4 tickets')
    }
  })

  it('accepts 4 tickets', () => {
    const errors = validateSignup(
      { ...validValues, tickets: '4' },
      10
    )
    expect(errors).toEqual({})
  })

  it('rejects tickets when there are not enough seats', () => {
    const errors = validateSignup(
      { ...validValues, tickets: '3' },
      2
    )
    expect(errors.tickets).toBe('Only 2 seats left')
  })
})
