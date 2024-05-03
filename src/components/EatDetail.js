import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EatDataService from "../services/eats";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";
import "./EatDetail.css";

const EatDetail = ({ user }) => {
  let params = useParams();
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  const [eat, setEat] = useState({
    id: null,
    name: "",
    address: "",
    description: "",
    reviews: [],
    poster:[],
  });


  useEffect(() => {
    const getEat = id => {
      EatDataService.getEat(id)
        .then((response) => {
          setEat(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getEat(params.id);
  }, [params.id]);

  if (!eat) {
      return <div>Loading...</div>;
  }

  const deleteReview = (reviewId, index) => {
    EatDataService.deleteReview(reviewId, params.id)
          .then(response => {
              setEat((prevState) => {
                  prevState.reviews.splice(index, 1);
                  return ({
                      ...prevState
                  })
              })
          })
          .catch(e => {
              console.log(e)
          })
  };

  const nextPoster = () => {
    setCurrentPosterIndex((preIndex) => 
      (preIndex + 1) % eat.poster.length);
  }

  const prePoster = () => {
    setCurrentPosterIndex((preIndex) => 
      (preIndex - 1 + eat.poster.length) % eat.poster.length);
  }

  return (
    <div className="eat-detail-container">
      <div className="eat-info">
        <div className="eat-image">
          <div className="poster-container">
            {eat.poster.length > 1 && (
              <span title="Previous">
              <button className="left-arrow" onClick={prePoster}>
                &lt;
              </button>
            </span>)}
              <div className="poster-box">
                <img src={eat.poster[currentPosterIndex]} alt={eat.name} className="poster"/>
              </div>
            {eat.poster.length > 1 && (
              <span title="Next">
              <button className="right-arrow" onClick={nextPoster}>
                &gt;
              </button> 
              </span>)}
          </div>
        </div>
        <div className="eat-details">
          <h2>{eat.name}</h2>
          <p>
            <strong>Address:</strong> {eat.address}
          </p>
          <p>
            <strong>Description:</strong> {eat.description}
          </p>
          { user && (
            <Link to={"/eats/"+params.id+"/review"}>
            <button className="review-button">Write a Review</button>
            </Link>
          )}
        </div>
      </div>

      <div className="reviews-section">
        <Row className="reviews">
        <h3> Reviews</h3>
          {eat.reviews.map((review, index) => { 
            return(
              <Col className='d-flex' key={index}>
                <CardGroup className="eatsGroup">
                  <Card className="reviewsText">
                    <Card.Title>Name: {review.name}</Card.Title>                                  
                       <Card.Body>Review: {review.review}</Card.Body>
                        <Card.Body>Rate: {review.score}</Card.Body>
                    <Card.Footer className="edit-review">
                      { user && user.googleId === review.user_id &&
                      <Row>
                        <Col>
                          <Link to = {{
                            pathname: "/eats/"+params.id+"/review/"
                            }}
                            state = {{
                              currentReview: review
                            }} >
                            <button className="edit-button">Edit</button>
                          </Link>
                        </Col>
                        <Col>
                          <Button variant="link" onClick={() => deleteReview(review._id, index)}>
                            <button className="edit-button">Delete</button>
                          </Button>
                        </Col>
                      </Row>
                    }
                   </Card.Footer>
                  </Card>                            
                </CardGroup>
              </Col>
                )})}
          </Row>
      </div>
    </div>
  );
};

export default EatDetail;
