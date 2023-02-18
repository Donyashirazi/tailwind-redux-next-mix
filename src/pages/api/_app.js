'use client';
import React from 'react';
import { Provider } from 'react-redux/es/exports';
import { Store } from '../../redux';

export default function App({ Component, pageProps }) {
	return (
		<Provider Store={Store}>
			<Component {...pageProps} />
		</Provider>
	);
}
