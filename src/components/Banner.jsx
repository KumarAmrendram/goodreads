import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import zeroToOne from "../assets/zero-to-one.jpg";
import deepWork from "../assets/deep-work.jpg";
import BookCard from "./Bookcard";
const Banner = () => {
  const Reading = [
    {
      title: "Deep Work",
      author: "Cal Newport",
      imgUrl: deepWork,
      rating: "?/5",
      review: `Reading this book because I wanted to learn how to work for hours with deep focus.`
    },
  ];

  const selfHelp = [
    {
      title: "Zero to One",
      author: "Peter Thiel",
      imgUrl: zeroToOne,
      rating: "4.5/5",
      review: `A great book for those who wants to  startup. you will get 
      everything you need for starting up here. This book has answer of your every 
      HOWs, WHATs and WHYs.`,
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
            <Tabs className="d-flex justify-content-center" justify variant="pills" defaultActiveKey="first">
              <Tab
                className="row tab mt-3 align-items-center"
                eventKey="first"
                title="Reading"
              >
                <Row className="">
                  {Reading.map((book, index) => {
                    return <BookCard key={index} {...book} />;
                  })}
                </Row>
              </Tab>
              <Tab
                className="row tab mt-3 align-items-center"
                eventKey="second"
                title="Business"
              >
                <Row className="">
                  {selfHelp.map((book, index) => {
                    return <BookCard key={index} {...book} />;
                  })}
                </Row>
              </Tab>
              <Tab className="tab" eventKey="third" title="Self Help">
                <h1>Working on it...</h1>
              </Tab>
              <Tab className="tab" eventKey="fourth" title="Fiction">
                <h1>Working on it...</h1>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    <footer className="container-fluid text-center text-bg-warning">developed by <a href="https://instagram.com/amrendtam_">amrendram</a></footer>

    </section>
  );
};

export default Banner;
