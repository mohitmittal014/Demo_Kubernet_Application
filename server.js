const express = require('express')
const studentRoutes = require('./src/employee/routes');
const app = express();

const PORT = 9000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(express.json());
app.use('/api/v1/employees', studentRoutes);

app.listen(PORT, () => console.log(`application is listening at ${PORT}`));