const router=express.Router()

router('/shortener').post(shortenUrlController)