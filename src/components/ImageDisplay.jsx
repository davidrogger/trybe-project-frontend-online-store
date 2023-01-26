import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageDisplay extends Component {
  constructor() {
    super();

    this.state = {
      picture: '',
    };
  }

  componentDidMount() {
    const { pictures } = this.props;
    const [defaultPicture] = pictures;

    this.setState({
      picture: defaultPicture.url,
    });
  }

  setMainPicture(url) {
    this.setState({
      picture: url,
    });
  }

  render() {
    const { pictures } = this.props;
    const { picture } = this.state;
    const thumbQuantity = 5;

    return (
      <div className="pictures-container">
        <div className="mini-pictures">
          {pictures.filter((_, index) => index < thumbQuantity).map(({ id, url }) => (
            <img
              key={ id }
              src={ url }
              alt={ url }
              onMouseEnter={ () => this.setMainPicture(url) }
            />
          ))}
        </div>
        <div className="main-picture">
          <img
            src={ picture }
            alt=""
          />
        </div>
      </div>
    );
  }
}

ImageDisplay.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
  })),
}.isRequired;

export default ImageDisplay;
