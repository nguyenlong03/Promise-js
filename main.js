//      cách in data api ra màn hình
// const fetchApi = async () => {
//   let request = "https://jsonplaceholder.typicode.com/photos";
//   try {
//     let response = await fetch(request);
//     let data = await response.json();
//     const container = document.getElementById("data-container");
//     container.innerHTML = data
//       .slice(0, 10)
//       .map(
//         (item) => `
//         <h2>${item.title}</h2>
//         <img src="${item.thumbnailUrl}" alt="${item.title}" style="max-width: 150px;" />
//       </div>
//     `
//       )
//       .join("");
//   } catch (error) {
//     console.log("error");
//   }
// };
// fetchApi();

//           lấy api = axios ASYNC AWAIT
// const testsdata = async () => {
//   const request = "https://jsonplaceholder.typicode.com/photos";
//   const todo = async () => {
//     response = await axios.get(request);
//     return response.data;
//   };

//   let btn = document.getElementById("btn");
//   btn.innerHTML = "click me";
//   btn.addEventListener("click", async () => {
//     try {
//       const data = await todo();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   console.log(btn);
// };
// testsdata();

// const tinhtoan = (data, resolve, reject) => {
//   if (data % 2 == 0) {
//     resolve(data);
//   } else {
//     reject("Error");
//   }
// };

// const aPromise1 = new Promise((resolve, reject) => {
//   tinhtoan(4, resolve, reject);
// });
// const aPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     tinhtoan(8, resolve, reject);
//   }, 3000);
// });
// const aPromise3 = new Promise((resolve, reject) => {
//   tinhtoan(6, resolve, reject);
// });

// const excume = async () => {
//   const newprom = await aPromise1;
//   console.log(`promise 1: ${newprom}`);
//   const newprom1 = await aPromise2;
//   console.log(`promise 2: ${newprom1}`);
//   const newprom2 = await aPromise3;
//   console.log(`promise 3: ${newprom2}`);
// };
// excume();

// aPromise1
//   .then((data) => {
//     console.log(data);
//     return aPromise2;
//   })
//   .then((data) => {
//     console.log(data);
//     return aPromise3;
//   })
//   .then((data) => {
//     console.log(data);
//   })

//   .catch((err) => {
//     console.error(err);
//   });

// promise => cấu trúc như sau :
/*
LƯU Ý : KHI VIẾT THẰNG PROMISE ĐỂ NÓ CHẠY ĐỒNG BỘ : PHẢI ĐỢI HÀM PROMISE1 CHẠY XONG THÌ HÀM 
PROMISE 2 MỚI ĐƯỢC CHẠY THÌ TRONG HÀM PROMISE 1 PHẢI RETURN LẠI HÀM PROMISE 2 (VÍ DỤ NHƯ DÒNG 35 , 39)

const aPromise1 = new Promise((resolve, reject) => {
      tham số resolve là tham số trả về giá trị đúng 
      tham số reject nó trả về giá trị false
      new promise giá trị khởi tạo 1 promise
});
  Cách lấy ra giá trị của 1 promise
  gọi lại hàm :
  aPromise1.then((data) => {
    console.log(data);  => nếu hàm promise trả về giá trị là true (resolve) thì ta sử dụng hàm .then()
 })

còn nếu hàm promise mà trả về giá trị là false (reject) thì ta sử dụng hàm .cath()
 .catch((err) => {
    console.error(err);
  });

  cái nhược điểm của thằng promise khi chạy đồng bộ là chấm nhiều then() đây là nhược điểm để ta chuyển qua SỬ DỤNG
  async await ví dụ như trên từ dòng 33

  ĐỂ KHẮC PHỤC ĐƯỢC NHƯỢC ĐIỂM CỦA PROMISE THÌ TA SỬ DỤNG ASYNC AWAIT NHƯ SAU:

  const TestAsync = async(từ khóa bắt buộc)() =>{
     const newprom = await aPromise1;
     const newprom1 = await aPromise2;  
     const newprom2 = await aPromise3;
 
    }
     TestAsync();
     
  
  */

// callback hell

// function progames1() {
//
//     setTimeout(() => {
//       console.log(1);
//       resolve(1);
//     }, 2000);
//
// }
// function progames2(callback) {
//   setTimeout(() => {
//     console.log(2);
//     callback();
//   }, 1000);
// }
// function progames3(callback) {
//   setTimeout(() => {
//     console.log(3);
//     callback();
//   }, 5000);
// }

// function progames4() {
//   console.log(4);
// }

// progames1(() => {
//   progames2(() => {
//     progames3(() => {
//       progames4();
//     });
//   });
// });

//  sử dụng promise
function progames1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(1);
    }, 2000);
  });
}
function progames2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);
      resolve(2);
    }, 1000);
  });
}
function progames3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3);
      resolve(3);
    }, 5000);
  });
}

function progames4() {
  return new Promise((resolve, reject) => {
    resolve(4);
  });
}

// progames1()
//   .then((data) => {
//     console.log(data);
//     return progames2();
//   })
//   .then((data) => {
//     console.log(data);
//     return progames3();
//   })
//   .then((data) => {
//     console.log(data);
//     return progames4();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// sử dụng async await

// const run = async () => {
//   await progames1();
//   await progames2();
//   await progames3();
//   let data4 = await progames4();
//   console.log(data4);
// };
// run();
progames1();
progames2();
progames3();
progames4();
