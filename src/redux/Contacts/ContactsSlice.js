import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
	({ baseUrl } = { baseUrl: '' }) =>
	async ({ url, method, data, params }) => {
		try {
			const result = await axios({
				url: baseUrl + url,
				method,
				data,
				params,
			});
			return { data: result.data };
		} catch (axiosError) {
			let err = axiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};

export const contactApi = createApi({
	reducerPath: 'contactApi',
	baseQuery: axiosBaseQuery({
		baseUrl: 'https://connections-api.herokuapp.com',
	}),
	tagTypes: ['Contacts'],
	endpoints: builder => ({
		fetchContacts: builder.query({
			query: () => ({
				url: `/contacts`,
				method: 'GET',
			}),
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
			query: ({ name, number }) => ({
				url: `/contacts`,
				method: 'POST',
				data: { name, number },
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
