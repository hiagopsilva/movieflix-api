import mongoose from 'mongoose'

function connectionDatabase () {
  mongoose.connect(process.env.URL_DB)

  const db = mongoose.connection

  db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('connected to the database!'))
}

export default connectionDatabase
