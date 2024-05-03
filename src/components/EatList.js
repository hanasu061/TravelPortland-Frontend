import React, { useState, useEffect, useCallback } from "react";
import EatDataService from "../services/eats";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import "./EatList.css";
import { CardGroup } from "react-bootstrap";

const EatList= props => {

    // useState to set state values
    const [eats, setEats] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [entriesPerPage, setEntriesPerPage] = useState(0);
    const [filterName, setFilterName] = useState("");
    const [filterAddress, setFilterAddress] = useState("");

    // useCallback to define functions which should
    // only be created once and will be dependencies for
    // useEffect

    const retrieveEats = useCallback(() => {

        EatDataService.getAll(currentPage)
            .then(response => {
                setEats(response.data.eats);
                setCurrentPage(response.data.page);
                setEntriesPerPage(response.data.entries_per_page);
            })
            .catch(e => {
                console.log(e);
            });
    }, [currentPage]);

    const retrieveNextPage = useCallback(() => {
            retrieveEats();
    }, [retrieveEats]);

    const pageCount = (data) => {
        const num = data.length%entriesPerPage;
        let page = 0;
        if (num === 0) {
            page = data.length/entriesPerPage;
        } else {
            page = Math.round(data.length/entriesPerPage) + 1
        }
        return page
    }

    const handleFilterChangeName = (event) => {
        setFilterName(event.target.value);
    }

    const handleFilterChangeAddress = (event) => {
        setFilterAddress(event.target.value);
    }

    const filteredNames = eats.filter(
        (eat) => eat.name.toLowerCase().includes(filterName.toLowerCase())
    ) 

    const filteredAddresses = eats.filter(
        (eat) => eat.address.toLowerCase().includes(filterAddress.toLowerCase())
    )

    const filteredItems = filteredNames.filter((value) => filteredAddresses.includes(value));

    const getReview = useCallback(() => {
        eats.map((eat) => {
            EatDataService.getEat(eat._id)
            .then((res) => {
                eat.numreview = res.data.reviews.length
            })
            .catch((error) => {
                console.log(error)
            })
            return eat.numreview
        })    
    }, [eats]);

    useEffect(() => {
        getReview();
    }, [getReview]);

    const handleSortChange = (event) => {
        const sortDirection = event.target.value;
        const sorted = [...eats];

        if (sortDirection === "0") {
            sorted.sort((a, b) => {
                return a.name > b.name ? 1 : -1
            })
        } else if (sortDirection === "1") {
            sorted.sort((a, b) => {
                return a.name > b.name ? -1 : 1
            })
        } else if (sortDirection === "2") {
            sorted.sort((a, b) => {
                return (a.numreview - b.numreview) === 0 ? (a.name > b.name ? 1 : -1) : (a.numreview - b.numreview)
            })
        } else if (sortDirection === "3") {
            sorted.sort((a, b) => {
                return (a.numreview - b.numreview) === 0 ? (a.name > b.name ? 1 : -1) : (b.numreview - a.numreview)
            })
        }

        setEats(sorted)
    }

    // Use effect to carry out side effect funtionality

    useEffect(() => {
        setCurrentPage(0);
    }, []);

    // Retrieve the next page if currentPage value changes
    useEffect(() => {
        retrieveNextPage();
    }, [currentPage, retrieveNextPage]);


    return (
        <div className="App">
            <Container className="main-container">

                    <Form>
                        <Row className="searchGroupEat">
                            <Col>
                                <Form.Group className="mb-3">
                                    <input
                                        id="filter"
                                        type="text"
                                        placeholder="Search by name"
                                        value={filterName}
                                        onChange={handleFilterChangeName}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>                            
                                <Form.Group className="mb-3">
                                    <input
                                        id="filter"
                                        type="text"
                                        placeholder="Search by address"
                                        value={filterAddress}
                                        onChange={handleFilterChangeAddress}
                                    />
                                </Form.Group>  
                            </Col>
                            <Col>                   
                                <Form.Group className="mb-3">
                                <select defaultValue= {"none"} onChange={handleSortChange}>
                                        <option value={"none"}>Sort By</option>
                                        <option value={0}>A-Z</option>
                                        <option value={1}>Z-A</option>
                                        <option value={2}>Review count ASC</option>
                                        <option value={3}>Review count DESC</option>
                                    </select>
                                </Form.Group>                       
                            </Col>
                        </Row>
                    </Form>

                    <Row className="eatRow row-cols-1 row-cols-md-2 g-4">
                        { filteredItems.length === 0? <span>No result found</span> : filteredItems.map((filteredItem) => {
                            return(
                                <Col key={filteredItem._id}>
                                    <CardGroup className="eatsGroupList">
                                        <Card className="eatsListCard border-0 shadow">
                                            <Card.Header className="text-center">
                                                <Link to={"/eats/"+filteredItem._id} rel="noreferrer" target="_blank">
                                                    <Card.Title>{filteredItem.name}</Card.Title>
                                                </Link>
                                                <Card.Subtitle>{filteredItem.address}</Card.Subtitle>
                                            </Card.Header>
                                            <Card.Img
                                                className="smallPosterEat"
                                                src={filteredItem.poster[0]}
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null;
                                                    currentTarget.src = "/images/head_light.png"}} 
                                            />
                                            <Card.Body>
                                                <Card.Text>
                                                        {filteredItem.description}

                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-center">
                                            <div className="btn-wrapper text-center d-flex justify-content-between">
                                                    <Link to={"/eats/"+filteredItem._id} className="btn btn-warning  btnbtn-sm text-white d-flex align-items-center" rel="noreferrer" target="_blank">
                                                        Learn More
                                                    </Link>
                                                    <Link to={filteredItem.web} target="_blank" className="btn btn-secondary">
                                                        Website
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>                            
                                    </CardGroup>
                                </Col>
                            )
                        })}
                    </Row>
                    <br />
                    <Row className="pageNavEat">
                        <Col>
                            <Button
                            onClick={() => { currentPage === 0 ? alert("First page"):setCurrentPage(currentPage - 1)} }
                            >
                            Previous
                            </Button>                   
                        </Col>
                        <Col>
                            { currentPage + 1 }
                        </Col>
                        <Col>
                            <Button
                                onClick={() => { currentPage + 1 >= pageCount(eats) ? alert("Last page"):setCurrentPage(currentPage + 1)} }
                                >
                                Next
                            </Button>
                        </Col>
                    </Row>

            </Container>
        </div>
    )
}


export default EatList;