import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PopUp = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(null);
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    quantity: '',
    interests: [],
    gender: ''
  });

  const openHandler = () => {
    setShow(true);
  };

  const closeHandler = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormState((prevState) => ({
        ...prevState,
        interests: checked
          ? [...prevState.interests, value]
          : prevState.interests.filter((interest) => interest !== value)
      }));
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formState);
    setShow(false);
  };

  return (
    <div className="container">
      <Button variant="primary" className="button" onClick={openHandler}>
        Register
      </Button>
      <Modal show={show} onHide={closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Username"
                name="username"
                value={formState.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your Age"
                name="age"
                value={formState.age}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter a number from 1 and 5"
                name="quantity"
                value={formState.quantity}
                onChange={handleChange}
                min="1"
                max="5"
                required
              />
            </Form.Group>
            <Form.Label>Interests</Form.Label>
            <Form.Group className="mb-4">
              <Form.Check
                inline
                type="checkbox"
                label="Gaming"
                value="Gaming"
                onChange={handleChange}
              />
              <Form.Check
                inline
                type="checkbox"
                label="Music"
                value="Music"
                onChange={handleChange}
              />
              <Form.Check
                inline
                type="checkbox"
                label="Traveling"
                value="Traveling"
                onChange={handleChange}
              />
              <Form.Check
                inline
                type="checkbox"
                label="Reading"
                value="Reading"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Group className="mb-4">
              <Form.Check
                inline
                name="gender"
                type="radio"
                label="Male"
                value="Male"
                onChange={handleChange}
                required
              />
              <Form.Check
                inline
                name="gender"
                type="radio"
                label="Female"
                value="Female"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeHandler}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      {formData && (
        <div className="mt-4 p-3 bg-light border rounded">
          <h4>Form Data in JSON</h4>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PopUp;
