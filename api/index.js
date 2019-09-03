const axios = require('axios');
const { config } = require('../config/config')
const { WHITE_LIST, VIETTEL_API_URL, CREATE_ORIGINAL_INVOICE_URL,
  CREATE_BATCH_INVOICE_URL, DELETE_INVOICE_URL, GET_INVOICE_REPRESENTATION_URL,
  VIETTEL_TAXCODE, VIETTEL_ACCOUNT, VIETTEL_PASSWORD, VIETTEL_TEMPLATE,
  VIETTEL_AUTH, CREATE_BATCH_INVOICE_PREVIEW_URL
} = config

const axiosConfig = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  auth: VIETTEL_AUTH,
  validateStatus: (status) => {
    return true
  },
}

module.exports.viettel = {
  createInvoice: async (invoiceData) => {
    axiosConfig.url = `${VIETTEL_API_URL}/${CREATE_ORIGINAL_INVOICE_URL}/${VIETTEL_TAXCODE}`
    axiosConfig.data = invoiceData
    const resultCreate = await axios(axiosConfig)
    return resultCreate.data
  },

  createBatchInvoice: async (invoiceData) => {
    axiosConfig.url = `${VIETTEL_API_URL}/${CREATE_BATCH_INVOICE_URL}/${VIETTEL_TAXCODE}`
    axiosConfig.data = invoiceData
    const resultCreate = await axios(axiosConfig)
    return resultCreate.data
  },

  createBatchInvoicePreview: async (invoiceData) => {
    axiosConfig.url = `${VIETTEL_API_URL}/${CREATE_BATCH_INVOICE_PREVIEW_URL}/${VIETTEL_TAXCODE}`
    axiosConfig.data = invoiceData
    const resultCreate = await axios(axiosConfig)
    return resultCreate.data
  },

  getInvoiceRepresentationFile: async (invoiceData) => {
    console.log('invoiceData', invoiceData);
    axiosConfig.url = `${VIETTEL_API_URL}/${GET_INVOICE_REPRESENTATION_URL}`
    axiosConfig.data = invoiceData
    const resultGet = await axios(axiosConfig)
    return resultGet.data
  },

}
