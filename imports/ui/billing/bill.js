import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Customers } from '../../api/customers/customers';
import { Bills } from '../../api/bills/bills';

import './bill.html';
import '../../ui/components/billdetail/billdetail';

Template.Bill.onCreated(function() {
});

Template.Bill.helpers({
  customers() {
    return Customers.find({author: Meteor.userId()}, {sort:{firstName: 1, lastName: 1}}).fetch();
  },
  currentDate() {
    let dateFormat = require('dateformat');
    return dateFormat(new Date(), 'dd/mm/yyyy');
  }
});

Template.Bill.events({
  'change #name'(event) {
    const selectedCustomerId = event.target.value;
    const selectedCustomer = Customers.findOne({ _id: selectedCustomerId });
    let address =
      selectedCustomer.address + "\n" + selectedCustomer.city +
      " " + selectedCustomer.pincode + "\n" + selectedCustomer.state +
      "\n\n" + selectedCustomer.phoneNumber;
    $('#address').val(address);
  },
  'keyup .amount'(event, instance) {
    if (event.keyCode == 13) {
      let count = $('tbody td:first-child').length + 1;
      Blaze.renderWithData(Template.BillDetail, { index: count }, $('table tbody')[0]);
      $('.product:last').focus();
    }
  },
  'click .save-print'(event) {
    let billNo = 0;
    if (Bills.find().count() == 0) {
      billNo = 1;
    } else {
      billNo = Bills.find({}, {sort: {createdAt: -1}}).fetch()[0].billNo + 1;
    }

    const customerId = $('#name').val();
    const billDate = new Date();
    let productsBought = [];
    let totalDiscount = 0.0;
    let totalAmount = parseFloat($('.totalamount').val()).toFixed(2);

    if (customerId) {
      $('tbody tr').each(function() {
        let productItem = {};
        let pId = 0;
        $(this).find('td input, td select').each(function(idx) {
          switch(idx) {
            case 0:
              productItem['sNo'] = $(this).val();
              break;

            case 1:
              productItem['productId'] = $(this).val();
              pId = $(this).val();
              break;

            case 2:
              productItem['unitPrice'] = $(this).val();
              break;

            case 3:
              productItem['quantity'] = $(this).val();
              Meteor.call('updateQuantity', pId, $(this).val());
              break;

            case 4:
              productItem['discount'] = $(this).val();
              totalDiscount += parseFloat($(this).val()).toFixed(2);
              break;

            case 5:
              productItem['amount'] = $(this).val();
              break;
          }
        });
        productsBought.push(productItem);
      });

      Meteor.call('addBill', billNo, customerId, productsBought, totalDiscount, totalAmount, Meteor.userId());
    } else {
      alert("Select Customer for Invoice");
    }
  }
});
