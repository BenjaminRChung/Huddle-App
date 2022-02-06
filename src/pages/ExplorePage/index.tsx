import React, { useState } from 'react';
import Card from './Card';
import { Container, Form } from 'react-bootstrap';
import styles from './index.module.css'

const data = [
    {
        "id": 1,
        "description": "A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package.",
        "title": "Atom",
        "imgSrc": "atom.svg"
    },
    {
        "id": 2,
        "description": "A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package.",
        "title": "Apache",
        "imgSrc": "apache.svg"
    }
];

let projectCards = data.map((project, i) => {
    return  (
        <div className={styles.ExploreCard}>
            <Card
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
            />
        </div>
    )
});

const ExplorePage = () => {
    const [val, setVal] = useState("");

    const handleChange = (e: any) => {
        setVal(e.target.value)
    }

    return (
        <Container>
            <h1 className={styles.ExploreHeader}>Explore</h1>
            <Form className={styles.SearchBar}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Projects" />
                </Form.Group>
            </Form>
            { projectCards }
        </Container>
    );
}

export default ExplorePage;
