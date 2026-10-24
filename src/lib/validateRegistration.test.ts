import { describe, expect, it } from 'vitest';

import {
  validateRegistration,
  type RegistrationValues,
} from './validateRegistration';

const validValues: RegistrationValues = {
  fullName: 'Nurali',
  email: 'nurali@example.com',
  password: 'almaty26',
  confirmPassword: 'almaty26',
  acceptTerms: true,
};

describe('validateRegistration', () => {
  it.each([
    {
      name: 'valid registration',
      changes: {},
      expectedField: null,
      expectedError: null,
    },
    {
      name: 'empty full name',
      changes: { fullName: '   ' },
      expectedField: 'fullName',
      expectedError: 'Enter your full name',
    },
    {
      name: 'invalid email',
      changes: { email: 'invalid-email' },
      expectedField: 'email',
      expectedError: 'Enter a valid email, like name@example.com',
    },
    {
      name: 'short password',
      changes: {
        password: 'abc12',
        confirmPassword: 'abc12',
      },
      expectedField: 'password',
      expectedError: 'Use at least 8 characters',
    },
    {
      name: 'password without number',
      changes: {
        password: 'abcdefgh',
        confirmPassword: 'abcdefgh',
      },
      expectedField: 'password',
      expectedError: 'Include at least one number',
    },
    {
      name: 'passwords do not match',
      changes: { confirmPassword: 'different123' },
      expectedField: 'confirmPassword',
      expectedError: 'Passwords do not match',
    },
    {
      name: 'terms not accepted',
      changes: { acceptTerms: false },
      expectedField: 'acceptTerms',
      expectedError: 'Accept the terms to continue',
    },
    {
      name: 'all fields empty',
      changes: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
      },
      expectedField: 'fullName',
      expectedError: 'Enter your full name',
    },
  ])('$name', ({ changes, expectedField, expectedError }) => {
    const values: RegistrationValues = {
      ...validValues,
      ...changes,
    };

    const errors = validateRegistration(values);

    if (expectedField === null) {
      expect(errors).toEqual({});
    } else {
      expect(
        errors[expectedField as keyof RegistrationValues]
      ).toBe(expectedError);
    }

    if (expectedField === 'fullName' && changes.fullName === '') {
      expect(errors.email).toBeDefined();
      expect(errors.password).toBeDefined();
      expect(errors.acceptTerms).toBeDefined();
    }
  });
});