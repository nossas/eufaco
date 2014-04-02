Rails.application.routes.draw do
  root 'requests#new'

  resources :requests, only: [:new, :create] do
    collection do
      post :contact, action: "contact"
    end
  end
end
