import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import LeftArrowIcon from '../common/icons/LeftArrowIcon';
import RightArrowIcon from '../common/icons/RightArrowIcon';

import './video-display.css';

function VideoDisplay(props) {
  return (
    <Card>
      <Card.Header>
        <h4 className="video-title">{props.video.title}</h4>
        <span className="video-arrows">
          <span onClick={props.previousVideo}><a>
            <LeftArrowIcon color="#aaaaaa" />
          </a></span>
          <span onClick={props.nextVideo}><a>
            <RightArrowIcon color="#aaaaaa" />
          </a></span>
        </span>
      </Card.Header>
      
      <Card.Body>
        <div className="background-black video-box">
          { props.video.url ?
            <iframe
              frameBorder="0"
              allowFullScreen="allowfullscreen"
              src={props.video.url}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            /> :
            null
          }
        </div>

        <div className="video-description">
          <h6>About</h6>
          <Card.Text>
            {props.video.description}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

VideoDisplay.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string
  }).isRequired,
  previousVideo: PropTypes.func.isRequired,
  nextVideo: PropTypes.func.isRequired
}

export default VideoDisplay;
