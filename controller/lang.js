const express = require("express");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const Lang = require("../model/lang");



// update ball info
router.post(
    "/lang-info",
    catchAsyncErrors(async (req, res, next) => {
      try {
        const { num, lang} = req.body;
  
        const plang = await Lang.findOne({ lang });
        let newnum = Number(num);
  
        if (!plang) {
            plang= await Lang.create({
                lang,
                num
              });
        }else{
            plang.lang = lang;
        plang.num = plang.num+newnum;
        
  
        await plang.save();
        }
  
        
  
        res.status(201).json({
          success: true,
          plang,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );

  router.get(
    "/getlang",
    catchAsyncErrors(async (req, res, next) => {
      try {
        const plang = await Lang.find();
  
        res.status(201).json({
          success: true,
          plang,
        });
      } catch (error) {
        return next(new ErrorHandler(error, 400));
      }
    })
  );

  module.exports = router;