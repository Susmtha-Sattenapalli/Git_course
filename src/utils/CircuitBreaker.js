"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircuitBreaker = void 0;
class CircuitBreaker {
    constructor(failureThreshold, resetTimeout) {
        this.failures = 0;
        this.state = "CLOSED";
        this.failureThreshold = failureThreshold;
        this.resetTimeout = resetTimeout;
    }
    isAvailable() {
        return this.state === "CLOSED";
    }
    recordFailure() {
        this.failures++;
        if (this.failures >= this.failureThreshold) {
            this.state = "OPEN";
            setTimeout(() => this.reset(), this.resetTimeout);
        }
    }
    reset() {
        this.state = "CLOSED";
        this.failures = 0;
    }
}
exports.CircuitBreaker = CircuitBreaker;
