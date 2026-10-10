import Tag from './ui/Tag';

type SkillsProps = {
  skills: string[];
};

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>
            <Tag label={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;