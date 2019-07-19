import React from 'react';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function LoginForm() {
    return(
        <Form>
            <Field 
                type='text'
                name='username'
                placeholder='Enter Username'
            />
            <Field 
                type='password'
                name='password'
                placeholder='Enter Password'
            />
            <button type='submit' >Submit!</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({

    mapPropsToValues() {
        return {
            username: '',
            password: ''
        }
    },

    handleSubmit: (values, formikBag) => {
        console.log(values);
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {console.log(res.data)})
            .catch(err => {console.log(err)})
    }
})(LoginForm)

export default FormikLoginForm