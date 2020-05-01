Rails.application.routes.draw do
  
  #Raiz e paginas Estaticas
  root 'home#index'
  
  #Devises
  devise_for :users
  
  #API

  concern :favoritable do |options|
    shallow do
      post '/favorite', {to: "favorites#create", on: :member}.merge(options)
      delete '/favorite', {to: "favorites#create", on: :member}.merge(options)
    end
  end

  namespace :api, defaults: { format: :json } do

    namespace :v1 do
      resources :dashboard, only: :index

      resources :album, only: [ :index, :show ] do
        concerns :favoritable, favoritable_type: 'Album'
      end

      resources :artist, only: [ :index, :show ] do
        concerns :favoritable, favoritable_type: 'Artist'
      end

      resources :search, only: :index

      resources :favoritable, only: [:index, :create, :destroy]

      resources :songs, only: [] do
        concerns :favoritable, favoritable_type: 'Song'
      end
    end
  end

end
