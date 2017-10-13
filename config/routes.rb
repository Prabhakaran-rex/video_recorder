Rails.application.routes.draw do
	namespace :embed do
		resources :videos
	end
  root 'embed/videos#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
