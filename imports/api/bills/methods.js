import { Bills } from './bills';

Meteor.methods({
  addBill(billNo, customer, productsBought, totalDiscount, totalAmount, author) {
    return Bills.insert({
      billNo,
      customer,
      productsBought,
      totalDiscount,
      totalAmount,
      author,
      createdAt: new Date()
    });
  }
});
