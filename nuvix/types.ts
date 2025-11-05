import { Models } from "@nuvix/client";

// For more information on how to use these types, please refer to the documentation.
// https://docs.nuvix.in/products/database/api/generating-typescript-types

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type SchemaOf<S extends keyof Database> = Database[S];
export type TypesOf<S extends keyof Database> = SchemaOf<S>["Types"];

// Replace this with your own database types
// Run: npx nuvix types to generate types from your Nuvix project
export type Database = {
};

export const Constants = {
  default: {
    Enums: {},
  },
} as const;
