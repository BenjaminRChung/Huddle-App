import React, { useState} from 'react';
import styles from './index.module.css'
import { Container, Form, Button } from 'react-bootstrap';
import validator from 'validator';


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [showEmailErr, setShowEmailErr] = useState<boolean>(false)

    const handleLoginBtn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();

        if (!validator.isEmail(email)) {
            setShowEmailErr(true);
            console.log('invalid email')
        }
    }

    const onEmailChange =  (e: React.ChangeEvent<any>) => {
        setShowEmailErr(false)
        setEmail(e.target.value)
    }

    return (
        <Container className={styles.LoginBox}>
            <span className={styles.LoginTitle}>Huddle Login</span>
            <Form className={styles.LoginForm}>
                <Form.Group controlId="formBasicEmail" className={styles.FormInput}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => onEmailChange(e)}
                        isInvalid={showEmailErr}
                    />
                {
                    showEmailErr ?
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                        </Form.Control.Feedback>
                        :
                        null
                }
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className={styles.FormInput}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className={styles.LoginButtons}>
                    <a href="/signup" className={styles.RegisterLink}>Register</a>
                    <Button
                        href="/explore"
                        onClick={(e) => handleLoginBtn(e)}
                        variant="outline-primary"
                        type="submit"
                        className={styles.SigninBtn}>
                        Sign In
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default LoginPage;

