Rails.application.routes.draw do
  resources :jobs
 get 'jobs', to: 'jobs#index'
 # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 root 'jobs#index'
end
