import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './index.module.css'

interface CardProps {
    title: string,
    description: string,
    imgSrc: string,
}


const Card = ({ title, description, imgSrc }: CardProps) => {
    return (
    <Row className={styles.CardBody}>
        <Col md={3} className={styles.CardImageDiv}>
            <img className={styles.CardImage} src={imgSrc} alt="card image" />
        </Col>

        <Col md={9}>
            <div className={styles.CardInfo}>
                <div className={styles.CardTitle}>
                    {title}
                </div>
                <div className={styles.CardDescription}>
                    {description}
                </div>
            </div>
        </Col>    
    </Row>
    )
}

export default Card;
