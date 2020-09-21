// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';
import ConversionModel from './models/conversion';

const uri = `mongodb+srv://${process.env.MONGO_USER}@${process.env.MONGO_URI}`;
mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection;

export interface IContext {
    db: typeof db;
    ConversionModel: typeof ConversionModel;
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers: resolvers as any,
        context: { db, ConversionModel } as IContext,
    });

    server.listen().then(({ url }) => {
        console.log(`Server running at ${url}`);
    });
});
