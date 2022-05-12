import Section from 'components/section/section';
import ContactForm from 'components/contactForm/contactForm';
import ContactList from 'components/contactList/contactList';
import { List } from 'ViewPages/contactsPage/contactsPage.styled';
import Filter from 'components/filter/filter';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/Contacts/ContactsSlice';

function ContactsPage() {
	const [filterValue, setfilterValue] = useState('');

	const { data: contacts, error } = useFetchContactsQuery([]);

	const normalizeFilter = filterValue.toLowerCase();
	const filterCurrentName = contacts?.filter(contact =>
		contact.name.toLowerCase().includes(normalizeFilter)
	);

	const onFilter = e => {
		setfilterValue(e.target.value);
	};

	return (
		<>
			<Section title="Phonebook">
				<ContactForm filterContact={filterCurrentName} />
			</Section>
			{contacts?.length === 0 || error ? (
				'No contacts yet'
			) : (
				<Section title="Contacts">
					<Filter filterValue={filterValue} onChange={onFilter} />
					<List>
						<ContactList contList={filterCurrentName} />
					</List>
				</Section>
			)}
			<Toaster />
		</>
	);
}

export default ContactsPage;
