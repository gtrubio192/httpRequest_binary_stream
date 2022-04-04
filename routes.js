import express from 'express'
import { getBlogs } from './controller.js'

const router = express.Router()

// router.get('/', getLogs)
router.get('/:fileName', getBlogs)

export default router;