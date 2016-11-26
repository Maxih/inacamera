Rails.application.routes.draw do
  root 'application#index'

  resources :gallery, only: [:index, :show]
end
