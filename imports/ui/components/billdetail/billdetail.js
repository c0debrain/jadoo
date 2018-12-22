import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Products } from '../../../api/products/products';

import './billdetail.html';

Template.BillDetail.onCreated(function() {
  this.productId = new ReactiveVar();
});

Template.BillDetail.helpers({
  products() {
    return Products.find({author: Meteor.userId()}).fetch();
  }
});

Template.BillDetail.events({
  'change .product'(event, instance) {
    const selectedProductId = event.target.value;
    if (selectedProductId) {
      instance.productId.set(selectedProductId);
      const product = Products.findOne({ _id: selectedProductId });
      const salePrice = parseFloat(product.salePrice);
      const quantity = product.quantity;
      const discount = parseFloat($(event.target).parent().parent().find('.discount').val());
      const amount = (salePrice - discount) * quantity;

      $(event.target).parent().parent().find('.unitprice').val(salePrice);
      $(event.target).parent().parent().find('.quantity').val(quantity);
      $(event.target).parent().parent().find('.amount').val(amount);
    } else {
      $(event.target).parent().parent().find('.unitprice').val('');
      $(event.target).parent().parent().find('.quantity').val('');
      $(event.target).parent().parent().find('.amount').val('');
    }
  },
  'keyup .quantity'(event, instance) {
    const unitPrice = $(event.target).parent().parent().find('.unitprice').val();
    const discount = parseFloat($(event.target).parent().parent().find('.discount').val());
    const quantity = $(event.target).val();
    const quantityInStock = Products.findOne({ _id: instance.productId.get() }).quantity;

    if (quantity > quantityInStock) {
      alert('Quantity cannot exceed as in stock');
    } else {
      const amount = parseFloat((unitPrice - discount) * quantity).toFixed(2);
      $(event.target).parent().parent().find('.amount').val(amount);

      let totalAmount = 0.0;
      $('.amount').each(function() {
        totalAmount += parseFloat($(this).val());
      });

      const tax = parseFloat($('.tax').val());
      totalAmount = totalAmount + ((totalAmount*tax)/100.0);
      $('.totalamount').val(totalAmount.toFixed(2));
    }
  },
  'keyup .discount'(event) {
    const unitPrice = parseFloat($(event.target).parent().parent().find('.unitprice').val());
    const discount = parseFloat($(event.target).val());
    const quantity = $(event.target).parent().parent().find('.quantity').val();

    if (discount > unitPrice) {
      alert('Discount cannot exceed Unit Price');
    } else {
      const amount = parseFloat((unitPrice - discount) * quantity).toFixed(2);
      $(event.target).parent().parent().find('.amount').val(amount);

      let totalAmount = 0.0;
      $('.amount').each(function() {
        totalAmount += parseFloat($(this).val());
      });

      const tax = parseFloat($('.tax').val());
      totalAmount = totalAmount + ((totalAmount*tax)/100.0);
      $('.totalamount').val(totalAmount.toFixed(2));
    }
  },
  'click .fa-times'(event) {
    if ($('tbody tr').length > 1) {
      if (confirm('Are you sure?')) {
        $(event.target).parent().parent().remove();

        let totalAmount = 0.0;
        $('.amount').each(function() {
          if (parseFloat($(this).val()))
            totalAmount += parseFloat($(this).val());
        });

        const tax = parseFloat($('.tax').val());
        totalAmount = totalAmount + ((totalAmount*tax)/100.0);
        $('.totalamount').val(totalAmount.toFixed(2));

        let count = 0;
        $('tbody tr td:first-child').each(function(index) {
          $(this).find('input').val(index+1);
          count = index;
        });
      }
    } else {
      alert('Cannot delete a single bill item');
    }
  }
});
