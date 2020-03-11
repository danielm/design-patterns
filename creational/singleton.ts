class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log(message);
  }
}

// Usage
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

// Both logger1 and logger2 refer to the same instance
console.log(logger1 === logger2); // Output: true

logger1.log("This is a log message.");
logger2.log("Another log message.");
