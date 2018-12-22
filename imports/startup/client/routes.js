import { FlowRouter } from 'meteor/kadira:flow-router';

// layouts
import '../../ui/layouts/mainLayout';
// pages
import '../../ui/pages/home/home';
// categories
import '../../ui/pages/categories/addCategory';
import '../../ui/pages/categories/editCategory';
import '../../ui/pages/categories/categories';
// products
import '../../ui/pages/products/addProduct';
import '../../ui/pages/products/editProduct';
import '../../ui/pages/products/products';
// vendors
import '../../ui/pages/vendors/addVendor';
import '../../ui/pages/vendors/editVendor';
import '../../ui/pages/vendors/vendors';
// customers
import '../../ui/pages/customers/addCustomer';
import '../../ui/pages/customers/editCustomer';
import '../../ui/pages/customers/customers';
// accounts
import '../../ui/accounts/register/register';
import '../../ui/accounts/login/login';
// billing
import '../../ui/billing/bill';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Home' });
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action() {
    //if (Meteor.call('getUserCount') == 0) {
      BlazeLayout.render('MainLayout', { main: 'Register' });
    //} else {
      //BlazeLayout.render('MainLayout', { main: 'Home' });
    //}
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Login' });
  }
});

FlowRouter.route('/category', {
  name: 'addCategory',
  action() {
    BlazeLayout.render('MainLayout', { main: 'AddCategory' });
  }
});

FlowRouter.route('/categories', {
  name: 'categories',
  action() {
  	Meteor.subscribe('categories');
    BlazeLayout.render('MainLayout', { main: 'Categories' });
  }
});

FlowRouter.route('/category/:_id', {
  name: 'editCategory',
  action(params, queryParams) {
  	Meteor.subscribe('oneCategory', params._id);
    BlazeLayout.render('MainLayout', { main: 'EditCategory' });
  }
});

FlowRouter.route('/product', {
  name: 'addProduct',
  action() {
  	Meteor.subscribe('products');
    BlazeLayout.render('MainLayout', { main: 'AddProduct' });
  }
});

FlowRouter.route('/products', {
  name: 'products',
  action() {
  	Meteor.subscribe('products');
    BlazeLayout.render('MainLayout', { main: 'Products' });
  }
});

FlowRouter.route('/product/:_id', {
  name: 'editProduct',
  action(params, queryParams) {
  	Meteor.subscribe('oneProduct', params._id);
    BlazeLayout.render('MainLayout', { main: 'EditProduct' });
  }
});

FlowRouter.route('/vendor', {
  name: 'addVendor',
  action() {
  	Meteor.subscribe('vendors');
    BlazeLayout.render('MainLayout', { main: 'AddVendor' });
  }
});

FlowRouter.route('/vendors', {
  name: 'vendors',
  action() {
  	Meteor.subscribe('vendors');
    BlazeLayout.render('MainLayout', { main: 'Vendors' });
  }
});

FlowRouter.route('/vendor/:_id', {
  name: 'editVendor',
  action(params, queryParams) {
  	Meteor.subscribe('oneVendor', params._id);
    BlazeLayout.render('MainLayout', { main: 'EditVendor' });
  }
});

FlowRouter.route('/customer', {
  name: 'addCustomer',
  action() {
  	Meteor.subscribe('customers');
    BlazeLayout.render('MainLayout', { main: 'AddCustomer' });
  }
});

FlowRouter.route('/customers', {
  name: 'customers',
  action() {
  	Meteor.subscribe('customers');
    BlazeLayout.render('MainLayout', { main: 'Customers' });
  }
});

FlowRouter.route('/customer/:_id', {
  name: 'editCustomer',
  action(params, queryParams) {
  	Meteor.subscribe('oneCustomer', params._id);
    BlazeLayout.render('MainLayout', { main: 'EditCustomer' });
  }
});

FlowRouter.route('/bill', {
  name: 'bill',
  action(params, queyParams) {
    Meteor.subscribe('customers');
    Meteor.subscribe('products');
    Meteor.subscribe('bills');
    BlazeLayout.render('MainLayout', { main: 'Bill' })
  }
});

AutoForm.addHooks(['insertProductForm', 'insertVendorForm', 'insertCustomerForm', 'insertCategoryForm', 'editVendorForm', 'editCategoryForm', 'editProductForm', 'editCustomerForm'], {
	onSuccess(formType, result){
    switch (this.formId) {
      case 'insertProductForm':
        FlowRouter.go('products');
        break;

      case 'insertVendorForm':
        FlowRouter.go('vendors');
        break;

      case 'insertCustomerForm':
        FlowRouter.go('customers');
        break;

      case 'insertCategoryForm':
        FlowRouter.go('categories');
        break;

      case 'editVendorForm':
        FlowRouter.go('vendors');
        break;

      case 'editCategoryForm':
        FlowRouter.go('categories');
        break;

      case 'editProductForm':
        FlowRouter.go('products');
        break;

      case 'editCustomerForm':
        FlowRouter.go('customers');
    }
	}
});
