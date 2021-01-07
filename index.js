const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;
const root = path.join(__dirname);

app.use(express.json());
app.use(express.static(root));
app.set('views', root);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: root  });
});

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});

