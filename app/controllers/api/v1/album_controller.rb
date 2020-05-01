class Api::V1::AlbumController < ApplicationController
    def index
        @albuns = Album.all
    end
    
    def show
        @album = Album.find(params[:id])
    end
end
