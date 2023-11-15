let promiseForResponse = fetch("https://meowfacts.herokuapp.com/");

//Promises (asyncs) could be worked with using async or .then
//promiseForResponse.then((response) => console.log(response));

let promiseForBody = promiseForResponse.then((response) => response.json());
console.log("promiseForBody=" + promiseForBody);

promiseForBody.then((facts) => console.log("facts= " + facts));
