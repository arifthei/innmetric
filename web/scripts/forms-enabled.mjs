/** Same gate as next.config.ts. NODE_ENV is not the switch. */
export function formsEnabled(env = process.env) {
  return (
    env.CONTEXT === "production" && env.INNMETRIC_FORMS_ENABLED === "true"
  );
}
