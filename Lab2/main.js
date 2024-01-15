// Bài 1
// const class1 = [ {
//     mssv: 'PS0000',
//     name: 'Nguyen Van A',
//     avgPoint: 8.9,
//     avgTraningPoint: 7,
//     status: 'pass',
//     }, {
//     mssv: 'PS0001',
//     name: 'Nguyen Van B',
//     avgPoint: 4.9,
//     avgTraningPoint: 10,
//     status: 'pass',
//     }
//     ];
//     const class2 = [ {
//     mssv: 'PS0002',
//     name: 'Nguyen Van C',
//     avgPoint: 4.9,
//     avgTraningPoint: 10,
//     status: 'failed',
//     }, {
//     mssv: 'PS0003',
//     name: 'Nguyen Van D',
//     avgPoint: 10,
//     avgTraningPoint: 10,
//     status: 'pass',
//     },
//     {
//     mssv: 'PS0004',
//     name: 'Nguyen Van E',
//     avgPoint: 10,
//     avgTraningPoint: 2,
//     status: 'pass',
//     },
//     ]    

//     // gộp 2 mảng lại và lọc ra những sinh viên có status failed
// const allStudent = class1.concat(class2).filter(student => student?.status !== 'failed');
// console.log(allStudent);

// function sortBy(field) {
//     return function(a, b) {
//       return b[field] - a[field] 
//     };
//   }
// //Danh sách sinh viên có điểm số từ cao xuống thấp.
// const listStudentByavgPoint = [...allStudent];
// listStudentByavgPoint.sort(sortBy('avgPoint'));
// console.log(listStudentByavgPoint);
// //Danh sách sinh viên có điểm rèn luyện từ cao xuống thấp.
// const avgTraningPoint = [...allStudent];
// avgTraningPoint.sort(sortBy('avgTraningPoint'));
// console.log(avgTraningPoint);
// // Lấy ra ong vàng
// const ongVang = listStudentByavgPoint.find((ongvang,index) => index === 0);
// console.log(ongVang);


// Bai2
// Data input
// const oldData = [
//         {code: 'ab', name : 'Son môi'},
//         {code: 'ac', name : 'Sửa rửa mặt'},
//         {code: null, name : null},
//         {code: null, name : ''},  
// ];

// // remove code or name different null, undefined
// const newdata = oldData.filter(data => (data?.code && data?.name) !== null || undefined);
// console.log(newdata);

// // parseArraytoObject
// const outputObject = newdata.reduce((acc,curr)=> {
//   return  {...acc,[curr?.code] : curr}
// } ,{});
// console.log(outputObject);
// // in ra thong tin mỹ phẩm có mã ab
// for(key in outputObject){
//     if(key =='ab') {
//         console.log(outputObject[key]);
//     }
// }

// Bai3
// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     },2000);
// });
// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('some bug');
//     },2000);
// });

// const getList = async () => await fetch('https://65a4caf752f07a8b4a3db177.mockapi.io/api/lab2/1');
// use Promise all
// Promise.all([firstPromise, secondPromise, getList()])
//     .then(results => {
//         console.log('All promises completed successfully.');
//         console.log(results);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });



// use Promise.allSettled
// Promise.allSettled([firstPromise, secondPromise, getList()])
//     .then(results => {
//         console.log('All promises completed.');
//         console.log(results);
//     })
//     .finally(() => {
//         console.log('Promise set has been finished.');
//     });


