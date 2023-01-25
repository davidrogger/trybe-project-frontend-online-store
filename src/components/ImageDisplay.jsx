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

  render() {
    const { pictures } = this.props;
    const { picture } = this.state;
    return (
      <div className="pictures-container">
        <div className="main-picture">
          <img
            src={ picture }
            alt=""
          />
        </div>
        <div className="mini-pictures">
          {pictures.map(({ id, url }) => (
            <img key={ id } src={ url } alt={ url } />
          ))}
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
