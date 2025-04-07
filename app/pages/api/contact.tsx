export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Here you would typically:
    // 1. Store in database
    // 2. Send email notification
    // 3. Integrate with external service like SendGrid, Mailchimp, etc.

    // For demonstration, we'll just log the data and return success
    console.log("Form submission:", { name, email, subject, message });

    // Return success
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Error processing your request" });
  }
}
