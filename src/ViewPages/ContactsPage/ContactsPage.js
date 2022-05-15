import Section from 'components/section/section';
import ContactForm from 'components/contactForm/contactForm';
import ContactList from 'components/contactList/contactList';
import { List, Wrap, Text } from 'ViewPages/ContactsPage/ContactsPage.styled';
import Filter from 'components/filter/filter';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/Contacts/ContactsSlice';

export function ContactsPage() {
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
		<Wrap>
			<Section title="Phonebook">
				<ContactForm filterContact={filterCurrentName} />
			</Section>
			{contacts?.length === 0 || error ? (
				<Text>No contacts yet</Text>
			) : (
				<Section title="Contacts">
					<Filter filterValue={filterValue} onChange={onFilter} />
					<List>
						<ContactList contList={filterCurrentName} />
					</List>
				</Section>
			)}
			<Toaster />
		</Wrap>
	);
}
