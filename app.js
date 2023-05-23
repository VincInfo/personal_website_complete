const express = require("express");
const app = express();
const cors = require('cors')


app.get('/myIp', (req, res) => {
  res.send(req.headers['x-forwarded-for'] || req.socket.remoteAddress)
})

const PORT = process.env.PORT || 8080;

app.use(express.static("dist"));
app.use(cors())
app.listen(PORT, () => {
  console.log("server started on port 8080");
});
