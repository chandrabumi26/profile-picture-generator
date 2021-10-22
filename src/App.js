import logo from './logo.svg';
import './App.css';
import ReactRoboHash from 'react-robohash';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <input className="input-name" placeholder="Ketik Nama Anda"></input>
        <button onclick={setAvatar()} className="button-generate">Buat Profile Picture</button>
        <div id="borderwhite" className="avatar">
        <ReactRoboHash id="robo" name="foxy" type="cat" className="robovisibility"></ReactRoboHash>
        </div>
      </header>
    </div>
  );
}

function setAvatar(){
var mydiv = document.getElementById("borderwhite");
var robo = document.getElementById("robo");
mydiv.style.visibility = "visible";
robo.style.visibility = "visible";
}

export default App;
