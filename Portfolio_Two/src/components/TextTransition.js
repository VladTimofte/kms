import React from "react";
import TextTransition from "react-text-transition";
import classes from './TextTransition.module.css'

const TEXTS = [
	"Freelancing",
	"Web Development",
];

const TextTransitionEffect = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() =>
			setIndex(index => index + 1),
			3000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<h1 className={classes.textTransitionStyled}>
			<TextTransition 
				text={TEXTS[index % TEXTS.length]}
			/>
		</h1>
	);
};

export default TextTransitionEffect