import { Memory } from "@mastra/memory";
import { duckDbVector } from "../vector/duckdb";
import { duckDbStorage } from "../storage/duckdb";
import { geminiEmbedding } from "../embedding/google";

export const sharedMemory = new Memory({
    embedder: geminiEmbedding,
    storage: duckDbStorage,
    vector: duckDbVector,
    options: {
    lastMessages: 10,
    semanticRecall: false,
    threads: {
      generateTitle: false
    }
  }
});
