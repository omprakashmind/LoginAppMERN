const Joi=require('@hapi/joi')

const registerValidation=data=>{
const Schema={
    name:Joi.string()
        .min(6)
         .required(),
    username:Joi.string()
         .min(6)
         .required().email(),
    password:Joi.string()
         .min(6)
         .required()
};
     return Joi.validate(data,Schema)
}


const loginValidation=(data)=>{
    const Schema={
        username:Joi.string()
         .min(6)
         .required().email(),
    password:Joi.string()
         .min(6)
         .required()
    };
    return Joi.validate(data,Schema)
}





module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;