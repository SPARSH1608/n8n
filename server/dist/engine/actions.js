import axios from "axios";
import { Resend } from 'resend';
import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";
export const sendEmail = async (parameters, credential, input) => {
    try {
        console.log('parameters, credential, input:', parameters, credential, input);
        //@ts-ignore
        const resend = new Resend(credential.API_KEY);
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: parameters.recipientEmail,
            subject: parameters.subject,
            text: JSON.stringify(parameters.body),
        });
        console.log('Resend response:', response);
        return { success: true, response };
    }
    catch (err) {
        console.error("Resend email error:", err, err?.response?.data);
        throw new Error(`Email failed: ${err.message}`);
    }
};
export const sendTelegramMessage = async (parameters, credential, input) => {
    try {
        console.log('parameters, credential, input:', parameters, credential, input);
        const { message } = parameters;
        const url = `https://api.telegram.org/bot${credential.API_KEY}/sendMessage`;
        const response = await axios.post(url, {
            chat_id: credential.CHAT_ID,
            text: message || JSON.stringify(input),
        });
        return { success: true, response: response.data };
    }
    catch (err) {
        console.error("Telegram send error:", err.message);
        throw new Error(`Telegram failed: ${err.message}`);
    }
};
export const sendWebhook = async (parameters, credential, input) => {
    try {
        console.log('parameters, credential, input: for webhooks', parameters, credential, input);
        const { url, method = "POST", headers = {}, body } = parameters;
        const data = body !== undefined ? body : input;
        const response = await axios.request({
            url,
            method,
            headers,
            data,
        });
        return { success: true, response: response.data };
    }
    catch (err) {
        console.error("Webhook send error:", err.message);
        throw new Error(`Webhook failed: ${err.message}`);
    }
};
export async function readEmails(credentials, parameters) {
    console.log('Reading emails with credentials and parameters:', credentials, parameters);
    const client = new ImapFlow({
        host: credentials.host,
        port: credentials.port,
        secure: credentials.secure,
        auth: {
            user: credentials.user,
            pass: credentials.pass,
        },
    });
    await client.connect();
    let lock = await client.getMailboxLock(parameters.mailbox || "INBOX");
    let messages = [];
    try {
        const searchCriteria = parameters.search || { seen: false };
        const fetchOptions = { envelope: true, source: true };
        const searchResult = await client.search(searchCriteria);
        const lastThree = Array.isArray(searchResult)
            ? searchResult.slice(-3)
            : [];
        if (lastThree.length > 0) {
            for await (let msg of client.fetch(lastThree, fetchOptions)) {
                if (!msg.source)
                    continue;
                const parsed = await simpleParser(msg.source);
                messages.push({
                    subject: parsed.subject,
                    from: parsed.from?.text,
                    //@ts-ignore
                    to: parsed.to?.text,
                    date: parsed.date,
                });
            }
        }
    }
    finally {
        lock.release();
    }
    await client.logout();
    return messages;
}
export async function receiveTelegramMessages(credential, parameters) {
    try {
        const { API_KEY, CHAT_ID } = credential;
        const { limit = 3, offset, timeout = 0 } = parameters;
        const url = `https://api.telegram.org/bot${API_KEY}/getUpdates`;
        const response = await axios.post(url, {
            offset,
            timeout,
            allowed_updates: ["message"],
        });
        const allMessages = (response.data.result || [])
            .filter((update) => update.message && update.message.chat && update.message.chat.id == CHAT_ID);
        console.log('All messages for chat:', allMessages);
        const lastMessages = allMessages.slice(-limit).map((update) => ({
            message_id: update.message.message_id,
            from: update.message.from?.username,
            text: update.message.text,
            date: update.message.date,
            chat_id: update.message.chat.id,
        }));
        console.log('Last messages:', lastMessages);
        return lastMessages;
    }
    catch (err) {
        console.error("Telegram receive error:", err.message);
        throw new Error(`Telegram receive failed: ${err.message}`);
    }
}
//# sourceMappingURL=actions.js.map