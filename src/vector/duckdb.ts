import { CreateIndexArgs, CreateIndexParams, IndexStats, MastraVector, ParamsToArgs, QueryResult, QueryVectorArgs, QueryVectorParams, UpsertVectorArgs, UpsertVectorParams } from '@mastra/core/vector';
import DuckDb from 'duckdb';

export class DuckDbVector extends MastraVector {
    query<E extends QueryVectorArgs = QueryVectorArgs>(...args: ParamsToArgs<QueryVectorParams> | E): Promise<QueryResult[]> {
        throw new Error('Method not implemented.');
    }
    upsert<E extends UpsertVectorArgs = UpsertVectorArgs>(...args: ParamsToArgs<UpsertVectorParams> | E): Promise<string[]> {
        throw new Error('Method not implemented.');
    }
    createIndex<E extends CreateIndexArgs = CreateIndexArgs>(...args: ParamsToArgs<CreateIndexParams> | E): Promise<void> {
        throw new Error('Method not implemented.');
    }
    listIndexes(): Promise<string[]> {
        throw new Error('Method not implemented.');
    }
    describeIndex(indexName: string): Promise<IndexStats> {
        throw new Error('Method not implemented.');
    }
    deleteIndex(indexName: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

export const duckDbVector = new DuckDbVector();
