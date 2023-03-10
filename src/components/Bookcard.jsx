import React from "react";
import { Col} from "react-bootstrap";

const BookCard = ({ title,author, imgUrl, rating, review }) => {
  return (
    <Col size={12} sm={12} md={5} lg={5} className="bookcard ">
      <div>
        <img src={imgUrl} alt="book" />
      </div>
      <Col>
        <div className="book-txt">
          <h3>{title}</h3>
          <span>{author}</span><br/>
          <span>Personal rating:  <b>{rating}</b></span><br/>
          <span><b>{review}</b> </span>
        </div>
      </Col>
    </Col>
  );
};

export default BookCard;
