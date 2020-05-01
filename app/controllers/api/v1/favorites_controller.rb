class Api::V1::FavoritesController < ApplicationController
  def index
    @fav_artists = current_user.favorites.where(favoritable_type "Artist").map(& :favoritable)
    @fav_albums = current_user.favorites.where(favoritable_type "Albums").map(& :favoritable)
    @fav_songs = current_user.favorites.where(favoritable_type "Songs").map(& :favoritable)
  end

  def create
    @favorite = load_favorite
    head :ok
  end

  def destroy
    @favorite = load_favorite
    @favorite.destroy
    head :ok
  end

  private
  def load_favorite
    current_user.favorites.create(favoritable_type: params[:favorite], favoritable_id: params[:id])
  end
end
