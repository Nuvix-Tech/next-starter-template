import { Client } from "@nuvix/client";

export const nx = new Client()
.setProject('default')
.setEndpoint("https://ide.nuvix.in:4001/v1");