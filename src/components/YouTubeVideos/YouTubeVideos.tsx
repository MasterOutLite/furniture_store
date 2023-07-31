import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import styles from './YouTubeVideos.module.scss'

function YouTubeVideos() {

    const [links] = useState<string[]>(
        [
            "https://www.youtube.com/embed/z1ijS7aK_64",
            'https://www.youtube.com/embed/F4Ht041LRqg',
            'https://www.youtube.com/embed/lJn5qljtZE4',
            'https://www.youtube.com/embed/gLYZupfTuzg'
        ]
    )

    return (
        <Container>
            <Row xs={1} md={2}>
                {
                    links.map((value, index) => (
                        <div key={index} className={styles.video}>
                            <iframe height='100%' width='100%' src={value}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    ))
                }
            </Row>
        </Container>
    );
}

export default YouTubeVideos;