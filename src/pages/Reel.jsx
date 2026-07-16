import { useEffect, useRef, useState } from "react";

function Reel({ src, className }) {

  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

      if (!video) return;
      
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 0.7) {
        video.play().catch(() => {});
      } else {
        video.pause();

        // Alleen resetten als de video volledig uit beeld is
        if (entry.intersectionRatio === 0) {
          video.currentTime = 0;
          setShowControls(false);
        }
     }
      },
      { 
        threshold: [ 0, 0.7]
       }
      );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
     className={className}
      ref={videoRef}
      controls={showControls}
      onClick={() => setShowControls(prev => !prev)}
        
      muted
      loop
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default Reel;