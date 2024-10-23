import expresss from 'express';
import { router } from './routes';

const app = expresss();

app.use(expresss.json());
app.use(router);

app.listen(3333, () => console.log('Server is running on port 3333'));