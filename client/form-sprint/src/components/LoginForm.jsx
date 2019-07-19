import React from 'react';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function LoginForm({errors, touched}) {

    return(
        <Form>
            <Field 
                type='text'
                name='username'
                placeholder='Enter Username'
            />
            <p>{touched.username && errors.username}</p>
            <Field 
                type='password'
                name='password'
                placeholder='Enter Password'
            />
            <p>{touched.password && errors.password}</p>
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

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(3)
            .required(),
        password: Yup.string()
            .max(9)
            .required(),
    }),

    handleSubmit: (values, formikBag) => {
        console.log(values);
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => {console.log(err)})
    }
})(LoginForm)

export default FormikLoginForm