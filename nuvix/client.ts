import { Client } from "@nuvix/client";
import { Database } from "./types";

export const nx = new Client<Database, false>()
  .setProject(process.env.NEXT_PUBLIC_NUVIX_PROJECT_ID || "default")
  .setEndpoint(
    process.env.NEXT_PUBLIC_NUVIX_ENDPOINT || "https://cloud.nuvix.in/v1",
  );
