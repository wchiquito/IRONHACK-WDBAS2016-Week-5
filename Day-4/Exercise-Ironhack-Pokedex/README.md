#Ironhack Pokedex

Do you remember those days when this little monsters call Pokemon were a fever for millions of kids? When capture the 151 criatures were the maximum goal to become a Pokemon Master? Those days are back!

We are going to build an app to be able to capture any Pokemon with a single click, and know everything about him like we were the Pokedex itself.

##Before we start

First thing you have to know is what is a Pokemon in case you were living in Mars since 20 years ago.

https://en.wikipedia.org/wiki/Pok%C3%A9mon

Besides, we want you to install a little component / add-on on your browser. His name is JSONViewer and is going to allow us to view all the JSON files in our navigator in a cleaner format.

##Iteration 1

Create a HTML structure where you are going to have a list of cards. This cards will have:

- A h2 tag with the name.
- The pokemon type/s.
- The description of the Pokemon.

But... Where is all that information? We have to check all that in the official website, take the data and transform it into Pokemon object!?

Don't worry, someone took the time to do it for us and share it with the world in the great... PokeAPI!! How it works? Let's see it...

http://pokeapi.co/

In this link we'll see a way obtain that precious data of every Pokemon that exist so far. For that, you can use the input of the home page to try the API. Call the Pokemon nº1!

``http://pokeapi.co/api/v2/pokemon/1/``

Can you see the generated JSON below? That is the object we are going to use to get most of the data we need, but for now try to repeat this same request from your own javascript file.

###SOLUTION

Create a Javascript file and call the function:

``$.get('http://pokeapi.co/api/v2/pokemon/1/')``

Next, print the response in the console and you'll see a pokemon object.

## Iteration 1

Make an input to send an ID. You will have to send this ID to the PokeAPI and bring the right pokemon to your web app. Then in the same page, try to fill a card with the name, type/s and the description of that pokemon. Remember to use some CSS in the card, we want a beautifull presentation for our pokemons.

## Iteration 2

Now we know how to get a specific pokemon, but what if we want to filter the pokemons by types? Try to get all the pokemon of fire type and show the first ten in cards.

HINT: Check the PokeAPI documentation and look for types.

## Iteration 3

Okey, we have different filters and we can obtain different pokemons... but what happens with their evolutions? Add a link in every card for each evolution to show a modal with the evolution card info.

## Bonus Iteration

Create a button in every card to save a Pokemon.

Besides, create a button in the left corner of your application to clean the screen and show all the saved pokemons.
