import React, {useState} from 'react';
import styles from './Advantages.module.scss'
import Container from "react-bootstrap/Container";

import img1 from '../../assets/advantages/1.png'
import img2 from '../../assets/advantages/2.png'
import img3 from '../../assets/advantages/3.png'
import img4 from '../../assets/advantages/4.png'
import clsx from "clsx";

function Advantages() {
    const [advantages] = useState([
        {
            img: img1,
            title: 'Власне виробництво',
            description: 'Виготовляємо меблі на сучасному німецькому обладнанні, що дозволяє дати хорошу ціну та гарантувати надійність на довгі роки.'
        }, {
            img: img2,
            title: 'Понад 3000 унікальних проектів',
            description: 'Кожен проект, який ми створюємо, з будь-якої категорії меблів унікальний і неповторний.'
        }, {
            img: img3,
            title: 'Гарантія 12 місяців',
            description: 'Ми забезпечуємо безкоштовний сервіс згідно з умовами договору на весь гарантійний термін.'
        }, {
            img: img4,
            title: 'Талановиті дизайнери',
            description: 'Досвід роботи кожного з них понад 5 років та сотні успішно реалізованих проектів.'
        },
    ])


    return (
        <Container fluid={"xxl"}>
            <div className={clsx('py-5', styles.root)}>
                <h3 className={styles.title}>Наші ключові переваги</h3>
                <div className={styles.advantagesContainer}>
                    {
                        advantages.map(value => (
                            <div className={styles.advantagesItem} key={value.title}>
                                <div>
                                    <img className={styles.advantagesImg} src={value.img} alt={'d'}/>
                                </div>
                                <h5>{value.title}</h5>
                                <span>
                                    {value.description}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}

export default Advantages;