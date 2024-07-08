const mongoose = require("mongoose");
const { Schema } = mongoose;

const dimensionSchema = new Schema({
  width: { type: mongoose.Types.Decimal128, required: true },
  height: { type: mongoose.Types.Decimal128, required: true },
  depth: { type: mongoose.Types.Decimal128, required: true },
});

const reviewSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  reviewerEmail: {
    type: String,
    required: true,
  },
});
const metaSchema = new Schema({
    createdAt: {
        type: Date,
        required:true 
    },
    updatedAt: {
        type: Date,
        required:true 
    },
    barcode: {
        type: String,
        required:true 
    },
    qrCode: {
        type: String,
        required:true
    }
})

const productSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  discountPercentage: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  rating: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String, String],
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  dimensions: {
    type: dimensionSchema,
    required: true,
  },
  warrantyInformation: {
    type: String,
    required: true,
  },
  shippingInformation: {
    type: String,
    required: true,
  },
  availabilityStatus: {
    type: String,
    required: true,
  },
  reviews: {
    type: [reviewSchema],
    required: true,
    },
    returnPolicy: {
        type: String,
        required:true
    },
    minimumOrderQuantity: {
        type: String,
        required:true 
    },
    meta: {
        type: metaSchema,
        required:true 
    },
    thumbnail: {
        type: String,
        required:true 
    },
    images: {
        type: [String],
        required:true 
    },

});
const Product = mongoose.model('Product', productSchema)
module.exports = Product;