import serverless from "serverless-http";
import { createServer } from "../../server";

const app = createServer();

// This is the magic that turns your Express app into a serverless function
export const handler = serverless(app);