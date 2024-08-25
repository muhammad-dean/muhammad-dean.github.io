import { englishList } from "../lib"
//mport tsa from "../images/tsa.png"
//import xavier_austin_group from "../images/xavier-austin-group.png"

export default function Project({ title, img, date, purpose, utilized, url, github }) {


  /*switch (title.toLowerCase()) {
    case "xavier austin group":
      img = xavier_austin_group
      break
    case "south meck tsa":
      img = tsa
      break
    default:
      img = null
  }*/
  console.log(img)

  return (
    <div className="card">
      <img src={'/images/' + img} alt={`${title} logo`} />
      <h3>{title}</h3>
      <span className="datetime">{date}</span>
      <p>{purpose}</p>
      <div className="flex">
      <a className="button" href={url}>Visit</a>
      <a className="button" href={github}>Source Code</a>
      </div>
    </div>
  )
}