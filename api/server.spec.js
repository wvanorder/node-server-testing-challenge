const request = require('supertest');

const db = require('../data/dbConfig');
const server = require('./server.js');

describe('server', () => {
    //TEST
    it('tests are running with DB_ENV set as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    describe('GET /', () => {
        it('has something', () => {
            return request(server)
              .get('/')
              .then(res => {
                  expect(res.status).toBe(200)
              })    
        })
    })


    //TEST for getting all videogames
    describe('GET /api/videogames', () => {
        //first expectation
        it('returns 200 OK', () => {
            return request(server)
              .get('/api/videogames')
              .expect(200)
        });
        //second expectation
        it('has an array of games', () => {
            return request(server)
              .get('/api/videogames')
              .then(res => {
                expect(Array.isArray(res.body)).toBe(true)
              })
        })
    });


    //TEST
    describe('POST /api/videogames/newgame', () => {

        beforeEach(async () => {
            await db('videogames').truncate(); //cleans out table before a test
        })
        //first expectation
        it('should insert a game into the archive', async () => {
            return request(server)
            .post('/api/videogames/newgame')
            .send({
                name: '007',
                protagonist: 'James Bond'
            })
            .then(res => {
                expect(res.body.success);
                expect(res.body.game);
            })
        })

    })

});