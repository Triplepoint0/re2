Rails.application.routes.draw do

  resources :search
  devise_for :users
  resources :users
  get "home/index"
  root "home#index"

  get 'calc/index', :to => 'calc#index'
  resources :posts
end
