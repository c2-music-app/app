import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = ({tracks}) => {

    
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [Tracks, setTracks] = useState(tracks);

  const audioRef = useRef(null);

  useEffect(() => {
    setDuration(audioRef.current.duration);
  }, []);

  const handlePlay = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  const handleNextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack((prevTrack) => prevTrack + 1);
    }
  };

  const handlePrevTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack((prevTrack) => prevTrack - 1);
    }
  };

    



  return (

    <>
      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextTrack}
      />
 
  { true && <div className="fixed w-screen bottom-0 inset-x-0 z-20 bg-black" >

  <input
            type="range"
            min={0}
            max={duration}
            step={0.01}
            value={currentTime}
            onChange={handleSeek}
            className="flex justify-center items-center w-3/4 mx-auto  rounded-full"
            style={{accentColor: 'red'}}
          />


      <div class="flex justify-center md:justify-between items-center h-16">
        <div class="img md:flex items-center md:visible hidden">
          <img
            src={tracks[currentTrack].img}
            alt="img"
            class="w-16 h-16 object-cover mr-5"
          />
          <h1 className="text-white font-bold">{tracks[currentTrack].name} - {tracks[currentTrack].artist}</h1>
          
          <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            class="ml-32"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
          </svg>
        </div>
  
        <div class="flex items-center">
    


         <button className="prev-song" onClick={handlePrevTrack}>
         <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="30"
            width="30"
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path>
          </svg>
         </button>

     

       
         <button onClick={playing ? handlePause : handlePlay}>
       { !playing  ? 
       <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 16 16"
            class="mx-5 text-white"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
          </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-pause-circle text-white" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
              </svg>
    }
        </button>

       

 
         <button className="next-song" onClick={handleNextTrack}> 
         <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
          </svg>
         </button>

              
          
        </div>
        <div class="md:flex items-center mx-5 md:visible hidden">
         
          <button className="volume">
            <svg
              stroke="currentColor"
              fill="white"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="mx-8"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

        </div>
      </div>
     
    </div>}
    </>
  );
};

export default MusicPlayer;
