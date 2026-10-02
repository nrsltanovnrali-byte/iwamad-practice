import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikesProvider } from '../context/LikesContext';
import LikeButton from './LikeButton';

describe('LikeButton', () => {
  it('updates the visible text when clicked', async () => {
    const user = userEvent.setup();

    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Like this profile');

    await user.click(button);

    expect(button).toHaveTextContent('Liked (1)');
  });
});