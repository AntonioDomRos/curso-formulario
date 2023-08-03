import { withAuthenticator } from '@aws-amplify/ui-react';
import { LineWobble } from '@uiball/loaders';
import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';

function Login() {
	const [session, setsession] = useState(false);

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		async function getData() {
			Auth.currentAuthenticatedUser().then((user) => console.log(user));
			await delay(1000);
			setsession(true);
		}
		getData();
	}, []);

	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: '100vh' }}
		>
			<div className="line-wobble">
				<LineWobble size={100} lineWeight={5} speed={1.75} color="black" />
				Loading
			</div>
			<div>{session && <Navigate to={'/inicio'} />}</div>
		</div>
	);
}

export default withAuthenticator(Login);
