export class RateLimiter {
  private requests: number = 0;
  private readonly limit: number;
  private readonly interval: number;
  private intervalId: NodeJS.Timeout;

  constructor(limit: number, interval: number) {
      this.limit = limit;
      this.interval = interval;
      this.intervalId = setInterval(() => {
          this.requests = 0;
      }, this.interval);
  }

  // Method to check if a request is allowed based on the rate limit
  isAllowed(): boolean {
      if (this.requests < this.limit) {
          this.requests += 1;
          return true;
      }
      return false;
  }

  // Method to clear the interval
  clear() {
      clearInterval(this.intervalId);
  }
}
