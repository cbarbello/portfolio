"use server";

import { EmailFormData } from "@/app/contact/page";

export async function sendEmail(emailFormData: EmailFormData) {
  //   const { name, email, subject, message } = emailFormData;
  //   try {
  //     const data = await resend.emails.send({
  //       from: email,
  //       to: `${process.env.RECIPIENT_EMAIL_ADDRESS}`,
  //       subject: `New Email from ${name}. Subject: ${subject}`,
  //       react: EmailTemplate({ message }),
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     throw new Error("Failed to send email");
  //   }
}
