import logo from './logo.svg';
import './App.css';





const demos = {
  soundcloud:
    '<iframe id="myawesomeiframe001" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/379775672&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',

  youtube:
    '<iframe id="myawesomeiframe001" width="420" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>'
};

function Iframe(props) {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    </>
  );
}

function App() {


  setInterval(() => {
    document.getElementById('myawesomeiframe001').contentWindow.focus();
  }, 100);



  return (
    <div className="App">
      <h1>I frame Demo</h1>
      <Iframe iframe={demos["soundcloud"]} allow="autoplay" />,
      <p> the is test text </p>
      <input />
    </div>
  );
}

export default App;
