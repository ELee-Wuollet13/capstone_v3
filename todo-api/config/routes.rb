Rails.application.routes.draw do
  Rails.application.routes.draw do
    scope '/api/v1' do
      resources :todos
    end
  end
end
