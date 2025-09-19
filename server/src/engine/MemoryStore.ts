type WorkflowExecutionContext = {
  [nodeId: string]: {
    input?: any;
    output?: any;
    status: 'pending' | 'running' | 'success' | 'failed';
  };
};

export const workflowExecutionStore: {
  [workflowId: string]: WorkflowExecutionContext;
} = {};
