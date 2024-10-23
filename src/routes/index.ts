import { Router } from 'express'
import products from './products'

const router = Router()

router.use('/api', products)

export { router }