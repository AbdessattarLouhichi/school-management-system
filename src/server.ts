import express from 'express'
import sequelize from './config/database'
import tenantRoutes from './routes/tenantRoutes'
import studentRoutes from './routes/studentRoutes'
import authRoutes from './routes/authRoutes'

//Configuration and Middlewares
const app = express()
app.use(express.json())
sequelize.sync().then(() => {
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
 });
});   

//  Routes
app.use('/api/tenants', tenantRoutes);
app.use('/api', studentRoutes);
app.use('/api/users', authRoutes);