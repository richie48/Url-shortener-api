const router=express.Router()

router('/shortener').post(createShortUrl)

router('/:longurl').get(getShortenUrl)

