import {MongoClient} from 'mongodb'

const url = 'mongodb://localhost:27017'
export default async function connectDB(operations, response){
    try {
        const client = await MongoClient.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = client.db('gramedia')
        await operations(db)
        await client.close()
    }catch (e) {
        console.error(e)
        response.send(e)
    }
}