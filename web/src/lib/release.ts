/** Build-time gate. next.config.ts inlines this. NODE_ENV is not the switch. */
export const FORMS_ENABLED = process.env.INNMETRIC_FORMS_ENABLED === "true";
