import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
	reducerPath: 'contactApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://6272700b25fed8fcb5f43b95.mockapi.io',
	}),
	tagTypes: ['Contacts'],
	endpoints: builder => ({
		fetchContacts: builder.query({
			query: () => `/contacts`,
			providesTags: ['Contacts'],
		}),

		deleteContact: builder.mutation({
			query: deleteContactId => ({
				url: `/contacts/${deleteContactId} `,
				method: 'DELETE',
			}),
			invalidatesTags: ['Contacts'],
		}),

		addContactData: builder.mutation({
			query: newContact => ({
				url: `/contacts`,
				method: 'POST',
				body: {
					name: newContact.name,
					phone: newContact.phone,
				},
			}),
			invalidatesTags: ['Contacts'],
		}),
	}),
});

export const {
	useFetchContactsQuery,
	useDeleteContactMutation,
	useAddContactDataMutation,
} = contactApi;
