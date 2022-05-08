import React from 'react';
import { FilterLabel, FilterInput } from './filter.styled';
import PropTypes from 'prop-types';

function Filter({ filterValue, onChange }) {
	return (
		<FilterLabel htmlFor="filter">
			Find name
			<FilterInput
				type="text"
				name="filter"
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
