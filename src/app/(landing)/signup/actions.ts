"use server";

import { MyFormFields } from "./form";

export async function handleMyFormSubmit(data: MyFormFields) {
	console.log({
		firstName: data.firstName,
		lastName: data.lastName,
		email: data.email,
		password: data.password,
	});
}
