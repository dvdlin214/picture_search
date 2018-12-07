import React from 'react';
import '../css/ImageCard.css';


class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  render() {
    const { description, urls } = this.props.image;
    const active = this.props.active;

    return (
      <div className={`carousel-item ${active}`}>
        <div className="grey-back">
          <img 
            ref={this.imageRef}
            alt={description}
            src={urls.regular}
          />
        </div>
      </div>
     
    );
  }
}

export default ImageCard;