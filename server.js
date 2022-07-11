const express = require('express')
const path = require("path")
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// // setting up public dir
// app.use(express.static('public'));
// app.use("/UserImages", express.static(path.join(__dirname, "public/userImages")));

app.use(express.json());


app.get("/", (req, res)=>{
    res.status(200).json("Welcome")
})

// let arr = [7,'c1','d2',18,'dr',21,2,"!"];
// let numbersOnly = val =>{
//     if(typeof(val) ==='number')
//         return val;
// }
// let CharactersOnly = val =>{
//     if(typeof(val) ==='string'){
//         const ascii = val.charCodeAt();
//         if(ascii >64 && ascii <91)
//             return val;
//         else if(ascii >96 && ascii <123)
//             return val;
//     }
// }

// let number = arr.filter(CharactersOnly);
// console.log(number)

app.post("/challenge", async (req, res)=>{
    const arr = req.body.data;

    try {
        let numbersOnly = val =>{
            if(!isNaN(val))
                return val
        }
        let CharactersOnly = val =>{
            if(typeof(val) ==='string'){
                const ascii = val.charCodeAt();
                if(ascii >64 && ascii <91)
                    return val;
                else if(ascii >96 && ascii <123)
                    return val;
            }
        }
    
        let numbers = arr.filter(numbersOnly);
        let alphabets = arr.filter(CharactersOnly);
        console.log(numbers)
        const responseVal ={
            is_success:true,
            user_id:"Ayushi_Sinha_11062000",
            email:"1906169@kiit.ac.in",
            count:numbers.length + alphabets.length,
            roll_number:"1906169",
            numbers:numbers,
            alphabets:alphabets
        }

        console.log(responseVal);

        res.status(200).json(responseVal)
        
    } catch (error) {
     res.status(500).json({error:error, is_success:false})   
    }    
})


app.listen(process.env.PORT|| 9000, () => {
    console.log("Server started...")
})