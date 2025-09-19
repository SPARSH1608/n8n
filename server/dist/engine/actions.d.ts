export declare const sendEmail: (parameters: any, credential: any, input: any) => Promise<{
    success: boolean;
    response: import("resend").CreateEmailResponse;
}>;
export declare const sendTelegramMessage: (parameters: any, credential: any, input: any) => Promise<{
    success: boolean;
    response: any;
}>;
export declare const sendWebhook: (parameters: any, credential: any, input: any) => Promise<{
    success: boolean;
    response: any;
}>;
export declare function readEmails(credentials: any, parameters: any): Promise<any[]>;
export declare function receiveTelegramMessages(credential: any, parameters: any): Promise<any>;
//# sourceMappingURL=actions.d.ts.map