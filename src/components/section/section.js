import React from 'react';
import { SectionWrap, Title } from './section.styled';
import PropTypes from 'prop-types';

function Section({ title, children }) {
	return (
		<SectionWrap>
			<Title>{title}</Title>
			{children}
		</SectionWrap>
	);
}

export default Section;

Section.propTypes = {
	title: PropTypes.string.isRequired,
};
