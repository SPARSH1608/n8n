import express from 'express';
const app = express();
import authRouter from './routes/AuthRoute.js';
import credentialsRouter from './routes/CredentialRoute.js';
import workflowsRouter from './routes/WorkflowRoute.js';
import workflowNodesRouter from './routes/WorkflowNodeRoute.js';
import LinksRouter from './routes/LinksRoute.js';
import TriggerConfigRouter from './routes/TriggerConfigRoute.js';
import cors from 'cors';
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/credentials', credentialsRouter);
app.use('/api/v1/workflows', workflowsRouter);
app.use('/api/v1/nodes', workflowNodesRouter);
app.use('/api/v1/links', LinksRouter);
app.use('/api/v1/trigger-config', TriggerConfigRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=index.js.map