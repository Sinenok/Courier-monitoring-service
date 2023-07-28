import React, { FC } from 'react';
import { IHighlightedText } from './types';

const HighlightedText: FC<IHighlightedText> = ({ text }) => {
	return <span className="text-primary">{text}</span>;
};

export default HighlightedText;
