import LikeButton from './LikeButton';

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
  email: string;
  githubUrl: string;
};

function ProfileCard({ name, bio, avatarUrl, email, githubUrl }: ProfileCardProps) {
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
          <LikeButton />
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;