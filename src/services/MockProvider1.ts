import { EmailPayload, EmailStatus, EmailProvider } from "../types";

export class MockProvider1 implements EmailProvider {
  async sendEmail(email: EmailPayload): Promise<EmailStatus> {
    // Simulate a successful send or failure
    if (Math.random() > 0.7) {
      throw new Error("Provider1: Send failure");
    }
    return { success: true, message: "Provider1: Email sent successfully" };
  }
}
