/* eslint-disable indent */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.sentStripeInvoice = functions
  .region("europe-west3")
  .firestore.document("invoices/{stripeInvoiceId}")
  .onCreate((snap) => {
    // set order step to "awaiting payment" when an invoice is sent
    const invoice = snap.data();

    if (invoice.orderId) {
      return db.doc(`orders/${invoice.orderId}`).update({
        step: 2,
      });
    } else {
      return console.error("Cannot update order: no order id in invoice");
    }
  });

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
