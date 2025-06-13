"use client";
import { useEffect } from "react";

export function AccessLogger() {
  useEffect(() => {
    fetch("/api/access", { method: "POST" });
  }, []);
  return null;
}