/**
 * Telephony Manager for Ultravox Agent
 * Handles outbound and inbound calls via Twilio integration
 * Per official Ultravox documentation: https://docs.ultravox.ai/telephony/overview
 */

interface TwilioOutgoingConfig {
  to: string; // Phone number or SIP address in E.164 format
  from: string; // Your Twilio phone number
  additionalParams?: {
    statusCallback?: string;
    record?: boolean;
    [key: string]: any;
  };
}

interface UltravoxCallConfig {
  systemPrompt: string;
  medium: {
    twilio: {
      outgoing?: TwilioOutgoingConfig;
    };
  };
  firstSpeakerSettings: {
    user?: {};
    agent?: {};
  };
  agentId?: string;
  customerName?: string;
  [key: string]: any;
}

/**
 * Create an outbound call via Ultravox with Twilio integration
 * No need to manage Twilio SDK - Ultravox handles the connection automatically
 */
function createOutboundCallConfig(
  systemPrompt: string,
  toNumber: string,
  fromNumber: string,
  agentId?: string
): UltravoxCallConfig {
  return {
    systemPrompt,
    medium: {
      twilio: {
        outgoing: {
          to: toNumber, // Must be in E.164 format: +15551234567
          from: fromNumber, // Your Twilio phone number
          additionalParams: {
            statusCallback: process.env.WEBHOOK_HOST
              ? `https://${process.env.WEBHOOK_HOST}/twilio/status/${agentId || "default"}`
              : undefined,
            record: true,
          },
        },
      },
    },
    // For outbound calls, user speaks first (recipient answers before agent begins)
    firstSpeakerSettings: { user: {} },
  };
}

/**
 * Create an inbound call configuration
 * For receiving calls from Twilio webhook
 */
function createInboundCallConfig(
  systemPrompt: string,
  agentId?: string
): UltravoxCallConfig {
  return {
    systemPrompt,
    medium: {
      twilio: {},
    },
    // For inbound calls, agent typically speaks first
    firstSpeakerSettings: { agent: {} },
  };
}

/**
 * Build a system prompt for appointment reminder
 */
function createAppointmentReminderPrompt(
  customerName: string,
  appointmentTime: string,
  appointmentType: string = "appointment"
): string {
  return `You are calling ${customerName} to remind them about their upcoming ${appointmentType} scheduled for ${appointmentTime}.
Be friendly and professional. If they confirm they'll be there, thank them and end the call.
If they need to reschedule, note down their preferred time and confirm you'll send a new confirmation.
If they don't answer or seem confused, patiently re-explain and ask if they need any assistance.`;
}

/**
 * Build a system prompt for customer outreach
 */
function createOutreachPrompt(
  customerName: string,
  purpose: string
): string {
  return `You are calling ${customerName} from our customer service team.
Your purpose is: ${purpose}
Be courteous and professional. Listen to their concerns and provide helpful information.
If they're not interested, thank them for their time and end the call politely.`;
}

/**
 * Build a system prompt for customer support agent
 */
function createSupportAgentPrompt(businessName: string = "Our Company"): string {
  return `You are a customer support agent for ${businessName}.
Answer customer questions helpfully and professionally.
If you don't know something, offer to escalate to a human representative.
Always be polite and patient.`;
}

/**
 * Format phone number to E.164 format
 */
function formatToE164(phoneNumber: string, countryCode: string = "1"): string {
  // Remove all non-digit characters
  const digits = phoneNumber.replace(/\D/g, "");

  // If it's already 11 digits (US format with 1), use as-is
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  // If it's 10 digits (US format without 1), add 1
  if (digits.length === 10) {
    return `+1${digits}`;
  }

  // Otherwise add country code
  if (!digits.startsWith(countryCode)) {
    return `+${countryCode}${digits}`;
  }

  return `+${digits}`;
}

export {
  TwilioOutgoingConfig,
  UltravoxCallConfig,
  createOutboundCallConfig,
  createInboundCallConfig,
  createAppointmentReminderPrompt,
  createOutreachPrompt,
  createSupportAgentPrompt,
  formatToE164,
};
