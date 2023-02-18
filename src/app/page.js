'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Todolist from '@/components/Todolist';
import { Provider } from 'react-redux/es/exports';
import { store } from 'redux';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<Provider store={store}>
			<main className={styles.main}>
				<Todolist />
			</main>
		</Provider>
	);
}
