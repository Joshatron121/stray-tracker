
const express = require('express')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const bodyParser = require('body-parser')

const {app} = require('../server')
chai.use(chaiHttp)

const jsonParser = bodyParser.json()

describe('Server Functions', function(){
	it('Should start listening on port 8080 when run', function(){
		return chai.request(app)
			.get('/', function(req, res){
				res.status.should.be(200)
			})
	})
})