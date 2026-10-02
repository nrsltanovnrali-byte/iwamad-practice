type SkillsProps = {
  skills: string[];
};

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;