"use client";

import { useForm } from "react-hook-form";
import { handleMyFormSubmit } from "./actions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const passworRegex = new RegExp(
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const myFormSchema = z.object({
	email: z.string().email(),
	password: z
		.string({ required_error: "Password is required" })
		.min(8, {
			message:
				"Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
		})
		.regex(passworRegex, {
			message:
				"Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
		}),
});

export type MyFormFields = z.infer<typeof myFormSchema>;

export default function MyForm() {
	const form = useForm<MyFormFields>({
		resolver: zodResolver(myFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onMyFormSubmit = async (data: MyFormFields) => {
		await handleMyFormSubmit(data);
	};

	return (
		<form
			onSubmit={form.handleSubmit((data) => onMyFormSubmit(data))}
			className="w-full"
		>
			<div className="space-y-3 py-2">
				<label>Email</label>
				<input
					{...form.register("email")}
					className="rounded px-2 py-2 w-full bg-white dark:bg-opacity-5 backdrop-filter backdrop-blur-2xl focus:ring-0"
				/>
				{form.formState.errors.email && (
					<p className="text-red">
						{form.formState.errors.email.message}
					</p>
				)}
			</div>
			<div className="space-y-3 py-2">
				<label>Password</label>
				{/* Minimum 8 characters, at least one uppercase letter, one
				lowercase letter, one number and one special character */}
				<input
					{...form.register("password")}
					className="rounded px-2 py-2 w-full bg-white dark:bg-opacity-5 backdrop-filter backdrop-blur-2xl focus:ring-0"
				/>
				{form.formState.errors.password && (
					<p className="text-red">
						{form.formState.errors.password.message}
					</p>
				)}
			</div>
			<button
				type="submit"
				className="bg-red px-4 py-2 rounded-full border border-red mt-5"
			>
				Submit
			</button>
		</form>
	);
}
