/* eslint-disable indent */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.paidStripeInvoice = functions
  .region("europe-west3")
  .firestore.document("invoices/{stripeInvoiceId}")
  .onUpdate((change) => {
    const updatedInvoice = change.after.data();

    if (
      updatedInvoice.orderId &&
      updatedInvoice.stripeInvoiceStatus === "paid"
    ) {
      // update order step when the order is paid
      /* console.log("order paid, updating order step..."); */
      const orderId = updatedInvoice.orderId;
      return db.doc(`orders/${orderId}`).update({
        step: 3,
      });
      /* .then(() => {
          console.log(`order ${orderId} set to step 3`);
        }); */
    } else if (!updatedInvoice.orderId) {
      return console.error("Cannot update order: no order id in invoice");
    } else {
      return null;
    }
  });
