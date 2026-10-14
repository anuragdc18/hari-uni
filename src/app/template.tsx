import { PageTransition } from "@/components/layout/PageTransition";

/** Re-mounted on every navigation so each page gets an entrance transition. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
