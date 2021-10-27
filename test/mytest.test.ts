var request = require('supertest');
const appy = require('../server');


describe("test the post route", ()=>{
    test("Should return data saved when created ",async()=>{
      const res= await request(appy).post('/api/proxy/save/3').send({
            email:"benquarshie2@gmail.com",
            name:"Ben Quarshie",
      }) .expect(200);

          
     expect(res).toBe('data saved')
    
    });


    test("Should return error when executed ",async()=>{
        const res= await request(appy).post('/api/proxy/save/').send({
              email:"benquarshie2@gmail.com",
              name:"Ben Quarshie",
        }) .expect(404);
  
            
       expect(res).toBe('file  not found')
      
      });
});
