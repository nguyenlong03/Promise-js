const tinhtoan = (data, resolve, reject) => {
  if (data % 2 == 0) {
    resolve(data);
  } else {
    reject("Error");
  }
};

const aPromise1 = new Promise((resolve, reject) => {
  tinhtoan(4, resolve, reject);
});
const aPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    tinhtoan(8, resolve, reject);
  }, 3000);
});
const aPromise3 = new Promise((resolve, reject) => {
  tinhtoan(6, resolve, reject);
});

// const excume = async () => {
//   const newprom = await aPromise1;
//   console.log(`promise 1: ${newprom}`);
//   const newprom1 = await aPromise2;
//   console.log(`promise 2: ${newprom1}`);
//   const newprom2 = await aPromise3;
//   console.log(`promise 3: ${newprom2}`);
// };
// excume();

aPromise1
  .then((data) => {
    console.log(data);
    return aPromise2;
  })
  .then((data) => {
    console.log(data);
    return aPromise3;
  })
  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.error(err);
  });

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
