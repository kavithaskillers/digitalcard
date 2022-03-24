import logo from './logo.svg';
import kavi from './kavi.jpeg';
import './App.css';
import Button from '@mui/material/Button';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<div className='md'>
  <div className='imagediv'>
  <img src={kavi} className="kavi" alt="mypic" />
  </div>
    <div className='namediv'><h1>Kavitha santhanam </h1>

      <div className='position'> <h3>Fullstack developer</h3></div>
      </div>
       <div className='emaildiv'> 
       <Button variant="contained" disableElevation>
  email
</Button>
</div>
        <div className='aboutas'><h4>About</h4>
        <p>Dedicated and efficient full stack developer with 2+ years experience in application layers,
           presentation layers, and databases. Certified in both F/E and B/E technologies.
           Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased
            effectiveness of database administrators by 20%.
           Seeking to further improve HTML5 and CSS3 skills as the future full stack developer
            at Atmospheric Solutions.</p></div>
          <div className='intrested'>
            <h4>Intrested</h4>
            <p>
            Exhibiting a desire to experience new cultures and environments—especially 
            if your role would involve working with foreign colleagues, 
            partners or clients—can really help your resume shine.
            </p>
          </div>
            <div className='footerdiv'></div>
</div>
  );
}
export default App;
