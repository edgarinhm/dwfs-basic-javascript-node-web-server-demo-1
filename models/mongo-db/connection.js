let db;
let objectId;

const API_MONGODB_CONNECTION = process.env.API_MONGODB_CONNECTION || '<your-mongo-connection-string>'
const API_NAME = process.env.API_NAME || 'myapp_db';

// Connect to MongoDB
export async function connectToDb(MongoClient, ObjectId) {
  try {
    const client = await MongoClient.connect(API_MONGODB_CONNECTION);
    db = client.db(API_NAME);
    objectId = ObjectId
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

export function mongoConnection(){
    return db;
}

export function mongoObjecId(){
    return objectId;
}