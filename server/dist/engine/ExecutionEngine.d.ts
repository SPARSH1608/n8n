import type { RequestHandler } from "express";
export declare const executeWorkflow: RequestHandler;
export declare const executeNode: (nodeId: string, inputData: any) => Promise<{
    success: boolean;
    response: any;
}>;
//# sourceMappingURL=ExecutionEngine.d.ts.map