import { Button } from '../../styles/button/LightButtonStyle';

const LightButton = ({
	text,
	onClick,
	isDisabled = false,
	...props
}: {
	text: string;
	onClick: () => void;
	isDisabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<Button {...props} onClick={onClick} disabled={isDisabled}>
			{text}
		</Button>
	);
};

export default LightButton;
