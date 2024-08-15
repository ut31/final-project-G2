import React from "react";
import PropTypes from "prop-types";
import "./topics.css";
import Card from "../3.2.1. card/Card";

const Topics = (props) => (
  <div className="topics-container">
    {props.topics.map((topic) => (
      // eslint-disable-next-line react/jsx-key
      <Card
        id={topic.id}
        name={topic.name}
        topic={topic.topic}
        category={topic.category}
        image={topic.image}
        rating={topic.rating}
      />
    ))}
  </div>
);

Topics.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default Topics;