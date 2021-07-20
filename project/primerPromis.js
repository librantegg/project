const kek = new Promise((resolve, reject) => {
    console.log('vnutri do timeout');
    setTimeout(() => {
    console.log('vnutri promise');
    resolve("result in then");

    }, 2000);
  })
    .finally(() => console.log("finally завершён"))
    .then(result => console.log(result)); // <-- .then обработает результат
    