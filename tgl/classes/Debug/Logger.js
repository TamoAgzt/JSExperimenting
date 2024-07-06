class Logger {
  constructor() {
    if (!localStorage.getItem('logs')) {
      localStorage.setItem('logs', JSON.stringify([]));
    }
  }

  Log(message) {
    const logs = JSON.parse(localStorage.getItem('logs'));
    const timestamp = new Date().toISOString();
    logs.push(`[${timestamp}] ${message}`);
    localStorage.setItem('logs', JSON.stringify(logs));
  }

  GetLogs() {
    return JSON.parse(localStorage.getItem('logs'));
  }

  ClearLogs() {
    localStorage.setItem('logs', JSON.stringify([]));
  }
}

export default Logger;

const logger = new Logger();
const input = prompt();
if (input == 'clr logs') {
  logger.ClearLogs();
}
