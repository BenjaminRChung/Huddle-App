import React, { useState } from 'react';
import styles from './index.module.scss'
import { Button, Form, Row, Col} from 'react-bootstrap';
import * as constants from '../../constants';
import {useForm} from 'react-hook-form';
import validator from 'validator';

interface IFormInputs {
    firstName: string;
    lastName: string;
    email: string;
}

const LandingPage = () => {
    const [active, setActive] = useState(false);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [showEmailErr, setShowEmailErr] = useState<boolean>(false)

    const handleStayTunedBtn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();

        if (!validator.isEmail(email)) {
            console.log('invalid email')
            setShowEmailErr(true);
        }
    }

    const onEmailChange =  (e: React.ChangeEvent<any>) => {
        setShowEmailErr(false)
        setEmail(e.target.value)
    }

    const {
        register,
        handleSubmit
    } = useForm<IFormInputs>();

    const onSubmit = (data: IFormInputs) => {
        alert(JSON.stringify(data));
      };

    const scrollToStayTuned = () => {
      const stayTunedElement:HTMLElement = document.getElementById("stay-tuned-submit")!;
      stayTunedElement.scrollIntoView({
        behavior: "smooth",
      });
    };

    
    return (
        <>
            <Row className={styles.LandingPage}>
                <div className={styles.LeftBlock}>
                    <h1>
                        Welcome to the {constants.COMPANY_NAME} Community!
                    </h1>
                    <h3>
                        A one stop platform for knowledge sharing, collaboration, and code reviews!
                    </h3>
                    <Button className={styles.LandingPageBtn} onClick = {scrollToStayTuned} variant="outline-light" size="lg">Join Our Community</Button> 
                </div>
                <div className={styles.RightBlock}>
                    <img className={styles.LandingImage} src="landing-image.png" alt="card" />
                </div>
                <div className={styles.WaveContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#367BC9" fill-opacity="1" d="M0,224L30,218.7C60,213,120,203,180,170.7C240,139,300,85,360,96C420,107,480,181,540,186.7C600,192,660,128,720,90.7C780,53,840,43,900,42.7C960,43,1020,53,1080,85.3C1140,117,1200,171,1260,208C1320,245,1380,267,1410,277.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                </div>

                <div className={styles.MissionSection}>
                    <h3 id="who-we-are">Who Are We</h3>

                    <Row className={styles.MissionSelectionRow}>
                        <Col md={4}>
                            <h2>Mission</h2>
                            <p>Reviere connects aspiring and experienced developers together to share projects and give feedback.</p>
                        </Col>
                        <Col md={3}>
                            <img src="mission-and-vision.png" alt="This will display an animated GIF" className={styles.MissionVisionImage}/>
                        </Col>
                        <Col md={4}>
                            <h2>Vision</h2>
                            <p>Reviere aims to be the leading platform for developers of all skill levels to share and review code. Like StackOverFlow, we want to create a community that shares ideas and supports one another.</p>
                        </Col>
                    </Row>

                </div>

                <div id ="how-it-works" className={styles.LeftBlockAlt}>
                    <div className={styles.FaqHeader}>
                        <h1>
                            How It Works
                        </h1>
                        <h3>
                            Learn more about our features
                        </h3>
                        <Button onClick = {scrollToStayTuned} variant="outline-dark" size="lg">Come Along!</Button> 
                    </div>
                </div>
                <div className={styles.RightBlockAlt}>
                    <div className={styles.RightBlockAltRow}>
                        <Col>
                            <img className={ styles.FaqIcon } src="signup.png" alt="card" />
                            <h2 className={ styles.FaqSubHeading }>Sign Up</h2>
                            <div>Sign up to personalize your experience and utilize our full suite of features such as messaging, reviewing, and making posts.</div>
                        </Col>
                        <Col>
                        <img className={ styles.FaqIcon } src="explore.png" alt="card" />
                            <h2 className={ styles.FaqSubHeading }>Explore and Post</h2>
                            <div>Search for posts by categories such as trending or technologies. Comment and save posts which are interesting to you! If you have your own project you would like to share, make a post!</div>
                        </Col>
                        <Col>
                        <img className={ styles.FaqIcon } src="review.png" alt="card" />
                            <h2 className={ styles.FaqSubHeading }>Review</h2>
                            <div>Help other developers in the community by providing code reviews on posted projects. If you would like feedback on your own project, enable reviewers on your post!</div>
                        </Col>
                    </div>
                </div>
                <div className={styles.WaveContainerAlt}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#367BC9" fill-opacity="1" d="M0,32L34.3,26.7C68.6,21,137,11,206,53.3C274.3,96,343,192,411,208C480,224,549,160,617,138.7C685.7,117,754,139,823,170.7C891.4,203,960,245,1029,240C1097.1,235,1166,181,1234,165.3C1302.9,149,1371,171,1406,181.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                </div>
                <div id ="stay-tuned-submit" className={styles.StayTuned}>
                    <h1>
                        Stay Tuned
                    </h1>
                    <h3>
                        Sign up to receive updates about the launch and be the first to join the community!
                    </h3>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.StayTunedFields}> 
                            <div className={styles.FirstName}>
                                <label>First Name</label>
                                <input
                                    placeholder="Kotaro"
                                    className={styles.StayTunedInput}
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                 />
                            </div>

                            <div className={styles.LastName}>
                                <label >Last Name</label>
                                <input
                                    placeholder="Sugawara"
                                    className={styles.StayTunedInput}
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </div>

                            <div className={styles.Email}>
                                <label htmlFor="email">Email</label>
                                <input
                                    placeholder="bluebill1049@hotmail.com"
                                    type="email"
                                    className={styles.StayTunedInput}
                                    value={email}
                                    onChange={e => onEmailChange(e)}
                                />
                            </div>
                            <Button type="submit" className={styles.StayTunedButton} onClick={(e) => handleStayTunedBtn(e)}  variant="outline-light">Submit</Button>
                        </div>

                    </Form>
                    {
                        showEmailErr ?
                            <p className={styles.EmailErr}>Your email is invalid</p>
                            :
                            null
                    }
                </div>
            </Row>
        </>
    );
}

export default LandingPage;


