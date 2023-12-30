import './App.css';
import Error from './Error';

import { useRandomReveal } from 'react-random-reveal'

const AddSuspenseComponent = () => {
  const characters = useRandomReveal({
    characterSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*',
    revealEasing: 'linear',
    isPlaying: true,
    duration: 2,
    characters: 'Amaan Bilwar',
  })

  return (
    <div className='random-text'>
      {characters}
      </div>
  )
}


function App() {
  return (
    <div>
      <AddSuspenseComponent className='random-text'/>
      <div className="main-title">
        <p>
          Welcome to my Website!
        </p>
      </div>
      <div>
        <ul className='list-items'>
          <li>I'm a Computer Engineering student at <a href="https://www.uc.edu/" target ='_blank' >Univerity of Cincinnati</a>
          </li>
          <li>I'm a Software Development Intern at <a href="https://www.honeywell.com/us/en" target ='_blank'>Honeywell Intelligrated</a>
          </li>
          <li>I watch a lot of movies and TV shows</li>
          <li>I can't live without music</li>
        </ul>
      </div>
      <div className='links'>
        <a href="" target='_blank' >Github</a>
        <a href="https://www.linkedin.com/in/amaanbilwar/" target='_blank' >LinkedIn</a>
        <a href="https://drive.google.com/file/d/1HzOOF4F5_AMzJr99VcPgXneC5nX5_3Iy/view?usp=sharing" target='_blank'>Resume</a>
      </div>
    </div>
  );
}

export default App;
