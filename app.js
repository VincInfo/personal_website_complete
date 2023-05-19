const express = require("express");
const app = express();
const cors = require('cors')


app.get('/', (req, res) => {
  console.log('00000000000000000000000000000000000000000000000000000000000000000000')
  res.send('00000000000000000000000000000000000000000')
})

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080;

app.use(express.static("dist"));
app.use(cors())
app.listen(PORT, () => {
  console.log("server started on port 8080");
});
