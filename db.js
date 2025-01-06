import { connect } from 'mongoose';

// Function to connect to the MongoDB database
const connectDatabase = () => {
    connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB Connected to server');
    })
    .catch((err) => {
        console.log("Error in MongoDB connection: " + err);
    });
};

export default connectDatabase;