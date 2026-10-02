import Header from './components/Header';
import Nav from './components/Nav';
import ProfileCard from './components/ProfileCard';
import Skills from './components/Skills';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

function App() {
  const skills = ['English B2', 'C++', 'Python', 'SQL'];
  const goals = [
    { skill: 'English', level: 'B2 to C1' },
    { skill: 'HTML/CSS', level: 'Learning' },
    { skill: 'Management', level: 'Improving' },
  ];

  return (
    <>
      <Header name="Nursultanov Nurali" tagline="Great Manager & Aspiring Web Developer" />
      <Nav />
      <main>
        <ProfileCard
          name="Nursultanov Nurali"
          bio="Manager who wants to create apps and websites. Currently learning HTML, CSS and JavaScript step by step."
          avatarUrl="photo.jpg"
          email="nrsltanovnrali@gmail.com"
          githubUrl="https://github.com/nrsltanovnrali-byte"
        />
        <Skills skills={skills} />
        <Goals goals={goals} />
        <Contact email="nrsltanovnrali@gmail.com" />
      </main>
      <Footer year={2026} name="Nursultanov Nurali" />
    </>
  );
}

export default App;