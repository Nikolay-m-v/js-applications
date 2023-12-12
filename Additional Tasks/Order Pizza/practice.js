"use strict";

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("404");
    }, 100);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("😎");
    }, 100);
  });
}

function onSuccess(data) {
  console.log(data);
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`);
}

fun1().then(fun2).then(onSuccess).catch(onError);
