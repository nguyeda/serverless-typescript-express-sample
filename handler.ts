import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import * as serverless from 'aws-serverless-express';
import * as express from 'express';

// Init express and routes
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('this is the root level');
});

app.get('/hello', (req: express.Request, res: express.Response) =>  {
  res.send('hello world');
});

// serverless express
const server = serverless.createServer(app);

// lambda handler
export const hello: Handler = (event: APIGatewayEvent, context: Context) =>
  serverless.proxy(server, event, context)
