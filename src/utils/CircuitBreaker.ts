export class CircuitBreaker {
    private failureThreshold: number;
    private failures: number = 0;
    private state: "CLOSED" | "OPEN" = "CLOSED";
    private resetTimeout: number;
  
    constructor(failureThreshold: number, resetTimeout: number) {
      this.failureThreshold = failureThreshold;
      this.resetTimeout = resetTimeout;
    }
  
    isAvailable(): boolean {
      return this.state === "CLOSED";
    }
  
    recordFailure(): void {
      this.failures++;
      if (this.failures >= this.failureThreshold) {
        this.state = "OPEN";
        setTimeout(() => this.reset(), this.resetTimeout);
      }
    }
  
    private reset(): void {
      this.state = "CLOSED";
      this.failures = 0;
    }
  }
  