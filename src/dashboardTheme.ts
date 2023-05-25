import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

export const dashboardTheme = createTheme({
	components: {
		// Name of the component
		MuiButton: {
			// The default props to change
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					fontWeight: 600,
				},
			},
		},
	},
	palette: {
		mode: 'dark',
		primary: {
			main: '#bada55',
		},
	},
    spacing: [4, 8, 12, 16, 20],
});
