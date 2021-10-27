import {NextFunction} from 'express';

var auth = function(req:any,res:any,next:NextFunction){
  
  if(req.session.userId) return next()

  return res.status(403).send('You need to sign in');
}

module.exports.auth = auth;