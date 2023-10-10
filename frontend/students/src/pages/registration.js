import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import '../Css/StudentRegistrationForm.css';
import bannerImage from '../images/atbanner.png';
import Logo from '../images/logo.png';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    middlename:'',
    GRNO:'',
    DOB:'',
    city:'',
    remark:'',
    mobile: '',
    AdmissionDate: null, 
    schoolleavingDate: null, 
    address1: '',
    address2: '',
    Ephone:'',
   
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/StudentSubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Registration successful');
        setRegistrationStatus('Registration successful');
        // Reset the form
        setFormData({
          name: '',
          lastname: '',
          middlename:'',
          GRNO:'',
          DOB:'',
          city:'',
          remark:'',
          mobile: '',
          AdmissionDate: null,
          schoolleavingDate: null,
          address1: '',
          address2: '',
          Ephone:'',
        
        });
      } else {
        console.error('Registration failed');
        setRegistrationStatus('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setRegistrationStatus('An error occurred during registration');
    }
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="blue-background-container">
    <div className="container">
      <div className="form-content">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="college-address">
          College Address: Pune Eon IT park
        </div>

        <form onSubmit={handleSubmit}>
          <div className="section-label">Basic Information</div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
            </div>
             <div className="form-group">
             <label htmlFor="middle-name">Middle Name</label>
            <input
              type="text"
              id="middle-name"
              name="middlename"
              value={formData.middlename}
              onChange={(e) => handleChange('middlename', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Last-name">Last Name</label>
            <input
              type="text"
              id="Last-name"
              name="lastname"
              value={formData.lastname}
              onChange={(e) => handleChange('lastname', e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="DOB">Date of Birth</label>
            <DatePicker
              id="DOB"
              name="DOB"
              selected={formData.DOB}
              onChange={(date) => handleChange('DOB', date)}
              dateFormat="yyyy-MM-dd" // Adjust the date format as needed
            />
          </div>
          <div className="form-group">
            <label htmlFor="GRNO">GR Number</label>
            <input
              type="text"
              id="GRNO"
              name="GRNO"
              value={formData.GRNO}
              onChange={(e) => handleChange('GRNO', e.target.value)}
              required
            />
            </div>
          <div className="form-group">
            <label htmlFor="remark">Remark</label>
            <input
              type="text"
              id="remark"
              name="remark"
              value={formData.remark}
              onChange={(e) => handleChange('remark', e.target.value)}
              required
            />
          </div>

          <div className="section1-label">Contact Information</div>

          <div className="form-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              id="phone-number"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => handleChange('mobile', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Ephone">Emergency Phone Number</label>
            <input
              type="tel"
              id="Ephone"
              name="Ephone"
              value={formData.Ephone}
              onChange={(e) => handleChange('Ephone', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="admission-date">Admission Date</label>
            <DatePicker
              id="admission-date"
              name="AdmissionDate"
              selected={formData.AdmissionDate}
              onChange={(date) => handleChange('AdmissionDate', date)}
              dateFormat="yyyy-MM-dd" // Adjust the date format as needed
            />
          </div>
          <div className="form-group">
            <label htmlFor="school-leaving-date">School Leaving Date</label>
            <DatePicker
              id="school-leaving-date"
              name="schoolleavingDate"
              selected={formData.schoolleavingDate}
              onChange={(date) => handleChange('schoolleavingDate', date)}
              dateFormat="yyyy-MM-dd" // Adjust the date format as needed
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">city</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address1">Address1</label>
            <textarea
              id="address1"
              name="address1"
              rows="4"
              value={formData.address1}
              onChange={(e) => handleChange('address1', e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="address2">Address2</label>
            <textarea
              id="address2"
              name="address2"
              rows="4"
              value={formData.address2}
              onChange={(e) => handleChange('address2', e.target.value)}
              required
            ></textarea>
          </div>
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </form>
        {registrationStatus && (
          <div className="registration-status">{registrationStatus}</div>
        )}
      </div>
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
    </div>
  );
};

export default StudentRegistrationForm;
