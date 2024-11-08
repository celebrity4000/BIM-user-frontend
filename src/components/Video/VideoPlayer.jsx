import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const VideoPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (value) => {
    setVolume(value[0] / 100);
    if (value[0] > 0) setMuted(false);
  };

  const handleToggleMute = () => {
    setMuted(!muted);
  };

  const handleSeekChange = (value) => {
    setPlayed(value[0] / 100);
  };

  const handleSeekMouseUp = (value) => {
    setSeeking(false);
    playerRef.current.seekTo(value[0] / 100);
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds) return "00:00";
    const pad = (num) => `0${Math.floor(num)}`.slice(-2);
    const minutes = seconds / 60;
    return `${pad(minutes)}:${pad(seconds % 60)}`;
  };

  return (
    <Card className="w-full">
      <CardContent className="p-0 relative">
        <div ref={containerRef} className="aspect-video relative group">
          <ReactPlayer
            ref={playerRef}
            url={url}
            width="100%"
            height="100%"
            playing={playing}
            volume={volume}
            muted={muted}
            onProgress={handleProgress}
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Progress Bar */}
            <div className="mb-4">
              <Slider
                value={[played * 100]}
                onValueChange={handleSeekChange}
                onValueCommit={handleSeekMouseUp}
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Play/Pause */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePlayPause}
                  className="text-white hover:text-[#FF006B] hover:bg-white/10"
                >
                  {playing ? <Pause size={24} /> : <Play size={24} />}
                </Button>

                {/* Volume Control */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleToggleMute}
                    className="text-white hover:text-[#FF006B] hover:bg-white/10"
                  >
                    {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </Button>
                  <div className="w-24">
                    <Slider
                      value={[volume * 100]}
                      onValueChange={handleVolumeChange}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Time Display */}
                <span className="text-white text-sm">
                  {formatTime(playerRef.current?.getCurrentTime())} /
                  {formatTime(playerRef.current?.getDuration())}
                </span>
              </div>

              {/* Fullscreen */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="text-white hover:text-[#FF006B] hover:bg-white/10"
              >
                {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
