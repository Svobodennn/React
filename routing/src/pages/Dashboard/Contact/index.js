import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, useFormik, validateYupSchema } from 'formik';
import validation from './validation'

function Contact() {

  const {handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise ((r)=> setTimeout(r,1000))
      console.log(values)

      if(values.email === 'test@test.com'){
        return bag.setErrors({
          email: 'Bu email adresi zaten kullanılıyor', 
          message: 'Lütfen geçersiz karakterler kullanmayınız'})
      }

      bag.resetForm() //submitten sonra formu temizler
    },

    validationSchema: validation // validation işlemi

  });

  return (
    <div>
      <h2>Contact</h2>

      {/* <Formik //useFormik kullandık
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          message: ""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      > */}

      {


        <form onSubmit={handleSubmit}>
          <div>

            <label htmlFor="firstName">First Name</label>
            <input 
            id="firstName" 
            name="firstName" 
            placeholder="Jane" 
            onChange={handleChange('firstName')} 
            value={values.firstName} 
            disabled={isSubmitting}
            onBlur={handleBlur('firstName')}
            />
            {errors.firstName && touched.firstName &&<div>{errors.firstName}</div>}
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input 
            id="lastName" 
            name="lastName" 
            placeholder="Doe" 
            onChange={handleChange('lastName')} 
            value={values.lastName} 
            disabled={isSubmitting}
            onBlur={handleBlur('lastName')}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              disabled={isSubmitting}
              onChange={handleChange('email')} value={values.email}
              onBlur={handleBlur('email')}
            />
            {errors.email && touched.email &&<div>{errors.email}</div>}
          </div>

          <div>
            <textarea 
            name="message" 
            id="message" 
            placeholder='Mesajınız...' 
            onChange={handleChange("message")} 
            value={values.message} 
            disabled={isSubmitting}
            onBlur={handleBlur('message')}
            ></textarea>
            <button disabled={isSubmitting} type="submit">Submit</button>

          </div>
        </form>

      }
      {/* { //böyle de olur | useFormik kullandık
          ({ handleSubmit, handleChange }) => (

            <form onSubmit={handleSubmit}>
              <div>

              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" placeholder="Jane" onChange={(e)=>handleChange('firstName')}/>
              </div>

              <div>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" placeholder="Doe" onChange={(e)=>handleChange('lastName')} />
              </div>
              
              <div>
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                onChange={(e)=>handleChange('email')}
                />
              </div>

              <div>
              <textarea name="message" id="message" placeholder='Mesajınız...' onChange={handleChange("message")}></textarea>
              <button type="submit">Submit</button>

              </div>
            </form>
          )
        } */}

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
      {/* </Formik> */}
    </div>
  )
}

export default Contact
