import '@aws-amplify/ui-react/styles.css';
import { Amplify, AuthModeStrategyType } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import awsExports from './aws-exports';
import './index.css';
Amplify.configure(awsExports);
Amplify.configure({
	...awsExports,
	DataStore: {
		authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
