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
    }}

    // todos: todoItems, left: itemsLeft,