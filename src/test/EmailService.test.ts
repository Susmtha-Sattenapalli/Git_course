import { EmailService } from "../services/EmailService";
import { MockProvider1 } from "../services/MockProvider1";
import { MockProvider2 } from "../services/MockProvider2";
import { RateLimiter } from "../services/RateLimiter";

test("EmailService should send email with retry and fallback", async () => {
  const rateLimiter = new RateLimiter(10, 60000);
  const emailService = new EmailService([new MockProvider1(), new MockProvider2()], rateLimiter);

  const result = await emailService.sendEmail({
    to: "test@example.com",
    subject: "Hello!",
    body: "This is a test email."
  });

  expect(result.success).toBe(true);
});
