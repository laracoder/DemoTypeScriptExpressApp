/*
 * GET users listing.
 */
import express = require('express');
import { greeter } from './../src/greeter';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    let Person = { 'firstName': 'Daniel', 'lastName': 'Schmelz' };
    res.send(greeter(Person));
});

export default router;