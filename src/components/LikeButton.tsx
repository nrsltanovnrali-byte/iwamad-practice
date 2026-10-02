import { useLikes } from '../context/LikesContext';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button
      className="like-btn rounded-full px-4 py-2"
      type="button"
      aria-pressed={likes > 0}
      onClick={addLike}
    >
      <span>{likes > 0 ? '❤️' : '🤍'}</span>{' '}
      <span>{likes > 0 ? `Liked (${likes})` : 'Like this profile'}</span>
    </button>
  );
}

export default LikeButton;