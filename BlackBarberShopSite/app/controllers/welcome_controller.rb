class WelcomeController < ApplicationController
  def index
    if params[:search].present?
      @shops = Barbershop.near(params[:search], 75)
    puts @shops
    else
      @shops = Barbershop.all
    end
  end

end
