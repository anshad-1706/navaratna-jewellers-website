import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Initialize Sentry on the browser only. Uses Vite env var VITE_SENTRY_DSN.
function initSentry() {
  if (typeof window === "undefined") return;
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (!dsn) return;

  Sentry.init({
    dsn,
    integrations: [new BrowserTracing()],
    // Adjust tracesSampleRate in production as needed.
    tracesSampleRate: Number(import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE ?? 0.05),
    environment: import.meta.env.MODE,
  });
}

// Safe capture wrapper used by the app.
export function captureError(error: unknown, context: Record<string, unknown> = {}) {
  try {
    // prefer Sentry if available
    (Sentry as any)?.captureException?.(error, { extra: context });
  } catch (e) {
    // swallow errors from the reporter
    // eslint-disable-next-line no-console
    console.error("Sentry capture failed:", e);
  }
}

// Auto-init when imported on the client
initSentry();

export default Sentry;
