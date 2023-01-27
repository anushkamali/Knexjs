const express = require('express');
const app = express();
const knex = require('./db');
app.use(express.json());
app.get('/',(req,res) => {
    res.send("Hello Knex Intro")
});

app.post('/test_users', (req,res) => {
    knex('test_users').insert({
        first_name:'Anushka',
        last_name:'Mali'
    }).then(() => {
        knex.select().from('test_users').then((users) => {
            res.send(users);
        });
    });
});

app.put('/test_users', (req,res) => {
    knex('test_users').where('id', 2).update({
        first_name:'Sneha',
        last_name:'Gaur'
    }).then(() => {
        knex.select().from('test_users').then((users) => {
            res.send(users);
        });
    });
});

app.delete('/test_users', (req,res) => {
    knex('test_users').where('id', 1).del().then(() => {
        knex.select().from('test_users').then((users) => {
            res.send(users);
        });
    });
});

app.get('/test_users', (req,res) => {
    // knex.select().from('test_users').then((users) => {
    //     res.send(users);
    // })
    knex.raw('select * from test_users').then((users) => {
        res.send(users.rows);
    });
});

app.listen('8080', () => {
    console.log('Server started at port 8080')
});