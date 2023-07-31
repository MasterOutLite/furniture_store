import React, {useState} from 'react';
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";

import bf1 from '../../assets/before_after_work/couple-1/remont-kukhni-do-i-posle_5e332793406b5.jpg'
import af1 from '../../assets/before_after_work/couple-1/remont-kukhni-do-i-posle_5e3327a7d120d.jpg'
import bf2 from '../../assets/before_after_work/couple-2/remont-kukhni-do-i-posle_5e332c9bc241f.jpg'
import af2 from '../../assets/before_after_work/couple-2/remont-kukhni-do-i-posle_5e332ca93caa2.jpg'
import bf3 from '../../assets/before_after_work/couple-3/remont-kukhni-do-i-posle_5e3345fb53e81.jpg'
import af3 from '../../assets/before_after_work/couple-3/remont-kukhni-do-i-posle_5e33460e60e45.jpg'
import bf4 from '../../assets/before_after_work/couple-4/remont-kukhni-do-i-posle_5e3326e5aab15.jpg'
import af4 from '../../assets/before_after_work/couple-4/remont-kukhni-do-i-posle_5e3326fd679aa.jpg'

function ImageCompare() {
    const [works] = useState([
        {before: bf1, after: af1,}, {before: bf2, after: af2,},
        {before: bf3, after: af3,}, {before: bf4, after: af4,},
    ])

    const [alt] = useState({
        ua: {
            before: 'Кухня до ремонту',
            after: 'Кухня після ремонту',
        }
    })

    return (
        <Container fluid={'xxl'}>
            <Row xs={1} md={2}>
                {works.map((value, index) => (
                    <div key={index} className={'py-2'}>
                        <ReactCompareSlider
                            boundsPadding={40}
                            itemOne={<ReactCompareSliderImage src={value.before} srcSet={value.before}
                                                              alt={alt['ua'].before}/>}
                            itemTwo={<ReactCompareSliderImage src={value.after} srcSet={value.after}
                                                              alt={alt['ua'].after}/>}
                        />
                    </div>
                ))}

            </Row>
        </Container>
    );
}

export default ImageCompare;