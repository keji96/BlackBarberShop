class BarbersController < ApplicationController

  def index
    render json: Barber.all
  end

end
