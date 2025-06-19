
import React from 'react';
import Video from './Video';

const VideoGallery = () => {
  const videos = [
    {
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      title: 'Web Development Process',
      description: 'From concept to deployment - see how we build modern websites'
    },
    {
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      title: 'UI/UX Design Workshop',
      description: 'Behind the scenes of our design process and user research'
    },
    {
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_3mb.mp4',
      title: 'Mobile App Development',
      description: 'Creating seamless mobile experiences across platforms'
    },
    {
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      title: 'Client Success Stories',
      description: 'Real testimonials from our satisfied clients'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Video Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our work come to life through these showcase videos demonstrating 
            our expertise and client success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Video
              key={index}
              src={video.src}
              title={video.title}
              description={video.description}
              autoPlay={false}
              muted={true}
              controls={true}
              className="shadow-xl card-hover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
