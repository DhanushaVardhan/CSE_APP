import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Form = ({ show, onClose }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [admissionNo, setAdmissionNo] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          admissionNo,
          email,
          phoneNumber,
        }),
      });
      const data = await response.json();
      console.log(data);
      setSubmitted(true);
      setFormDisabled(true); // Disable the form after submission
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    if (!submitted) {
      onClose();
    }
  };

  return (
    <div className={`login-page ${show ? "show" : ""}`}>
      {!submitted && ( // Render the form only if not submitted
        <div className="login-form">
          <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              disabled={formDisabled} // Disable input field after submission
            />

            <label htmlFor="admissionNo" className="form-label">
              Admission No
            </label>
            <input
              type="text"
              id="admissionNo"
              value={admissionNo}
              onChange={(e) => setAdmissionNo(e.target.value)}
              className="form-input"
              disabled={formDisabled}
            />

            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              disabled={formDisabled}
            />

            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-input"
              disabled={formDisabled}
            />

            <button type="submit" className="form-submit-button" disabled={formDisabled}>
              Submit
            </button>
            <button type="button" onClick={handleClose} className='close' disabled={formDisabled}>Close</button>
          </form>
        </div>
      )}
      {submitted && (
        <div className="success-message">
          <p>Successfully registered!</p>
          <p>Redirecting to home page...</p>
        </div>
      )}
    </div>
  );
};

export default Form;
