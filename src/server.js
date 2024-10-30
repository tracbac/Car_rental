const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

app.post('/api/register', (req, res) => {
  const newUser = req.body;

  // Đường dẫn tới file signupData.json
  const filePath = path.join(__dirname, 'src/data/signupData.json');

  // Đọc file hiện tại và thêm user mới
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read data' });

    const users = JSON.parse(data);
    users.push(newUser);

    // Ghi lại file với user mới
    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Failed to save data' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
