import { EmailPayload, EmailStatus, EmailProvider } from "../types";

export class MockProvider2 implements EmailProvider {
  async sendEmail(email: EmailPayload): Promise<EmailStatus> {
    // Simulate a successful send or failure
    if (Math.random() > 0.5) {
      throw new Error("Provider2: Send failure");
    }
    return { success: true, message: "Provider2: Email sent successfully" };
  }
}
