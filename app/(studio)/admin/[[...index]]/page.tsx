"use client";

import { NextStudio } from "next-sanity/studio";
import studioConfig from "@/sanity.config";

export default function AdminPage() {
  return <NextStudio config={studioConfig} />;
}
