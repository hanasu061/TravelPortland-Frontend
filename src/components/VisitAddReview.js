import React, { useState } from 'react';
import VisitDataService from "../services/visits";
import EatDataService from "../services/eats";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const VisitAddReview = ({ user }) => {
    const navigate = useNavigate()
    let params = useParams();

    let editing = false;
    let initialReviewState = "";
    let location = useLocation();

    if(location.state && location.state.currentReview) {
        editing = true;
        initialReviewState = location.state.currentReview.review;
    }

    const [review, setReview] = useState(initialReviewState);

    const [rating, setRating] = useState('');
    const onChangeRating = e => {
        const newRating = e.target.value;
        if (/^\d+(\.\d{1,2})?$/.test(newRating) && parseFloat(newRating) >= 0 && parseFloat(newRating) <= 5) {
            setRating(newRating);
        }
    }

    const onChangeReview = e => {
        const review = e.target.value;
        setReview(review);
        console.log(review);
    }

    const isSubmitDisabled = !rating && !review;

    const saveReview = () => {
        if(!user) {
            return;
        }

        if(!rating || !review) {
            return;
        }
            
        var data = {
            facility_id: params.id,
            review: review,
            score: parseFloat(rating),
            name: user.name,
            user_id: user.googleId,
        }
        
        if(editing) {
            data.review_id = location.state.currentReview._id
            VisitDataService.updateReview(data)
                .then(response => {
                    navigate("/visits/"+params.id);
                    console.log(params.id);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            VisitDataService.createReview(data)
                .then(response => {
                    navigate("/visits/"+params.id)
                    console.log(params.id);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    return (
        <Container className="main-container">
            {user && (
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>{ editing ? "Edit" : "Create" } Review</Form.Label>
                        <Form.Control
                            as="textarea"
                            type="text"
                            required
                            value={ review }
                            onChange={ onChangeReview }
                            
                        />
                        <Form.Control
                            type="text"
                            required
                            value={rating}
                            onChange={onChangeRating}
                            placeholder="Rating (0-5)"
                        />
                    </Form.Group>
                        <Button variant="primary" onClick={ saveReview } disabled={isSubmitDisabled}>
                            Submit
                        </Button>
                </Form>
            )}
        </Container>
    )
}


export default VisitAddReview;