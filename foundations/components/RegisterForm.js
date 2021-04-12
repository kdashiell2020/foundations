import React, { Component, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = ({ orgUrl }) => {
  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState({
    full_name: '',
    email: '',
    password: '',
    // confirmPassword: '',
    phone: '',
    organization: orgUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitFormData = async () => {
    console.log('Yay.....');

    const result = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  };

  return (
    <form onSubmit={handleSubmit(submitFormData)}>
      <div>
        <input
          name="full_name"
          ref={register({ required: 'MUST ENTER A FULL NAME.' })}
          type="text"
          placeholder="Please enter your full name."
          id="fullName"
          onChange={handleChange}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <input
          name="email"
          ref={register({ required: 'EMAIL IS REQUIRED.' })}
          type="email"
          placeholder="Please provide an email."
          id="email"
          onChange={handleChange}
        />{' '}
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input
          name="password"
          ref={register({
            required: 'PASSWORD REQUIRED AND MUST 8 CHARACTERS.',
            maxLength: 8,
            minLength: 8,
          })}
          type="password"
          placeholder="Please create a password."
          id="password"
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <input
          name="confirmPassword"
          ref={register({ required: true, maxLength: 8, minLength: 8 })}
          type="password"
          placeholder="Confirm your new password."
          id="confirmPassword"
          // onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <input
          name="phone"
          ref={register({ required: 'PHONE NUMBER IS REQUIRED.' })}
          type="text"
          placeholder="Please provide your cell phone number."
          id="phone"
          onChange={handleChange}
        />
        {errors.phoneNum && <p>{errors.phoneNum.message}</p>}
      </div>

      <div>
        <input
          name="organization"
          ref={register({
            required: 'PLEASE NAME THE ORGANIZATION YOU ARE APART OF.',
          })}
          type="text"
          placeholder="Name of Organization."
          id="organization"
          onChange={handleChange}
          value={orgUrl}
          disabled={orgUrl != undefined}
        />
        {errors.organization && <p>{errors.organization.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
