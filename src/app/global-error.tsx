"use client";

export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <head>
        <title>Something went wrong | HARI</title>
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", background: "#faf7f1", color: "#1c2328", margin: 0 }}>
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "6rem 1.25rem" }}>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.16em", fontSize: 12, color: "#a94b2b", fontWeight: 600 }}>Something went wrong</p>
          <h1 style={{ fontSize: 36, margin: "1rem 0", lineHeight: 1.1 }}>HARI University is temporarily unavailable.</h1>
          <p style={{ lineHeight: 1.6, color: "#3d474f" }}>An unexpected error occurred{error.digest ? ` (reference ${error.digest})` : ""}. Please try again, or email admissions@haridu.in.</p>
          <button type="button" onClick={() => retry()} style={{ marginTop: 24, background: "#11364f", color: "#fff", border: 0, borderRadius: 999, padding: "0.9rem 1.5rem", fontWeight: 600, cursor: "pointer" }}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
