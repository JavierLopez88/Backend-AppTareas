import mongoose from 'mongoose';
import {config} from './config'; //

(async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        });
        console.log('DB: ',db.connection.name);
    } catch (error) {
        console.log(error);
    }
})(); //autoinvocada
