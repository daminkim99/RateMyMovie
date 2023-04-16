const { default: axios } = require("axios")
const { request } = require("express")
const Rating = require("../models/Rating")

//functions for the app 

module.exports = {
    getRatings: async (req,res)=>{
        try{
            const movies = await Rating.find({user:req.user.id}).sort({starred: "desc" , createdAt: "desc"})
            res.render('ratings.ejs', {movies: movies , user: req.user, activeLink:'home'})

        }catch(err){
            console.log(err)
        }
    },

    getMovie: async(req,res) => {
        try{
            res.render('add.ejs', {activeLink:'add'})
        } catch(err){
            console.log(err)
        }
    },
    searchMovie: async(req,res) => {
        try{
            let movieCan = []
            //get data from external movie db api 
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${req.query.movieTitle}&year=${req.query.movieYear}`)
                .then(response => response.data.results)
                .then(results => {
                    if (Object.keys(results).length ===0){
                        res.render('404.ejs', {request:req.query.movieTitle, activeLink: "add"})
                    } else {
                        for(element of results){
                            movieCan.push({id:element.id, title:element.original_title, poster:element.poster_path, release_date:element.release_date})
                        }
                        res.render('browse.ejs', {movie:movieCan, request:req.query.movieTitle, activeLink:'add'})
                    }
                })
                .catch(error => console.log(error))

        } catch(err){
            console.log(err)
        }
    },
    addMovie: async(req,res) => {
        try{
            //breaks userpick into appropriate variables 
            let userPick = req.body.userpick.split(',')
            await Rating.create({
                title:userPick[2],
                poster:userPick[1],
                title_id:userPick[0],
                review: req.body.review,
                rating:req.body.rating,
                release_date: userPick[3],
                user: req.user.id
            })
            console.log("Post has been added!")
            res.redirect('/ratings')
        } catch(err){
            console.log(err)
        }
    },
    deleteRating: async(req,res) => {
        try {
            await Rating.deleteOne({_id: req.params.id})
            console.log("Deleted Post");
            res.redirect("/ratings");
          } catch (err) {
            res.redirect("/ratings");
          }
    },
    starMovie: async(req,res) => {
        try {
            await Rating.findOneAndUpdate({_id: req.params.id}, {starred:1})
            console.log("starred Post")
            res.redirect("/ratings");
          } catch (err) {
            res.redirect("/ratings");
          }
    },
    unStarMovie: async(req,res) => {
        try {
            await Rating.findOneAndUpdate({_id: req.params.id}, {starred:0})
            console.log("unstarred Post");
            res.redirect("/ratings");
          } catch (err) {
            res.redirect("/ratings");
          }
    },
}
