class SuitsController < ApplicationController
  def index
    suits = Suit.order("created_at DESC")
    render json: suits
  end

  def create
    suit = Suit.create(suit_param)
    render json: suit
  end

  def update
    suit = Suit.find(params[:id])
    suit.update_attributes(suit_param)
    render json: suit
  end

  def destroy
    suit = Suit.find(params[:id])
    suit.destroy
    head :no_content, status: :ok
  end

  private
    def suit_param
      params.require(:suit).permit(:title, :avail)
    end
end
