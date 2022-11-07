import Head from 'next/head';
import Image from 'next/image';
import Quill from '../component/Quill';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Quill />
    </div>
  );
}
