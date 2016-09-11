class PokemonController < ApplicationController
  def index
    response = PokemonApi.request("pokedex/1")
    #@pokemon = response[:pokemon_entries]
    @pokemon = response['pokemon_entries']
    render :index
  end
end
