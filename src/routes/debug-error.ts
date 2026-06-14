import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/debug-error")({
  server: {
    handlers: {
      GET: async () => {
        console.error("Triggering test server error: Lovable");
        throw new Error("Test server error: Lovable");
      },
    },
  },
});
