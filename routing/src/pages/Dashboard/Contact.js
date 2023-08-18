import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

function Contact() {
  return (
    <div>
      <h2>Contact</h2>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >

        { //böyle de olur
          ({ handleSubmit, handleChange }) => (

            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" placeholder="Jane" onChange={(e)=>handleChange('firstName')}/>

              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" placeholder="Doe" onChange={(e)=>handleChange('lastName')} />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                onChange={(e)=>handleChange('email')}
              />
              <button type="submit">Submit</button>
            </form>
          )
        }
        {/* <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form> */}
      </Formik>
    </div>
  )
}

export default Contact
