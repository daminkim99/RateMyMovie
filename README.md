# RateMyMovie

MVC architecture platform to give your own rating of the movies, with the ability to insert your own interpretation of the movies, and star the ones that you like! 

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](https://github.com/daminkim99/daminkim99/blob/main/images/RateMyMovie.gif)

## How It's Made:

**Tech used:**  JavaScript | Node.js | Express.js | MongoDB | Bootstrap | HTML5 | CSS3 

It is a full stack application following MVC architecture, where users can search for a movie of their choice via movie database external API and give their rating/review of the movie. I made use of the passport authentication, so the ratings are specfic to the users. The user's information along with their reviews are stored in the MongoDB. Application makes use of the templating engine ejs to render the HTML. The users have the ability to delete the reviews, or star/unstar them so they starred ones stay at the top. The web application is made fully responsive. 

## Optimizations

Some of the optimzations that can be made: 

- Add a movieboard feature where everyone's reviews can be shown, and have the ability to like other people's reviews. This would be done with adding a new view page and pulling all data out of the database, instead of pulling the one only specific to the user.
- Add your own title and movie poster along with reviews, instead of using the external API.
- Edit your own reviews to make a change. 

## Lessons Learned:

I honed my skill of using an MVC architecture on a full stack app. This enabled me to effectively add another layer of modularity and organization to my full stack application. I also utilitzed passport local strategy middleware authentication in node.js application to limit the strangers to access the app, adding another layer of security to the users.  

## Demo Login:

Demo Email: test1@test.com
Demo password: test1test1

## More Proejcts:
Take a look at these couple examples that I have in my own portfolio:

<!-- **Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel -->



