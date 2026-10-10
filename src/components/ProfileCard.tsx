import LikeButton from './LikeButton';
import Card from './ui/Card';

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
  email: string;
  githubUrl: string;
};

function ProfileCard({
  name,
  bio,
  avatarUrl,
  email,
  githubUrl,
}: ProfileCardProps) {
  return (
    <section id="about">
      <h2>About</h2>

      <Card>
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="card__avatar"
          />
        ) : (
          <div
            className="card__avatar avatar-placeholder"
            aria-hidden="true"
          >
            NN
          </div>
        )}

        <div className="card__body">
          <h3 className="card__name">{name}</h3>

          <p className="card__bio">{bio}</p>

          <div className="card__links flex flex-wrap gap-3">
            <a
              className="card__link"
              href={`mailto:${email}`}
            >
              Email
            </a>

            <a
              className="card__link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <LikeButton />
        </div>
      </Card>
    </section>
  );
}

export default ProfileCard;