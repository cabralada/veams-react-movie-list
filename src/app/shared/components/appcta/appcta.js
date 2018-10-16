// Generic libraries

/*
 * type:
	a = link tag
	button = button tag
*/

import React from 'react';

const styleError = {
	background: 'red',
	color: 'white'
};

const Appcta = props => {
	const { goto, target, classes, text, type } = props;

	const configButton = {
		href: goto,
		target: target,
		className: classes
	};

	const WrongType = () => {
		return <span style={styleError}>Wrong type button</span>;
	};

	if (type === 'a' || type === 'button') {
		return <props.type {...configButton}>{text}</props.type>;
	} else {
		return <WrongType />;
	}
};

export default Appcta;
