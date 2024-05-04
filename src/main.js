const express = require('express')
const app = express()
const port = 3000

const names = require('marvel-dc-name-generator');
const path = require('path');



// app.get('/', (req, res) => {
//   res.send(name)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/name', (req, res) => {

    const names = require('marvel-dc-name-generator');
    // const path = require('path');
    // Generate or retrieve the name
    let name = names.generate();

    console.log(name);

    // Send the name as JSON response
    res.json({ name: name });
    // res.json(name);
});


// app.get('', )

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// app.get('/', (req, res) => {
//     let name = names.generate();
//     // const name = randomName.first();
//     res.sendFile(path.join(__dirname, 'index.html'), { name });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// console.log(name)