import ProfileCard from '../components/ProfileCard';
import Goals from '../components/Goals';

function HomePage() {
  const goals = [
    { skill: 'English', level: 'B2 to C1' },
    { skill: 'HTML/CSS', level: 'Learning' },
    { skill: 'Management', level: 'Improving' },
  ];

  return (
    <>
      <ProfileCard
        name="Nursultanov Nurali"
        bio="Manager who wants to create apps and websites. Currently learning HTML, CSS and JavaScript step by step."
        avatarUrl="photo.jpg"
        email="nrsltanovnrali@gmail.com"
        githubUrl="https://github.com/nrsltanovnrali-byte"
      />
      <Goals goals={goals} />
    </>
  );
}

export default HomePage;