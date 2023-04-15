# Setup a NodeJS server work with DynamoDb (DDB)

## 1./ Init base project using express lib for typescript

Ref: [Setup a Node Project With TS](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)
We will got basic app.ts file like this

```TypeScript
require('dotenv').config();
require('express-async-errors');
import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('error', err.stack);
    res.status(500).send('Something thing went wrong!’);
});

app.use('/hello-‘world, (req, res, next) => {
    res.status(200).send('Hello World!’);
});

app.listen(3000, () => {
    console.log('Server start on http://localhost:3000');
});
```

## 2./ Setup & Interact DDB in NodeJS

-   Install `dynamoose` package

-   Create a DDB config file:

```TypeScript
dynamoose: {
    region: process.env.DYNAMOOSE_REGION || '',
    credentials: {
        accessKeyId: process.env.DYNAMOOSE_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.DYNAMOOSE_SECRET_ACCESS_KEY || '',
    },
},
```

-   Follow Ref link to get these below config:

```TypeScript
DYNAMOOSE_REGION
DYNAMOOSE_ACCESS_KEY_ID
DYNAMOOSE_SECRET_ACCESS_KEY
```

Ref Link: [DynamoWebService](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.DynamoWebService.html)

-   Create DDB instance and using (in app.ts file)

```TypeScript
const dynamoDb = new dynamoose.aws.ddb.DynamoDB(configs.dynamoose);

dynamoose.aws.ddb.set(dynamoDb);
```

-   Create model files which is mapping to DDB models in DB

```TypeScript
import * as dynamoose from 'dynamoose';

const UserModel = dynamoose.model(
    ‘User’, // Table name
    new dynamoose.Schema({
        username: String,
        name: String,
    }),
);

export { CreatorModel };
```

-   CRUD services via models

```TypeScript
import { UserModel } from '@models/user’;

export class UserService {
    async create(data: any) {
        return await (await UserModel(data)).save();
    }

    async get(username: string) {
        return (await UserModel.query({ username }).exec())?.[0];
    }

    async update(username: string, data: any) {
        const user = await this.get(username);

        if (! user) {
            // throw new Error('user is not exists');
            return await this.create({...data, username})
        }

        delete data['username'];

        for (let key in data) {
            user[key] = data[key];
        }

        return await user();
    }

    async delete(username: string) {
        const user = await this.get(username);

        if (! user) {
            throw new Error('user is not exists');
        }

        return await creator.delete();
    }
}
```

## 3./ Create POST api that accepts json with two fields: `wallet_address` and `blockchain_network`

-   Create router files for CRUD user

```TypeScript
const apiRouter = express.Router();

apiRouter.post(‘/user, accessTokenAuthentication, addUser);

async addUser(req: Request, res: Response) {
    const {user} = req.body;

    const userService = new UserService();
    const createdItem = await userService.create(user);
}
```

`accessTokenAuthentication`: middleware function that authenticate user who sent request

-   Using router in app.ts:

```TypeScript
app.use('/api/v1', apiRouter);
```

## 4./ Using POST Api from FE

-   Using below code to interact with created API

```TypeScript
const {data} = await axios.post(‘<API Domain>/api/v1/user’, {
    wallet_address: ‘0xfffeeeddd’,
    blockchain_network: ’56’
  }, {
    headers: {
        'Content-Type': 'application/json’,
        'x-access-token’: ‘access_token’
    }
})
```
