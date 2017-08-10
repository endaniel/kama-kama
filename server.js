const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/a', (req, res) => {
    res.json([{match: 'מכבי ת"א נגד בני סכנין', sport: 'כדורגל', date: '17/08/2017'},
          {match: 'מכבי חיפה נגד מכבי אילת', sport: 'כדורסל', date: '19/08/2017'}]);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);