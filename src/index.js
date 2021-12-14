import express from 'express'

import './helpers/database'

import taskRoutes from './routes/taskRoutes'

const app = express()

//config
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})

//midelwares
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.json({'msg' : 'Welcome to my app'})
})

app.use('/api',taskRoutes)

