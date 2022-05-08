import Section from './section/section';
import ContactForm from './contactForm/contactForm';
import ContactList from './contactList/contactList';
import { List } from './App.styled';
import Filter from './filter/filter';
import shortid from 'shortid';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AddItem, RemoveItem, FilterList } from 'redux/store';
import { useFetchContactsQuery } from 'redux/Contacts/ContactsSlice';

import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const contactValue = useSelector(state => state.contacts.items);

	const [filterValue, setfilterValue] = useState('');

	const { data: contacts } = useFetchContactsQuery();

	const normalizeFilter = filterValue.toLowerCase();
	const filterCurrentName = contacts?.filter(contact =>
		contact.name.toLowerCase().includes(normalizeFilter)
	);

	function addContactItem(name, number) {
		const contact = {
			id: shortid.generate(),
			name,
			number,
		};
		dispatch(AddItem(contact));
	}

	const onFilter = e => {
		setfilterValue(e.target.value);
	};

	const deleteContacts = id => {
		dispatch(RemoveItem(id));
	};

	return (
		<>
			<Section title="Phonebook">
				<ContactForm
					onAdd={addContactItem}
					filterContact={filterCurrentName}
				/>
			</Section>
			{contactValue.length === 0 ? (
				'No contacts yet'
			) : (
				<Section title="Contacts">
					<Filter filterValue={filterValue} onChange={onFilter} />
					<List>
						<ContactList
							contList={filterCurrentName}
							deleteCont={deleteContacts}
						/>
					</List>
				</Section>
			)}
			<Toaster />
		</>
	);
}

export default App;
