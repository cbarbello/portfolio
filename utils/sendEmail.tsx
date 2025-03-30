import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  emailFormDQTA: NextApiRequest,
  res: NextApiResponse
) => {
  await resend.emails.send({
    from: emailFormData.email,
    to: "caseyjbarbello@gmail.com",
    subject: emailFormdata.subject,
    html: emailFormdata.message,
  });
};
