"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = require("./services/EmailService");
const MockProvider1_1 = require("./services/MockProvider1");
const MockProvider2_1 = require("./services/MockProvider2");
const RateLimiter_1 = require("./services/RateLimiter");
const rateLimiter = new RateLimiter_1.RateLimiter(10, 60000); // 10 requests per minute
const emailService = new EmailService_1.EmailService([new MockProvider1_1.MockProvider1(), new MockProvider2_1.MockProvider2()], rateLimiter);
emailService.sendEmail({
    to: "test@example.com",
    subject: "Hello!",
    body: "This is a test email."
}).then(status => {
    console.log(status);
}).catch(err => {
    console.error(err);
});
