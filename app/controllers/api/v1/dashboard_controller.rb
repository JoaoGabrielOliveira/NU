class Api::V1::DashboardController < ApplicationController

    def index
        load_albuns
    end

    private
    def load_favorites
        @favorite_albums = current_user.favorites.order['created_at DESC'].limit(4).map(&:album)
    end

    def load_albuns
        @albuns = Album.all.sample(5);
    end

end
