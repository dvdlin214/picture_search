import React from 'react';
import '../css/ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  let isFirst = true;
  const images = props.images.map((image) => {
    if (isFirst === true) {
      isFirst = false;
      return <ImageCard key={image.id} image={image} active="active" />
    } else {
      return <ImageCard key={image.id} image={image} />
    }
  });

  return (
    <div className="carousel-space">
      <div id="carouselEControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="image-list">{images}</div>
        </div>
        <a className="carousel-control-prev" href="#carouselEControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselEControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
  // return <div className="image-list">{images}</div>;
};

export default ImageList;