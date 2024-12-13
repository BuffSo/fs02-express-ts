import mongoose from 'mongoose';

async function connectDB() {


  mongoose.connect('mongodb://root:example@localhost:27017/pandamaket_dev?authSource=admin')
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.error('MongoDB Connection Error:', err))

  mongoose.connection.on('error', (error) => {
    console.log('MongoDB Error:', error)
  })
}

export default connectDB;
