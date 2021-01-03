import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ErrorBoundary from './components/errorBoundary';

import './style.scss';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
);

