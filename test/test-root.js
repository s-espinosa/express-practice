var chai     = require('chai');
var chaiHttp = require('chai-http');
var server   = require('../app')
var expect   = chai.expect;
var pry      = require('pryjs')

chai.use(chaiHttp);

describe('Root', function() {

  it('should return a 200', function(done){
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should be HTML', function(done){
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        expect(res).to.be.html;
        expect(res.text).to.include('Welcome to Express')
        done();
      });
  });

  it('should inlcude the phrase `Welcome to Express`', function(done){
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        expect(res.text).to.include('Welcome to Express')
        done();
      });

  })

})
