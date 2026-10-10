import { useLikes } from '../context/LikesContext';
import Button from './ui/Button';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      variant="primary"
      className="like-btn rounded-full px-4 py-2"
      type="button"
      aria-label={`Like (${likes} likes)`}
      aria-pressed={likes > 0}
      onClick={addLike}
    >
      <span>{likes > 0 ? '❤️' : '🤍'}</span>{' '}
      <span>
        {likes > 0 ? `Liked (${likes})` : 'Like this profile'}
      </span>
    </Button>
  );
}

export default LikeButton;