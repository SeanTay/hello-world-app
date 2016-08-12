Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  resources :posts

  resources :jobs
  resources :todos
  root 'welcome#index'
  namespace :api do
    resources :jobs, only: [:index, :create, :destroy, :update]
    resources :todos
    resources :posts
  end
  resources :search
  resources :dashboard
end
