import { captureError } from "./sentry";

export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  // Forward to Sentry if available (no-op if Sentry isn't configured).
  try {
    captureError(error, context);
  } catch (e) {
    // swallow reporter errors
  }
}
