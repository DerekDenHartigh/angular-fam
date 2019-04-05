"use strict";
function FamCtrl() {
  const controller = this; 
  controller.family = [
    {name: "Barb", relation: "mom", age: 65},
    {name: "Paul", relation: "dad", age: 56},
    {name: "Michelle", relation: "step-mom", age: 50},
    {name: "Chris", relation: "half-brother", age: 41},
    {name: "Brandon", relation: "brother", age: 34},
    {name: "Adam", relation: "brother", age: 31},
    {name: "Tanner", relation: "step-brother", age: 24},
    {name: "Rhianna", relation: "step-sister", age: 21}
  ];
};
// full discolsure, I don't know if all these ages are legit, plus I put the step and half prefixes on just to show filter power
angular
.module("App")
.controller("FamCtrl", FamCtrl);