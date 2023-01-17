import React from "react";
import { Col, Container, Row, Nav, Form, Tab, Tabs } from "react-bootstrap";
import zeroToOne from "../assets/zero-to-one.jpg";
import howToWin from "../assets/How-win-friends-and-influence-people.jpg";
import BookCard from "./Bookcard";
const Banner = () => {
  const books = [
    {
      title: "Zero to One",
      imgUrl: zeroToOne,
      rating: "5/5",
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book.`,
    },
    {
      title: "Zero to one",
      imgUrl: zeroToOne,
      rating: "5/5",
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book.`,
    },
    {
      title: "Zero to one",
      imgUrl: zeroToOne,
      rating: "5/5",
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book.`,
    },
    {
      title: "Zero to one",
      imgUrl: zeroToOne,
      rating: "5/5",
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book.`,
    },
  ];

  return (
    <section className="banner">
      <Container className="text-center mt-3">
        <Row>
          <Col size={12}>
            <h1>
              <span className="highlighted">Goodreads 📚</span>
            </h1>
            <p>Checkout my favorite Books. Select a genre to get started</p>
            <Tabs justify variant="pills" defaultActiveKey="first">
              <Tab
                className="row tab mt-3 align-items-center"
                eventKey="first"
                title="Reading"
              >
                <Row className="">
                  {books.map((book, index) => {
                    return <BookCard key={index} {...book} />;
                  })}
                </Row>
              </Tab>
              <Tab className="tab" eventKey="second" title="Self Help">
                <h1>Working on it...</h1>
              </Tab>
              <Tab className="tab" eventKey="third" title="Business">
                <h1>Working on it...</h1>
              </Tab>
              <Tab className="tab" eventKey="fourth" title="Fiction">
                <h1>Working on it...</h1>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
