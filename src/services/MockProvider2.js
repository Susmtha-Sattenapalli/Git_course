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
exports.MockProvider2 = void 0;
class MockProvider2 {
    sendEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // Simulate a successful send or failure
            if (Math.random() > 0.5) {
                throw new Error("Provider2: Send failure");
            }
            return { success: true, message: "Provider2: Email sent successfully" };
        });
    }
}
exports.MockProvider2 = MockProvider2;
