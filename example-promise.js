// const getTempCallback = (location, callback) => {
//   callback(undefined, 78);
//   callback('City not found')
// }
//
// getTempCallback('Denver', (err, temp) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Success', temp);
//   }
// });
//
// const getTempPromise = (location) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(79);
//       reject('City not found');
//     }, 3000)
//
//   });
// };
//
// getTempPromise('Denver').then((temp) => {
//   console.log('Promise success', temp);
// }, (err) => {
//   console.log('Promise error', err);
// });

// Challenge
const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof(a) === 'number' && typeof(b) === 'number') {
        resolve(a + b);
      } else {
        reject('Invalid arguments');
      }
    }, 1500);
  });
};

addPromise(2, 3).then((result) => {
  console.log(`Result: ${result}`);
}, (err) => {
  console.log(`Failed: ${err}`);
});
