Rails.application.routes.draw do
  resources :jobs
  root 'home#index'
  namespace :api do
    resources :jobs, only: [:index, :create, :destroy, :update]
  end
  resources :search
end
