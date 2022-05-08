import React from 'react';
import PropTypes from 'prop-types';
import { useFetchContactsQuery } from 'redux/Contacts/ContactsSlice';

import ContactListItem from '../contactItem/contactItem';

function ContactList({ contList, deleteCont }) {
	const { data: contacts } = useFetchContactsQuery();

	if (contacts) {
		return contacts.map(contact => {
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
