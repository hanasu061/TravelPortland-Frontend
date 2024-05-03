import React from "react";
import "./Submit.css";
import Card from 'react-bootstrap/Card';



const Submit = props => {

    return (
        <div className="App">
            <Card className="submitCard shadow-lg">
                    <Card.Body className="message mt-3 mb-3">
                        Thank you for reaching out to us!    
                    </Card.Body>             

            </Card>                
        </div>
    )
}

export default Submit;