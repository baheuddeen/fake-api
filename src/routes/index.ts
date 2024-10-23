import { Router } from 'express'
import products from './products'

const router = Router()

router.use('/fake-api', products)

export { router }