/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var CounterView = Backbone.View.extend({
        el: '.counter',
        template: JST['app/scripts/templates/counter.ejs'],

        render: function () {
            this.$el.html(this.template({}));
        }
    });

    return CounterView;
});