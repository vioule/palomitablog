const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: { type: String, required: true, maxlength: 50 },
  categorie: { type: String, required: true },
  date: { type: Date, default: Date.now },
  content: {
    type: [{
      key: { type: String, required: true },
      data: { type: String, required: true },
      alt: { type: String, required() { return this.key.startsWith('I'); } },
    }],
    required: true,
  },
});

exports.Article = mongoose.model('Article', articleSchema, 'articles');
