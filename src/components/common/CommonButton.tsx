import Button from '@mui/material/Button';

import React from 'react';

interface CommonButtonProps {
	children?: React.ReactNode;
	color?:
		| 'inherit'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
		| undefined;
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large' | undefined;
	sx?: object;
	variant?: 'text' | 'outlined' | 'contained' | undefined;
}

const CommonButton = ({
	children,
	color,
	disabled,
	size,
	sx,
	variant,
}: CommonButtonProps) => {
	return (
		<Button
			color={color}
			disabled={disabled}
			size={size}
			sx={sx}
			variant={variant}>
			{children}
		</Button>
	);
};

export default CommonButton;
