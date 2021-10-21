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
  res.send(users)
})

//3rd step 
// যদি কোন একটা প্রডাক্টের ডিটেইলস দেখাইতে হয় তাহলে প্রডাক্টের এর নাম এবং আইডি দিতে হবে 
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id]
  // console.log(req.params.id); 
  res.send(user)
}) 

app.listen(port, () => {
  console.log('listening to port', port);
})