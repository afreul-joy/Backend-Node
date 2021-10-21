const { query } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
  res.send('Hello Worldd i am third node !')
})
// 1st step create static data
const users = [
  { id: 0, name: 'joy',email:'joy@gmail.com',phone:'019528824412'},
  { id: 1, name: 'jhankar',email:'jhankar@gmail.com',phone:'019528824412'},
  { id: 2, name: 'sumit',email:'sumit@gmail.com',phone:'019528824412'},
  { id: 3, name: 'emran',email:'emran@gmail.com',phone:'019528824412'},
  { id: 4, name: 'neha',email:'neha@gmail.com',phone:'019528824412'},
]

//2nd step showing static data

app.get('/users', (req, res) => {
  //4th query parameter ব্যবহার 
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  }
  else {
  res.send(users)
  }
  
})

//3rd step 
// যদি কোন একটা প্রডাক্টের ডিটেইলস দেখাইতে হয় তাহলে প্রডাক্টের এর নাম এবং আইডি দিতে হবে 
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id]
  // console.log(req.params.id); 
  res.send(user)
}) 

app.get('/fruits', (req, res) => {
  res.send(['Mango','Apple','Blackbery'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
  res.send('Yummy Yummy Tok Ammm')
})

app.listen(port, () => {
  console.log('listening to port', port);
})