/*jslint white: true*/
var kind = require('enyo/kind'),
    animate = require('enyo/scene'),
    Easings = require('enyo/easing');

var spincubeFace1 = {
    translate: "0, 0, 60",
    duration: 17
};

var spincubeFace2 = {
    rotate: "0, -90, 0",
    translate: "60, 0, 0",
    duration: 17
};

var spincubeFace3 = {
    rotate: "0, -90, 90",
    translate: "0, -60, 0",
    duration: 17
};

var spincubeFace4 = {
    rotate: "0, -180, 90",
    translate: "0, 0, -60",
    duration: 17
};

var spincubeFace5 = {
    rotate: "0, -270, 0",
    translate: "-60, 0, 0",
    duration: 17
};

var spincubeFace6 = {
    rotate: "-90, 0, 90",
    translate: "0, 60, 0",
    duration: 17
};

var spincube = [{
    rotate: "0, 90, 0",
    ease: Easings.quadInOut,
    duration: 1920
}, {
    rotate: "90, 90, 0",
    ease: Easings.quadInOut,
    duration: 2040
}, {
    rotate: "0, 180, 90",
    ease: Easings.quadInOut,
    duration: 2040
}, {
    rotate: "0, 270, 0",
    ease: Easings.quadInOut,
    duration: 1920
}, {
    rotate: "-90, 270, 0",
    ease: Easings.quadInOut,
    duration: 2040
}, {
    rotate: "0, 360, 0",
    ease: Easings.quadInOut,
    duration: 2040
}];

module.exports = kind({
    name: "stage",
    classes: "stage",
    components: [{
        name: "cubespinner",
        classes: "cubespinner",
        components: [{
            name: "face1",
            content: 1
        }, {
            name: "face2",
            content: 2
        }, {
            name: "face3",
            content: 3
        }, {
            name: "face4",
            content: 4
        }, {
            name: "face5",
            content: 5
        }, {
            name: "face6",
            content: 6
        }]
    }],

    rendered: kind.inherit(function(sup) {
        return function() {
            sup.apply(this, arguments);
            this.startAnimation();
        };
    }),

    startAnimation: function() {

        animate([this.$.face1], spincubeFace1);
        animate([this.$.face2], spincubeFace2);
        animate([this.$.face3], spincubeFace3);
        animate([this.$.face4], spincubeFace4);
        animate([this.$.face5], spincubeFace5);
        animate([this.$.face6], spincubeFace6);
        var cubeSpin = animate([this.$.cubespinner], spincube);
        // cubeSpin.repeat = true;
    }
});
