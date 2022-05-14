import { Elements, Buttons, Text } from '../contactList/contactList.styled';
import { useDeleteContactMutation } from 'redux/Contacts/ContactsSlice';

function ContactListItem({ id, name, number }) {
	const [deleteContact, { isLoading: isDeleting }] =
		useDeleteContactMutation();

	return (
		<Elements key={id}>
			<Text>
				{name} : {number}
			</Text>
			<Buttons onClick={() => deleteContact(id)} disabled={isDeleting}>
				{isDeleting ? 'deleting...' : 'Delete'}
			</Buttons>
		</Elements>
	);
}

export default ContactListItem;
