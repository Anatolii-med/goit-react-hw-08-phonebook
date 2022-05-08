import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from '../contactItem/contactItem';

function ContactList({ contList }) {
	if (contList) {
		return contList.map(contact => {
			return <ContactListItem key={contact.id} {...contact} />;
		});
	}

	return (
		<>
			<p>Loading....</p>
		</>
	);
}

export default ContactList;

ContactList.propTypes = {
	key: PropTypes.string,
	onClick: PropTypes.func,
};
