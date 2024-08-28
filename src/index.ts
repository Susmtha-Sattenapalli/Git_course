import { EmailService } from "./services/EmailService";
import { MockProvider1 } from "./services/MockProvider1";
import { MockProvider2 } from "./services/MockProvider2";
import { RateLimiter } from "./services/RateLimiter";
describe('EmailService', () => {
  let emailService: EmailService;
  let rateLimiter: RateLimiter;

  beforeAll(() => {
    rateLimiter = new RateLimiter(10, 60000);
    emailService = new EmailService([new MockProvider1(), new MockProvider2()], rateLimiter);
  });

  afterAll(() => {
    // Clear the interval to prevent open handles
    rateLimiter.clear();
  });

  it('should send an email successfully', async () => {
    const status = await emailService.sendEmail({
      to: "test@example.com",
      subject: "Hello!",
      body: "This is a test email."
    });
    expect(status.success).toBe(true);
  });
});
