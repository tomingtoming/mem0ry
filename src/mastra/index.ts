import { Mastra } from "@mastra/core";
import { sharedMemory } from "../memory";
import { duckDbStorage } from "../storage/duckdb";

export const mastra = new Mastra({
    storage: duckDbStorage,
});
