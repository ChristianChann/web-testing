import React, { useRef, useState } from 'react';
import './VideoComponents.css';

const Video = () => {
 
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    // useEffect(() => {
    //     const fetchVideo = async () => {
    //         try {
    //             const response = await fetch('https://api.example.com/video'); 
    //             const data = await response.json();
    //             setVideoSrc(data.videoUrl); 

    //         } catch (error) {
    //             console.error('Error fetching video data:', error);
    //         }
    //     };

    //     fetchVideo();
    // }, []);

    const handclick = () =>{
            if (isPlaying) {
                videoRef.current.pause();
                console.log("close")
            } else {
                videoRef.current.play();
                console.log("play")
            }
            setIsPlaying(!isPlaying);
            }

    return (
        <div class="video-box" onClick={handclick}>
          <video id="video" ref={videoRef}>
            <source src="wwe" type="video/mp4"/>
          </video>
   </div>
    );
};

export default Video;