
const { Schema, model } = require('mongoose');

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  username: {
    type: String,
    required: [true, 'El username es obligatorio']
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true
  },

  address: {
    street: { type: String },
    suite: { type: String },
    city: { type: String },
    zipcode: { type: String },
    geo: {
      lat: { type: String },
      lng: { type: String }
    }
  },

  phone: {
    type: String,
    required: [true, 'El telefono es obligatorio']
  },

  website: {
    type: String,
    required: [true, 'el sitio web es obligatorio']
  },

  company: {
    name: { type: String },
    catchPhrase: { type: String },
    bs: { type: String }
  }
});



userSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
}

module.exports = model('User', userSchema);
