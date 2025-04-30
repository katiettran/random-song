import { useState } from 'react'
import './App.css'

function Header(){
  return (
    <header>
      <h1 className="header-header">Melody Moods</h1>
      <p className="header-p2">Whatever you're feeling, there's a song for it🎼</p>
    </header>
  );
}

function Footer(){
  return ( 
    <section>
     <p className="art"> If art is how we decorate space 🎨. Music is how we decorate time 🎵</p>
     <br/>
      <p className="copyright">&copy; Lynne Tran 🌸🪷</p>
      </section>
  );
}

function Mood() {
  const [trackId, setTrackId] = useState(null); // STEP 1: Create state for trackId

  return (
    <section>
      <h1 className="feeling-button">How are you feeling today?</h1>

      <button className="mood-button" onClick={() => setTrackId("2ULO5bTRJtjuylJiHyRuSh")}>
        I just want to listen to music 🎧
      </button>

      <button className="mood-button" onClick={() => setTrackId("2CcQDI2IDhHbmBIFup58JE")}>
        Ok 🫤
      </button>

      <button className="mood-button" onClick={() => setTrackId("5JoQSuMrHdu7BcgIY9hDcX")}>
        Happy 😺
      </button>

      <button className="mood-button" onClick={() => setTrackId("31VNCmwspR7nVJ6kruUuJt")}>
        Sad 😔
      </button>

      <button className="mood-button" onClick={() => setTrackId("4qJSUFwZFouto5VZUlln75")}>
        Excited 🤩
      </button>

      <button className="mood-button" onClick={() => setTrackId("0lTDxglypMd8e8Q5hnmDnI")}>
        Good 😌
      </button>

      {trackId && (
  <iframe
    className="spotify-iframe"
    src={`https://open.spotify.com/embed/track/${trackId}`}
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="Spotify Player"
  ></iframe>
)}


    </section>
  );
}



function App() {
  return (
    <div className="container">
    <Header />
    <Mood />
    <Footer />
  </div>
    
  );
}
  


export default App
