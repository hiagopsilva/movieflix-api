import mongoose from 'mongoose'

function connectionDatabase () {
  mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.as2kx.mongodb.net/?retryWrites=true&w=majority`)

  const db = mongoose.connection

  db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('connected to the database!'))
}

export default connectionDatabase
