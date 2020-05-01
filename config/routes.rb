Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'search/index'
    end
  end
  devise_for :users
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :dashboard, only: :index
      resources :album, only: [ :index, :show ]
      resources :artist, only: [ :index, :show ]
      resources :search, only: :index
    end 
  end
end
