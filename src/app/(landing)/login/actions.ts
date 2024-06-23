"use server";

import { MyFormFields } from "./form";

export async function handleMyFormSubmit(data: MyFormFields) {
	console.log({
		email: data.email,
		password: data.password,
	});
}
