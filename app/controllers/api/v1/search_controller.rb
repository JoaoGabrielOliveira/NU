class Api::V1::SearchController < ApplicationController
  def index
    @artists = Artist.where('name LIKE ?', "%#{params[:q]}%")
    @albums = Album.where('title LIKE ?', "%#{params[:q]}%")
    @songs = Song.where('title LIKE ?', "%#{params[:q]}%")
  end
end