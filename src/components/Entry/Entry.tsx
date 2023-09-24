import React, {ReactNode} from 'react';
import Container from "react-bootstrap/Container";
import imgs from "src/assets/45647.jpg";
import clsx from "clsx";
import styles from "./Entry.module.scss";

export interface EntryProps {
    img?: string;
    title?: string
    children?: ReactNode;
}

function Entry({children,title, img}: EntryProps) {
    return (
        <Container fluid style={{backgroundImage: `url(${img || imgs})`, }}
                   className={clsx(styles.root, 'text-center', 'text-white')}>
            <div className={styles.font}>
            </div>
            <div className={styles.container}>
                <div className={clsx('title', 'fw-semibold')}>{title}</div>
                {children}
            </div>
        </Container>
    );
}

export default Entry;
