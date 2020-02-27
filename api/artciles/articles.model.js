var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articlesSchema = new Schema(
        {
            name:   {
                type: String,
                unique : false,
                required : true
            },
            quantite:   {
                type: Number,
                unique : false,
                required : true
            },
            prix: Number,
            vendeur:    {
                type: String,
                unique : false,
                required : true
            },
            description:    {
                type: String,
                unique : false,
                required : true
            }
        }, 
        { timestamps: true }
    );

module.exports = articlesSchema;