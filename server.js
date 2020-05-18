const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())

//connect the db
const db="mongodb+srv://nidhal123:nidhal123@wedding-3d2yz.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(db,{ useUnifiedTopology: true ,useNewUrlParser: true}, (err)=>{
    if(err) throw err
    console.log('database is connected....')
})
//define routes
app.use('/api/user', require('./routes/user'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/reservation', require('./routes/reservation'))
app.use('/api/salles', require('./routes/salles'))
app.use('/api/troupes', require('./routes/troupe'))
app.use('/api/vehicule', require('./routes/vehicule'))
app.use('/api/photographie', require('./routes/photograpie'))
app.use('/api/cakes', require('./routes/gateaux'))
app.use('/api/decors', require('./routes/decors'))


app.listen(5000, (err)=>{
    if(err)
    console.log('server is not running')
    else
    console.log('server is running on port 5000')
})