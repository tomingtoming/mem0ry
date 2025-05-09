import { StorageThreadType, MessageType } from '@mastra/core';
import { EvalRow, MastraStorage, StorageColumn, StorageGetMessagesArg, TABLE_NAMES, WorkflowRun, WorkflowRuns } from '@mastra/core/storage';
import DuckDb from 'duckdb';

export class DuckDbStorage extends MastraStorage {
    constructor(options: { name: string }) {
        super(options);
    }
    createTable({ tableName }: { tableName: TABLE_NAMES; schema: Record<string, StorageColumn>; }): Promise<void> {
        throw new Error('Method not implemented.');
    }
    clearTable({ tableName }: { tableName: TABLE_NAMES; }): Promise<void> {
        throw new Error('Method not implemented.');
    }
    insert({ tableName, record }: { tableName: TABLE_NAMES; record: Record<string, any>; }): Promise<void> {
        throw new Error('Method not implemented.');
    }
    batchInsert({ tableName, records, }: { tableName: TABLE_NAMES; records: Record<string, any>[]; }): Promise<void> {
        throw new Error('Method not implemented.');
    }
    load<R>({ tableName, keys }: { tableName: TABLE_NAMES; keys: Record<string, string>; }): Promise<R | null> {
        throw new Error('Method not implemented.');
    }
    getThreadById({ threadId }: { threadId: string; }): Promise<StorageThreadType | null> {
        throw new Error('Method not implemented.');
    }
    getThreadsByResourceId({ resourceId }: { resourceId: string; }): Promise<StorageThreadType[]> {
        throw new Error('Method not implemented.');
    }
    saveThread({ thread }: { thread: StorageThreadType; }): Promise<StorageThreadType> {
        throw new Error('Method not implemented.');
    }
    updateThread({ id, title, metadata, }: { id: string; title: string; metadata: Record<string, unknown>; }): Promise<StorageThreadType> {
        throw new Error('Method not implemented.');
    }
    deleteThread({ threadId }: { threadId: string; }): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getMessages({ threadId, selectBy, threadConfig }: StorageGetMessagesArg): Promise<MessageType[]> {
        throw new Error('Method not implemented.');
    }
    saveMessages({ messages }: { messages: MessageType[]; }): Promise<MessageType[]> {
        throw new Error('Method not implemented.');
    }
    getTraces({ name, scope, page, perPage, attributes, filters, }: { name?: string; scope?: string; page: number; perPage: number; attributes?: Record<string, string>; filters?: Record<string, any>; fromDate?: Date; toDate?: Date; }): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
    getEvalsByAgentName(agentName: string, type?: 'test' | 'live'): Promise<EvalRow[]> {
        throw new Error('Method not implemented.');
    }
    getWorkflowRuns(args?: { workflowName?: string; fromDate?: Date; toDate?: Date; limit?: number; offset?: number; resourceId?: string; }): Promise<WorkflowRuns> {
        throw new Error('Method not implemented.');
    }
    getWorkflowRunById(args: { runId: string; workflowName?: string; }): Promise<WorkflowRun | null> {
        throw new Error('Method not implemented.');
    }
}

export const duckDbStorage = new DuckDbStorage({
    name: 'duckdb',
});
