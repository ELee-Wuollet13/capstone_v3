Rails.application.routes.draw do
  Rails.application.routes.draw do
    scope '/api/v1' do
      resources :suits
    end
  end
end
