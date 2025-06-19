import React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface VideoProps {
  src: string;
  title?: string;
  description?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

const isGoogleDriveLink = (url: string): boolean => {
  return url.includes('drive.google.com') && url.includes('/preview');
};

const Video: React.FC<VideoProps> = ({
  src,
  title,
  description,
  autoPlay = false,
  muted = true,
  controls = true,
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const [isMuted, setIsMuted] = React.useState(muted);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <Card className={`relative group overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="relative w-full aspect-video">
          {isGoogleDriveLink(src) ? (
            <iframe
              src={src}
              title={title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-t-lg border-none"
            />
          ) : (
            <video
              ref={videoRef}
              src={src}
              autoPlay={autoPlay}
              muted={isMuted}
              loop
              className="w-full h-full object-cover rounded-t-lg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}

          {!isGoogleDriveLink(src) && controls && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={togglePlay}
                  className="bg-white/90 hover:bg-white"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  onClick={toggleMute}
                  className="bg-white/90 hover:bg-white"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="bg-white/90 hover:bg-white"
                >
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {(title || description) && (
          <div className="p-4">
            {title && <h3 className="font-semibold text-lg mb-2">{title}</h3>}
            {description && <p className="text-muted-foreground text-sm">{description}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Video;
