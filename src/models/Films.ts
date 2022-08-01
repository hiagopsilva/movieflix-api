import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const FilmSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  banner: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  director: {
    type: String,
    require: true
  },
  producer: {
    type: String,
    require: true
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  }
})

FilmSchema.plugin(mongoosePaginate)

mongoose.model('Films', FilmSchema)
