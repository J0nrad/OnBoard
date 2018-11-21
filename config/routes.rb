Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :destroy, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :create, :show, :destroy]
  end

  root "static_pages#root"

end
