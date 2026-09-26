type Goal = {
  skill: string;
  level: string;
};

type GoalsProps = {
  goals: Goal[];
};

function Goals({ goals }: GoalsProps) {
  return (
    <section id="goals">
      <h2>Goals</h2>
      <table border={1}>
        <tbody>
          <tr>
            <th>Skill</th>
            <th>Level</th>
          </tr>
          {goals.map((goal) => (
            <tr key={goal.skill}>
              <td>{goal.skill}</td>
              <td>{goal.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Goals;