import { useEffect, useRef, useState } from "react";

function Reel({ src }) {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

      if (!video) return;
      
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
          setShowControls(false);
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
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