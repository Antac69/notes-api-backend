const logger= (request,reponse, next)=>{
    console.log(request.method)
    console.log(request.path)
    console.log(request.body)
    console.log('----------')
    next()
  }
  
  module.exports= logger