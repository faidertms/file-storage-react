import React from 'react';
import Head from 'next/head';
import styles from './style.module.css';

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Head>
                <title>My Files</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <div className={styles.logo}>
                    <span>TStorage</span>
                </div>
            </nav>
        </header>
    );
}
