import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from "./routes.ts";
import {validateToken} from "./middleware/tokenValidation.ts";
import {errorHandler} from "./middleware/errorHandlerer.ts";
import {notFound} from "./utils/notFound.ts";

const port = parseInt(<string>process.env.PORT);
const app = express();

if(!port) {
  console.log('Port is not defined. Aborting...');
  process.exit(1);
}

  app.use(cors({
    origin: `http://localhost:${port}`,
  }))
  app.use(morgan('tiny'));
  app.use(helmet());
  app.use(express.json());
  app.use(validateToken);

  app.use('/api', routes);

  app.use(notFound)
  app.use(errorHandler)

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });