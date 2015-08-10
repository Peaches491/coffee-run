/**
 * @file
 * Defines 'Orders' collections and helpers.
 */
/* globals Orders:true, Mongo */

// Declare 'Orders' collection.
Orders = new Mongo.Collection('orders');

// Define schema for Examples collection.
Orders.attachSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  }
});

// Add helpers to Examples collection object.
//Examples.helpers({
//  titleShort: function() {
//    return this.title.substring(0, 50);
//  }
//});
