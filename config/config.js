module.exports.config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  SERVER_PORT: process.env.SERVER_PORT || '3000',
  WHITE_LIST: process.env.WHITE_LIST || [],
  VIETTEL_API_URL: process.env.VIETTEL_API_URL || 'https://demo-sinvoice.viettel.vn:8443/InvoiceAPI',
  CREATE_ORIGINAL_INVOICE_URL: process.env.CREATE_ORIGINAL_INVOICE_URL || 'InvoiceWS/createInvoice',
  CREATE_BATCH_INVOICE_URL: process.env.CREATE_BATCH_INVOICE_URL || 'InvoiceWS/createOrUpdateInvoiceDraft',
  CREATE_BATCH_INVOICE_PREVIEW_URL: process.env.CREATE_BATCH_INVOICE_PREVIEW_URL || 'InvoiceUtilsWS/createInvoiceDraftPreview',
  DELETE_INVOICE_URL: process.env.DELETE_INVOICE_URL || 'InvoiceWS/cancelTransactionInvoice',
  UPDATE_TAX_DECLARATION_URL: process.env.UPDATE_TAX_DECLARATION_URL || 'InvoiceUtilsWS/updateTaxDeclaration',
  GET_INVOICE_REPRESENTATION_URL: process.env.GET_INVOICE_REPRESENTATION_URL || 'InvoiceUtilsWS/getInvoiceRepresentationFile',
  GET_LIST_INVOICE_URL: process.env.GET_INVOICE_URL || 'InvoiceUtilsWS/getListInvoiceDataControl',
  INVOICE_SEND_MAIL: process.env.VIETTEL_SEND_MAIL || 'InvoiceUtilsWS/sendHtmlMailProcess',
  VIETTEL_ACCOUNT: process.env.VIETTEL_ACCOUNT || '0100109106-631',
  VIETTEL_PASSWORD: process.env.VIETTEL_PASSWORD || '123456a@A',
  VIETTEL_TEMPLATE: process.env.VIETTEL_TEMPLATE || '01GTKT0/010',
  VIETTEL_TAXCODE: process.env.TAXCODE || '0100109106-631',

  VIETTEL_AUTH: {
    username: process.env.VIETTEL_ACCOUNT || '0100109106-631',
    password: process.env.VIETTEL_PASSWORD || '123456a@A'
  }
}

//InvoiceWS/createOrUpdateInvoiceDraft