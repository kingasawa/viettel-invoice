const axios = require('axios');

const promisify = (inner) =>
  new Promise((resolve, reject) =>
    inner((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  );

const request = async({method,url,payload}) => {
  const resultCreate = await axios({
    method: 'POST',
    url: createInvoiceUrl,
    headers: { 'Content-Type': 'application/json'},
    auth: VIETTEL_AUTH,
    data: invoiceData,
    validateStatus: (status) => {
      return true
    },
  })
}

export {
  promisify
}