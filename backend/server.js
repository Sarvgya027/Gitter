import express from "express"
import userRoutes from "./routes/user.route.js"
import exploreRoutes from "./routes/user.explore.js"
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
app.use(cors());

dotenv.config();

app.use("/api/users", userRoutes)
app.use('/api/explore', exploreRoutes)


app.listen(5000, () => {
  console.log('server sarted')
})