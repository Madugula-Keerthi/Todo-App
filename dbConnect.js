import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let cachedClient = null;

export default async function dbConnect() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    cachedClient = client;
    return client;
  } catch (error) {
    throw new Error('Failed to connect to MongoDB');
  }
}
