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
exports.EmailService = void 0;
class EmailService {
    constructor(providers, rateLimiter) {
        this.providers = providers;
        this.rateLimiter = rateLimiter;
    }
    sendEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.rateLimiter.isAllowed()) {
                return { success: false, message: "Rate limit exceeded" };
            }
            let error;
            for (let i = 0; i < this.providers.length; i++) {
                try {
                    return yield this.retryWithBackoff(this.providers[i], email);
                }
                catch (err) {
                    error = err;
                }
            }
            return { success: false, message: `Failed to send email: ${error.message}` };
        });
    }
    retryWithBackoff(provider_1, email_1) {
        return __awaiter(this, arguments, void 0, function* (provider, email, retries = 3, delay = 500) {
            for (let i = 0; i < retries; i++) {
                try {
                    return yield provider.sendEmail(email);
                }
                catch (err) {
                    if (i === retries - 1)
                        throw err;
                    yield this.delay(delay * Math.pow(2, i));
                }
            }
            throw new Error("Retry failed");
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.EmailService = EmailService;
