import React, { useState, useEffect } from "react";
import VisitDataService from "../services/visits";
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";
import "./VisitDetail.css";

const VisitDetail = ( { user }) => {
  let params = useParams();
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  const [attraction, setAttraction] = useState({
    id: null,
    name: "",
    address: "",
    website: "",
    description: "",
    reviews: [],
    poster:[],
  });

    useEffect(() => {
      const getVisit = id => {
        VisitDataService.getVisit(id)
          .then((response) => {
            setAttraction(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      getVisit(params.id);
    }, [params.id]);

    if (!attraction) {
        return <div>Loading...</div>;
    }

    const deleteReview = (reviewId, index) => {
      VisitDataService.deleteReview(reviewId, params.id)
          .then(response => {
              setAttraction((prevState) => {
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
      (preIndex + 1) % attraction.poster.length);
  }

  const prePoster = () => {
    setCurrentPosterIndex((preIndex) => 
      (preIndex - 1 + attraction.poster.length) % attraction.poster.length);
  }

  return (
     <div className="visit-detail-container">
       <div className="attraction-info">
         <div className="attraction-image">
         <div className="poster-container">
            {attraction.poster.length > 1 && (
              <span title="Previous">
              <button className="left-arrow" onClick={prePoster}>
                &lt;
              </button>
            </span>)}
            <div className="poster-box">
              <img src={attraction.poster[currentPosterIndex]} alt={attraction.name} className="poster"/>
            </div>
            {attraction.poster.length > 1 && (
              <span title="Next">
              <button className="right-arrow" onClick={nextPoster}>
                &gt;
              </button> 
              </span>)}
          </div>
         </div>
         <div className="attraction-details">
           <h2>{attraction.name}</h2>
           <p>
             <strong>Address:</strong> {attraction.address}
           </p>
           <p>
             <strong>Description:</strong> {attraction.description}
           </p>
           {user && (
            <Link to={"/visits/"+params.id+"/review"}>
            <button className="review-button">Write a Review</button>
            </Link>
           )}
         </div>
       </div>

     <div className="reviews-section">
        <Row className="reviews">
        <h3> Reviews</h3>
          {attraction.reviews.map((review, index) => { 
            return(
              <Col className='d-flex' key={index}>
                <CardGroup className="visitsGroup">
                  <Card className="reviewsText">
                    <Card.Title>Name: {review.name}</Card.Title>                                  
                       <Card.Body>Review: {review.review}</Card.Body>
                        <Card.Body>Rate: {review.score}</Card.Body>
                    <Card.Footer className="edit-review">
                    <div className="btn-wrapper text-center d-flex justify-content-between">
                      { user && user.googleId === review.user_id &&
                      <Row>
                        <Col>
                          <Link to = {{
                            pathname: "/visits/"+params.id+"/review/"
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
                    </div>
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

export default VisitDetail;
