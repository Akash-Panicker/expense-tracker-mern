import mongoose from 'mongoose';
const { Schema } = mongoose;

const transactionSchema = new Schema({
    amount: Number,
    desciption : String,
    date : {type: Date, default: new Date()},
    createdAt : {type: Date , default: new Date.now},
});

export default new mongoose.model('Transaction',transactionSchema);