"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/customer");
  }, [router]);

  return <div>Redirecting to Customer page...</div>;
}
