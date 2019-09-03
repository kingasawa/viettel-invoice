const jsonServer = require('json-server')
const server = jsonServer.create()
const { config } = require('./config/config')
const { viettel } = require('./api')
const { NODE_ENV, SERVER_PORT } = config

import apicache from 'apicache'

let cacheOpts = { debug: true }
const cache = apicache.middleware

if (NODE_ENV === "production") cacheOpts.debug = false

apicache.options(cacheOpts)
server.use(jsonServer.bodyParser)

server.get('/version', async (req, res) => {
  res.status(200).send("Hello world")
})

server.post('/create/invoice', async(req,res) => {
  const invoiceData = req.body
  const result = await viettel.createInvoice(invoiceData)
  console.log('result', result);
  res.json(result)
})

server.post('/create/batchInvoice', async(req,res) => {
  const invoiceData = req.body
  const result = await viettel.createBatchInvoice(invoiceData)
  console.log('result', result);
  res.json(result)
})

server.post('/create/batchInvoicePreview', async(req,res) => {
  const invoiceData = req.body
  const result = await viettel.createBatchInvoicePreview(invoiceData)
  console.log('result', result);
  const { fileName, fileToBytes } = result
  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="${fileName}.pdf"`
  });

  const download = Buffer.from(fileToBytes.toString('utf-8'), 'base64');
  res.end(download);
})

server.get('/get/batchInvoice',async(req,res)=>{
  const { fileName, fileToBytes } = req.query
  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="${fileName}.pdf"`
  });

  const download = Buffer.from(fileToBytes.toString('utf-8'), 'base64');
  res.end(download);
})

server.get('/get/invoice', async(req,res) => {
  const invoiceData = req.query
  const result = await viettel.getInvoiceRepresentationFile(invoiceData)
  const { fileName, fileToBytes } = result
  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="${fileName}.pdf"`
  });

  const download = Buffer.from(fileToBytes.toString('utf-8'), 'base64');
  res.end(download);
})

server.listen(SERVER_PORT, () => {
  console.log('Server is running on PORT', SERVER_PORT, NODE_ENV)
})
