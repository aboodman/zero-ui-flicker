import { Zero } from "@rocicorp/zero";
import { schema } from "@/schema";

let client: Zero<typeof schema> | undefined;

export function getZeroClient() {
  if (!client) {
    console.log("Constructing a new Zero instance!");
    client = new Zero({
      userID: "anonymous-user",
      auth: "",
      server: process.env.NEXT_PUBLIC_SERVER,
      schema,
      kvStore: "mem",
    });
  }
  return client;
}
