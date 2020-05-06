class Api::V1::UserController < ApplicationController

    def index
        current_user!
    end
end
