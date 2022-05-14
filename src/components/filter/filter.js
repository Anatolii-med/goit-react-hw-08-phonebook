import React from 'react';
import { FilterLabel, FilterInput, Text } from './filter.styled';
import PropTypes from 'prop-types';

function Filter({ filterValue, onChange }) {
	return (
		<FilterLabel htmlFor="filter">
			<Text>Find name</Text>
			<FilterInput
				type="text"
				name="filter"
				placeholder="Search contact"
				onChange={onChange}
				value={filterValue}
			></FilterInput>
		</FilterLabel>
	);
}

export default Filter;

Filter.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
};
