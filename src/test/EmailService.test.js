"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = require("../services/EmailService");
const MockProvider1_1 = require("../services/MockProvider1");
const MockProvider2_1 = require("../services/MockProvider2");
const RateLimiter_1 = require("../services/RateLimiter");
test("EmailService should send email with retry and fallback", () => __awaiter(void 0, void 0, void 0, function* () {
    const rateLimiter = new RateLimiter_1.RateLimiter(10, 60000);
    const emailService = new EmailService_1.EmailService([new MockProvider1_1.MockProvider1(), new MockProvider2_1.MockProvider2()], rateLimiter);
    const result = yield emailService.sendEmail({
        to: "test@example.com",
        subject: "Hello!",
        body: "This is a test email."
    });
    expect(result.success).toBe(true);
}));
