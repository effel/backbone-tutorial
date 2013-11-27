/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CounterModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return CounterModel;
});