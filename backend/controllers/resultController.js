const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncError")
const Result = require("../model/resultModel")

//Get result of a user
exports.getSingleUserResult = catchAsyncErrors(async (req,res, next)=>{
    const user = await Result.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler("No result found for this user", 400))
    }
    res.status(200).json(user)
})

//Get result of all users
exports.getAllResult = catchAsyncErrors( async (req,res,next)=>{
    const results = await Result.find()
    if(results.length===0){
        return next(new ErrorHandler("No result found..!"))
    }
    res.status(200).json(results)
})

//Insert Result
exports.insertResult = catchAsyncErrors(async (req,res,next)=>{
    const {username, points, totalPoints} = req.body
    if(!username || !points || !totalPoints){
        return next(new ErrorHandler("Please provide the necessary details"))
    }
    const result = await Result.create({username, points, totalPoints})
    res.status(200).json("Result saved successfully...!")
})

//Delete Result
exports.deleteResult = catchAsyncErrors(async(req,res,next)=>{
    const result = await Result.findById(req.params.id)
    if(!result){
        return next(new ErrorHandler("Result not found", 400))
    }
    await result.deleteOne();
    res.status(200).json("Result for the user removed..!")
})