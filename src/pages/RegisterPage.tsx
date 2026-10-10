import { useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';

import {
  validateRegistration,
  type RegistrationValues,
  type RegistrationErrors,
} from '../lib/validateRegistration';

import TextField from '../components/ui/TextField';

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [touched, setTouched] = useState<
    Record<string, boolean>
  >({});

  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;

    const updatedValues = {
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    };

    setValues(updatedValues);

    // Update errors after a field has been touched
    // or after a submit attempt.
    if (touched[name] || attemptedSubmit) {
      setErrors(validateRegistration(updatedValues));
    }
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors(validateRegistration(values));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setAttemptedSubmit(true);

    const validationErrors = validateRegistration(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function getError(field: keyof RegistrationValues) {
    if (touched[field] || attemptedSubmit) {
      return errors[field];
    }

    return undefined;
  }

  if (submitted) {
    return (
      <main>
        <h1>Thank you!</h1>

        <p role="status">
          Thanks, {values.fullName}. You are registered.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>Create Account</h1>

      <p>Join our community by creating an account.</p>

      <form onSubmit={handleSubmit} noValidate>

        <TextField
          label="Full Name"
          name="fullName"
          type="text"
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
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('password')}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('confirmPassword')}
        />

        <div>
          <label htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(getError('acceptTerms'))}
              aria-describedby={
                getError('acceptTerms')
                  ? 'acceptTerms-error'
                  : undefined
              }
            />

            I accept the terms and conditions
          </label>

          {getError('acceptTerms') && (
            <p id="acceptTerms-error" role="alert">
              {getError('acceptTerms')}
            </p>
          )}
        </div>

        <button type="submit">
          Create Account
        </button>

      </form>
    </main>
  );
}

export default RegisterPage;