export default function Experience({ position, company, date, contribution }) {
  return (
    <div className="experience">
      <h3>{position} at {company}</h3>
      <span className="datetime">{date}</span>
      <p>{contribution}</p>
    </div>
  )
}