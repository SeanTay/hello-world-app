Rails.application.routes.draw do

  resources :jobs
  resources :todos
  root 'welcome#index'
  namespace :api do
    resources :jobs, only: [:index, :create, :destroy, :update]
    resources :todos
  end
  resources :search
  resources :dashboard
end
