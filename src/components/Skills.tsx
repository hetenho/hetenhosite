import Icon from "./Icon";

function Skill({ title }: { title: string }) {
  return <div class="skill">
    <Icon name="check" />
    <span>{title}</span>
  </div>
}

export default function Skills() {
  return (
  <div class="skills">
    <h3>My strengths include:</h3>
    <Skill title="Rethinking user flows and making life easier for the end user" />
    <Skill title="Clean code with well thought out naming, maintenance and scalability in mind" />
    <Skill title="An eye for UI design to make things just a little bit prettier using colors, shapes and spacing" />
    <Skill title="Building relationships on trust, giving support and positive feedback for the greater good" />
  </div>
  )
}
