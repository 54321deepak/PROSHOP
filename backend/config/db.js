import mongoose from 'mongoose'
 
const DB ="mongodb+srv://proshop:proshop@cluster0.6a5pgtm.mongodb.net/proshop?retryWrites=true&w=majority"


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      
      
    })

    console.log(`MongoDB Connected `)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
} 

export default connectDB
