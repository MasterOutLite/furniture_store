import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import styles from './YouTubeVideos.module.scss'

function YouTubeVideos() {

    const [links] = useState<string[]>(
        [
            'https://www.youtube.com/embed/Ruxq2bvTOQw?si=89kU09jHnwDitl5S',
            'https://www.youtube.com/embed/m2_lIpVoal8?si=kEfFvYDBWBPGOb5F',
            'https://www.youtube.com/embed/GgPT7ImnP9Y',
            'https://www.youtube.com/embed/ITDmBjYR4GU',
            'https://www.youtube.com/embed/sVdRqR7-jE0?si=qEaaFsoAklU20tDf',
            'https://www.youtube.com/embed/RUxFNuo1HQw',
            'https://www.youtube.com/embed/fu0VepJMydA?si=0hmyXtfuK1H3SS_B',
            'https://www.youtube.com/embed/1nby72Kbo0A?si=lR51J4bp97hziS__',
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
