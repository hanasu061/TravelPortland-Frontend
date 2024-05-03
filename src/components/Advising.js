import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Advising.css"
import Card from 'react-bootstrap/Card';
import emailjs from "@emailjs/browser";

function Advising() {
    
    const form = useRef()

    const navigate = useNavigate();
    const [inputName, setInputName] =useState("");
    const [inputEmail, setInputEmail] =useState("");
    const [inputNumber, setInputNumber] =useState("");
    const [inputAttraction, setInputAttraction] =useState("");
    const [inputAddress, setInputAddress] =useState("");
    const [inputDescription, setInputDescription] =useState("");

    const handleNameChange = (event) => {
        setInputName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setInputEmail(event.target.value);
    }

    const handleNumberChange = (event) => {
        setInputNumber(event.target.value);
    }

    const handleAttractionChange = (event) => {
        setInputAttraction(event.target.value);
    }

    const handleAddressChange =(event) => {
        setInputAddress(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setInputDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputName.trim() === "") {
            toast.warning("Empty name");
            return;
        } else if (inputEmail.trim() === "") {
            toast.warning("Empty email address");
            return;
        } else if (inputNumber.trim() === "") {
            toast.warning("Empty phone number");
            return;
        } else if (inputAttraction.trim() === "") {
            toast.warning("Empty attraction");
            return;
        } else if (inputAddress.trim() === "") {
            toast.warning("Empty address");
            return;
        } else if (inputDescription.trim() === "") {
            toast.warning("Empty description");
            return;
        }
        emailjs.sendForm('service_l7fyhif', 'template_lxt1ibr', form.current, '-iNHdq1kfyn9u2xmr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        navigate('/submit');
    }
    
    return (

        <><ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light' />
            <div className='advisingCard'>
            <Card className="cardAdvising card-body text-center shadow-lg">
                <Form ref={form} className='Advising' onSubmit={handleSubmit}>

                    <Form.Text className="text-muted">
                        <strong>Please let us know if you have any sugguested attraction/restaurant.</strong>
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <br></br>
                        <input className="advisingInput" name="user_name" type="name" placeholder="First Last" value={inputName} onChange={handleNameChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <br></br>
                        <input className="advisingInput" name="user_email" type="email" placeholder="name@example.com" value={inputEmail} onChange={handleEmailChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone number</Form.Label>
                        <br></br>
                        <input className="advisingInput" name="user_phone" type="phone number" placeholder="### ### ####" value={inputNumber} onChange={handleNumberChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAttraction">
                        <Form.Label>Name of attraction/restaurant</Form.Label>
                        <br></br>
                        <input className="advisingInput" name="info" type="name of attraction" placeholder="Name" value={inputAttraction} onChange={handleAttractionChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <br></br>
                        <input className="advisingInput" name="infoAddress" type="address" placeholder="No., Street, City, ZIP" value={inputAddress} onChange={handleAddressChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <br></br>
                        <textarea className="advisingInput" name="infoDescription" type="description" rows="3" placeholder="Please tell us more" value={inputDescription} onChange={handleDescriptionChange}></textarea>
                    </Form.Group>

                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.<br></br>
                    </Form.Text>

                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
            </div>
        </>
  );
}

export default Advising;