"use strict";

let listNumbers = [];

function get100Numbers () {
    for (let i = 1; i < 101; i++) {
        listNumbers.push([i]) 
            };
};
function getReversed100Numbers () {
listNumbers.reverse();
}

get100Numbers();
getReversed100Numbers();

