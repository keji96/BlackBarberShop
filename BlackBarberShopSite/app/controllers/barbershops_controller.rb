class BarbershopsController < ApplicationController

  def index
    render json: Barbershop.all
  end

  def newshop
    @shop = Barbershop.new
  end

  def create
    Barbershop.create(shop_params)
    redirect_to ('/log_in')
  end

  private
  def shop_params
    params.require(:barbershop).permit(:BarbershopCity, :BarbershopCountry,
    :BarbershopPhone,:BarbershopState, :BarbershopStreetAddress,:BarbershopZipCode,:BarbershopName,:latitude,:longitude)
  end

  

end
