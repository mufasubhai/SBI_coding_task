Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :air_travels, only: [:index, :show, :create, :update, :destroy]
  end

   root "static_pages#root"
end
