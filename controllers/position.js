
const Position=require('../models/Position');
const errorHandler=require('../utils/errorHandler');

module.exports.create = async function(req,res){
    try{
       const position= await new Position({
           name:req.body.name,
           price:req.body.price,
           category:req.body.category,
           user:req.user.id
       }).save();
        res.status(201).json(position);
    }catch(e){
        errorHandler(res,e)
    }
}

module.exports.getByCategoryId =async function(req,res){
    try{
        const positions=await Position.find({
             category: req.params.categoryId,
             user:req.user.id
        })
        res.status(200).json(positions)
    }catch(e){
        errorHandler(res,e)
    }
}

module.exports.delete = async function(req,res){
      try{
          await Position.delete({
              _id:req.params.id
          });
          res.status(200).json({
              message: 'it was deleted'
          });
        
    }catch(e){
        errorHandler(res,e)
    }
}

module.exports.update = async function(req,res){
      try{
        
          const position=await Position.findOneAndUpdate(
              {
              _id:req.params.id
          },
          {$set:req.body},
              {new:true}
          );
          res.status(200).json(position)
    }catch(e){
        errorHandler(res,e)
    }
}
