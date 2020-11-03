import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const ArticleSection = (props) => {
  return (
    <Card style={{ marginBottom: "2vh" }}>
      <Card.Header><h4>{props.title}</h4></Card.Header>
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  );
}

ArticleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array
};

export default ArticleSection;
