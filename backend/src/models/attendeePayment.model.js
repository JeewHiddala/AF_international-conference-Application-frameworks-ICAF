const mongoose = require('mongoose');  

const AttendeePaymentSchema = new mongoose.Schema({
  date: { type : Date, default: Date.now },
  paymentMethod: { type: String, required: true, trim: true },
  paymentSlip: {
    data: Buffer,
    contentType: String
  },
  paymentReason: { type: String, required: true, trim: true },
  attendeeId: {type: Schema.Types.ObjectId, ref: 'attendees'}
});

const AttendeePayment = mongoose.model('attendeePayments', AttendeePaymentSchema);

module.exports = AttendeePayment;