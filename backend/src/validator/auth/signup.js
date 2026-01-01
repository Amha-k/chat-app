import joi from"joi"

export const SignUpValidator = joi.object(
    {
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.pattern.base':
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character',
    }),
        name:joi.string().required()
    }
).prefs({stripUnknown:true})