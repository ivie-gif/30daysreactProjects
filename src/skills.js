// Skill Component
// Component that is bring rendered
const Skill = ({ skill: [tech, level] }) => (
    <li>
      {tech} {level}
    </li>
  )
  

  // Component where the mapping is done
const Skillset = ({skills}) => {
    const skillsList = skills.map((skill) => <Skill skill={skill} />)
    return <ul>{skillsList}</ul>
}

export default Skillset