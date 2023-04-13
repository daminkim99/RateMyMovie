const { default: axios } = require("axios")
const { request } = require("express")

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
        console.log(req.params.names)
        let movieCan = []
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${req.params.names}&page=1&include_adult=false&year=2022`)
            .then(response => response.data.results)
            .then(results => {
                for(element of results){
                    movieCan.push({id:element.id, title:element.original_title, poster:element.poster_path, release_date:element.release_date})
                }
                // console.log(movieCan)
                res.render('browse.ejs', {movie:movieCan, request:req.params.names})
            })
            .catch(error => console.log(error))
        // try{
        //     res.render('add.ejs')
        // } catch(err){
        //     console.log(err)
        // }
    }
   
}

    // todos: todoItems, left: itemsLeft,