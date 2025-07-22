import { useRef } from 'react';
import './App.css'
import { projects } from './projects.js'
import { Mail, Github, Linkedin, Instagram } from "lucide-react"
const getRandomColor = () => {
  const colors = [
    "#FFC300", "#FF9800", "#E91E63", "#FF5733", "#F06292", "#FF5252", "#00BCD4", "#33B5FF", "#9C27B0", "#3F51B5", "#7C4DFF", "#009688", "#4CAF50", "#8BC34A"]
    ;
  return colors[Math.floor(Math.random() * colors.length)];
};
const Card = (props) => {
  const bgColor = getRandomColor();
  return (
    <div className='card'>
      <div className="image">
        <img src={props.image} alt={props.heading} />
      </div>
      <div className='title'>{props.heading}</div>

      <div className="info">
        {props.text}
      </div>
      <div className="cardbuttons">

        <div className='cardbutton' style={{ backgroundColor: bgColor }}><a href={props.link} target="_blank" rel="noopener noreferrer">View Live </a></div>
        <div className='cardbutton' style={{ backgroundColor: bgColor }}><a href={`https://www.github.com/GurbajSinghCodes/${props.github}`} target="_blank" rel="noopener noreferrer">Git Repo</a></div>
      </div>
    </div>
  )
}

const App = () => {
  const scrollRef1 = useRef(null)
  const scrollRef2 = useRef(null)
  const scrollLeft = (element) => {
    element.current.scrollBy({ left: -283, behavior: "smooth" })
  }
  const scrollRight = (element) => {
    element.current.scrollBy({ left: 283, behavior: "smooth" })
  }
  return (
    <div className="app">
      <div className="about ">
        <div className="pp">
          <img src="Gurbaj.jpg" alt="" />
        </div>
        <div className="heading">
          <div className="name">Gurbaj Singh</div>
          <div className="study">Student of B.Tech Computer Science</div>
        </div>
      </div>
      <div className="technologies">
        <div className="header">
          <div className='division'>Tech Stack</div>
          <div className="buttons">
            <button onClick={() => scrollLeft(scrollRef1)} className="scroll-btn">◀</button>
            <button onClick={() => scrollRight(scrollRef1)} className="scroll-btn">▶</button>
          </div>
        </div>
        <div className="images" ref={scrollRef1}>

          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
            <img src="technologies/html.jpg" alt="HTML Documentation" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
            <img src="technologies/css.jpg" alt="CSS Documentation" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="technologies/js.jpg" alt="JavaScript Documentation" />
          </a>
          <a href="https://react.dev/learn" target="_blank">
            <img src="technologies/react.jpg" alt="React Documentation" />
          </a>
          <a href="https://nodejs.org/docs/latest/api/" target="_blank">
            <img src="technologies/node.jpg" alt="Node.js Documentation" />
          </a>
          <a href="https://expressjs.com/" target="_blank">
            <img src="technologies/express.jpg" alt="Express.js Documentation" />
          </a>
          <a href="https://www.mongodb.com/docs/" target="_blank">
            <img src="technologies/mongodb.jpg" alt="MongoDB Documentation" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL" target="_blank">
            <img src="technologies/sql.jpg" alt="SQL Documentation" />
          </a>
        </div>
      </div>

      <div className="projects">
        <div className="header projectsheader">
          <div className='division'>Projects</div>
          <div className="buttons">
            <button onClick={() => scrollLeft(scrollRef2)} className="scroll-btn">◀</button>
            <button onClick={() => scrollRight(scrollRef2)} className="scroll-btn">▶</button>
          </div>
        </div>
        <div className="cards" ref={scrollRef2}>

          {projects.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              heading={card.heading}
              text={card.text}
              link={card.link}
              github={card.gitub}
            />
          ))}
        </div>

      </div>

      <div className="contact">
        <div className="header">
          <div className="division">Contact Me</div>
        </div>
        <div className="contacts">
          <a target='_blank' href="mailto:gurbajsingh098@gmail.com"> <Mail />Mail</a>
          <a target='_blank' href="https://github.com/gurbajsinghcodes"><Github />Github</a>
          <a target='_blank' href="https://linkedin.com/in/gurbaj-singh-5a09482a6"><Linkedin />LinkedIn</a>
          <a target='_blank' href="https://instagram.com/gurbaj_khaira"><Instagram /> Instagram</a>

        </div>
      </div>
    </div>
  );
}

export default App;
