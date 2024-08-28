export interface EmailPayload {
    to: string;
    subject: string;
    body: string;
  }
  
  export interface EmailStatus {
    success: boolean;
    message: string;
  }
  
  export interface EmailProvider {
    sendEmail(email: EmailPayload): Promise<EmailStatus>;
  }
  