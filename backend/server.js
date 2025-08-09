//const express = require('express')
import express from 'express';


const app = express();



app.get('api//jokes', (req,res) =>{
  const jokes = [
    {
      id:1,
      title: 'A joke',
      content: 'This is a joke'

    },

    {
      id: 2,
      title:"Another joke",
      content: "This is another joke"
    },

    {
      id:3,
      title:"Third joke",
      content:"Another joke"
    },

    {
      id:4,
      title:"Fourth joke",
      content:"This is 4th joke"
    }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
  }
);
