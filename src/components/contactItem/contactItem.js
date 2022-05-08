import { Elements } from '../contactList/contactList.styled';
import { useDeleteContactMutation } from 'redux/Contacts/ContactsSlice';

function ContactListItem({ id, name, phone }) {
	const [deleteContact, { isLoading: isDeleting }] =
		useDeleteContactMutation();

	return (
		<Elements key={id}>
			{name}:{phone}
			<button onClick={() => deleteContact(id)} disabled={isDeleting}>
				{isDeleting ? 'deleting...' : 'Delete'}
			</button>
		</Elements>
	);
}

export default ContactListItem;
