import { useState } from 'react';

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
  email: string;
  githubUrl: string;
};

function ProfileCard({ name, bio, avatarUrl, email, githubUrl }: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <section id="about">
      <h2>About</h2>
      <div className="card">
        <img src={avatarUrl ?? 'photo.jpg'} alt={name} className="card__avatar" />
        <div className="card__body">
          <h3 className="card__name">{name}</h3>
          <p className="card__bio">{bio}</p>
          <div className="card__links flex flex-wrap gap-3">
            <a className="card__link" href={`mailto:${email}`}>Email</a>
            <a className="card__link" href={githubUrl} target="_blank" rel="noopener">GitHub</a>
          </div>
          <button
            className="like-btn rounded-full px-4 py-2"
            type="button"
            aria-pressed={liked}
            onClick={handleLike}
          >
            <span>{liked ? '❤️' : '🤍'}</span>{' '}
            <span>{liked ? 'Liked!' : 'Like this profile'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;