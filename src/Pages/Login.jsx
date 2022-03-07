import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Row
} from 'reactstrap';
import { useFormik } from 'formik';

//Image
import loginImg from '../Assets/Images/login.jpg';
//set User Auth
import { setUserId } from '../Utils/Comman';

//Form Validations 
const validate = values => {
    const errors = {};

    if (!values.userName) {
        errors.userName = 'Please choose a unique and valid username.';
    }
    else if (!/^[a-zA-Z0-9]+$/.test(values.userName)) {
        errors.userName = 'Only alphabets are allowed for this field';
    }

    if (!values.password) {
        errors.password = 'Required';
    }
    else if (values.password.length > 8) {
        errors.password = 'Must be 8 characters or less';
    }
    else if (/\s/g.test(values.password)) {
        errors.password = 'Whitespace not allowed';
    }


    return errors;
};

const Login = (props) => {


    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            // confirmation: false,
        },
        validate,
        onSubmit: values => {
            setUserId(true);
            props.history.push("/");

        },
    });

    return (
        <>
            <div className='position-absolute top-50 start-50 translate-middle'>
                <Card
                    body

                >
                    <Row>
                        <Col sm="5">
                            <CardImg
                                src={loginImg}
                                alt="login image"
                                width="400px"
                                height="300px"
                            />
                        </Col>
                        <Col sm="5">

                            <CardTitle tag="h5" className="text-center" >
                                Sig In
                            </CardTitle>
                            <CardBody>
                                <Form noValidate onSubmit={formik.handleSubmit} >
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            User Name
                                        </Label>
                                        <Input
                                            id="userName"
                                            name="userName"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.userName}
                                            valid={!formik.errors.userName && formik.values.userName}
                                            invalid={formik.errors.userName}
                                        />
                                        <FormFeedback valid >Looks good!</FormFeedback>
                                        <FormFeedback  >{formik.errors.userName}</FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Password">
                                            Password
                                        </Label>
                                        <Input
                                            id="Password"
                                            name="password"
                                            type="password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                            valid={!formik.errors.password && formik.values.password}
                                            invalid={formik.errors.password}
                                        />
                                        <FormFeedback valid >Looks good!</FormFeedback>
                                        <FormFeedback  >{formik.errors.password}</FormFeedback>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        {' '}
                                        <Label check>
                                            remember me
                                        </Label>
                                    </FormGroup>
                                    <Button color='primary' type='submit' >
                                        Submit
                                    </Button>
                                </Form>
                            </CardBody>

                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    )
}

export default Login
