"use server";

import type { FormValues } from "./schema";

export async function submitContactForm(data: FormValues) {
    // This is a server action. In a real app, you would send an email here.
    // For this example, we'll just log the data to the console.
    console.log("Contact form submitted:", data);
    
    // You can add email sending logic here using a library like Nodemailer or an API like SendGrid.
    
    return { success: true, message: "Thank you for your message! We will get back to you soon." };
}
