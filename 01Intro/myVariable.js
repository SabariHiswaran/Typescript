"use strict";
//string
Object.defineProperty(exports, "__esModule", { value: true });
var myName = "sabari";
var nameCaps = myName.toUpperCase(); //Only string methods can be performed since it is typed as string type
console.log(nameCaps);
//Number 
var myFavouriteNum = 5; //Only number methods can be performed since it is typed as string type
//But its more obvious that 5 is the number so typescript itself can inference the data type for us, so that we dont need to give data type for each and every places
var myNum = 5; //here i did not give type but however typescript infer this myNum as type number
//Boolean
var isPaid = true;
