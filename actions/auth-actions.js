'use server';

import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";

export async function signup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    if (!email.includes('@')) {
        errors.email = 'Please enter a valid email address.';
    }

    if (password.trim().length < 8) {
        errors.password = 'Password need to be 8 chars or more';
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        }
    }

    const hashedPassword = hashUserPassword(password);
    createUser(email, hashedPassword);
}