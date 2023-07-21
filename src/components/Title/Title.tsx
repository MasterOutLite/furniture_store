import React from 'react';
import styles from "./Title.module.scss";
import clsx from "clsx";

export interface TitleProps {
    title: string;
    cssClass?: string;
}

function Title({title, cssClass}: TitleProps) {
    return (
        <h2 className={clsx(styles.title, cssClass)}>{title}</h2>
    );
}

export default Title;