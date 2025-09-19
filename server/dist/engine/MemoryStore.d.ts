type WorkflowExecutionContext = {
    [nodeId: string]: {
        input?: any;
        output?: any;
        status: 'pending' | 'running' | 'success' | 'failed';
    };
};
export declare const workflowExecutionStore: {
    [workflowId: string]: WorkflowExecutionContext;
};
export {};
//# sourceMappingURL=MemoryStore.d.ts.map