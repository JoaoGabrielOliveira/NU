class Api::V1::DashboardController < ApplicationController

    def index
        load_favorites
    end

    private
    def load_favorites
        @favorite_albums = current_user.favorites.order['created_at DESC'].limit(4).map(&:album)
    end

end
