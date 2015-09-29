class WelcomeController < ApplicationController
  def index
    if params[:search].present?
      @shops = Barbershop.near(params[:search], 10)

    else
   @shops = Barbershop.near(current_location)
    end
  end

private
  def current_location
    request.location.latitude
    request.location.longitude
  end

end
