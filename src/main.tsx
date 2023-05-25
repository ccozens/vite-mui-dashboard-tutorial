import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';
import Hosting from './pages/Hosting/Hosting';
import Functions from './pages/Functions/Functions';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import { ThemeProvider } from '@emotion/react';
import { dashboardTheme } from './dashboardTheme.ts';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(
	<React.StrictMode>
		<ThemeProvider theme={dashboardTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route
							path="/authentication"
							element={<Authentication />}
						/>
						<Route path="/database" element={<Database />} />
						<Route path="/storage" element={<Storage />} />
						<Route path="/hosting" element={<Hosting />} />
						<Route path="/functions" element={<Functions />} />
						<Route
							path="/machine-learning"
							element={<MachineLearning />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
