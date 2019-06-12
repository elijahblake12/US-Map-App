Rails.application.routes.draw do
  resources :points

  root "map#index"
end
