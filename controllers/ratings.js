const { default: axios } = require("axios")
const { request } = require("express")
const Rating = require("../models/Rating")

module.exports = {
    getRatings: async (req,res)=>{
        console.log(req.user)
        try{
            // const todoItems = await Todo.find({userId:req.user.id})
            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('ratings.ejs', {user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getMovie: async(req,res) => {
        // console.log(req.user)
        try{
            res.render('add.ejs')
        } catch(err){
            console.log(err)
        }
    },
    searchMovie: async(req,res) => {
        let movieCan = []
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${req.query.movieTitle}&year=${req.query.movieYear}`)
            .then(response => response.data.results)
            .then(results => {
                for(element of results){
                    movieCan.push({id:element.id, title:element.original_title, poster:element.poster_path, release_date:element.release_date})
                }
                // console.log(movieCan)
                res.render('browse.ejs', {movie:movieCan, request:req.params.names})
            })
            .catch(error => console.log(error))
    },
    addMovie: async(req,res) => {
        console.log(req.body)
        //breaks userpick into appropriate variables 
        let userPick = req.body.userpick.split(',')
        await Rating.create({
            title:userPick[2],
            poster:userPick[1],
            title_id:userPick[0],
            review: req.body.review,
            rating:req.body.rating,
            release_date: userPick[3]
        })
        console.log("Post has been added!")
        res.redirect('/')
    }
   
}

    // todos: todoItems, left: itemsLeft,