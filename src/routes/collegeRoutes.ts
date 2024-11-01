import express from "express"


const router = express.Router();

//Create a new college
router.post('/createcollege')

// List all colleges
router.get('/colleges')

//get details of a specific college
router.get('/colleges/:id')

//Update college information
router.put('/colleges/:id')

//delete a college 
router.delete('colleges/:id')

export default router