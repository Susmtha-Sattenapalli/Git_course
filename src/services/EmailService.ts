import { EmailPayload, EmailStatus, EmailProvider } from "../types";
import { RateLimiter } from "./RateLimiter";

export class EmailService {  // Ensure this is exported
  private providers: EmailProvider[];
  private rateLimiter: RateLimiter;

  constructor(providers: EmailProvider[], rateLimiter: RateLimiter) {
    this.providers = providers;
    this.rateLimiter = rateLimiter;
  }

  async sendEmail(email: EmailPayload): Promise<EmailStatus> {
    if (!this.rateLimiter.isAllowed()) {
      return { success: false, message: "Rate limit exceeded" };
    }

    let error: any;
    for (let i = 0; i < this.providers.length; i++) {
      try {
        return await this.retryWithBackoff(this.providers[i], email);
      } catch (err) {
        error = err;
      }
    }
    return { success: false, message: `Failed to send email: ${error.message}` };
  }

  private async retryWithBackoff(provider: EmailProvider, email: EmailPayload, retries: number = 3, delay: number = 500): Promise<EmailStatus> {
    for (let i = 0; i < retries; i++) {
      try {
        return await provider.sendEmail(email);
      } catch (err) {
        if (i === retries - 1) throw err;
        await this.delay(delay * Math.pow(2, i));
      }
    }
    throw new Error("Retry failed");
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
