"use client";

import { useEffect } from "react";
import { ButtonLink, Button } from "@/components/ui/Button";

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center py-32">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="display-md mt-6 max-w-2xl">We could not load this page.</h1>
      <p className="lead mt-5 max-w-xl">Please try again. If the problem continues, contact the HARI team and we will help you directly.</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button type="button" onClick={() => retry()}>Try again</Button>
        <ButtonLink href="/contact" variant="outline">Contact HARI</ButtonLink>
      </div>
    </section>
  );
}
