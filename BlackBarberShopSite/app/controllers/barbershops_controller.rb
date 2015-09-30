class BarbershopsController < ApplicationController
  # GET /locations
  # GET /locations.json

  def index
    if params[:search].present?
      render json:  Barbershop.near(params[:search], 10).joins(:opendates)
  
    else
      #render json: Opendate.joins("RIGHT JOIN barbershops ON barbershops.id=opendates.barbershop_id").all
    render json:  Barbershop.joins(:opendates).all
    end
 end

  # GET /locations/1
  # GET /locations/1.json
  def show
   @shops = Barbershop.find(params[:id])

  end

  # GET /locations/new
  def new
    @shop = Barbershop.new
  end

  # GET /locations/1/edit
  def edit
  end

  # POST /locations
  # POST /locations.json
  def create
    @shop = Barbershop.new(shop_params)

    respond_to do |format|
      if @shop.save
        format.html { redirect_to '/', notice: 'Location was successfully created.' }
        format.json { render :show, status: :created, location: @shop }
      else
        format.html { render :new }
        format.json { render json: @shop.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /locations/1
  # PATCH/PUT /locations/1.json
  def update
    respond_to do |format|
      if @location.update(shop_params)
        format.html { redirect_to @location, notice: 'Location was successfully updated.' }
        format.json { render :show, status: :ok, location: @location }
      else
        format.html { render :edit }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /locations/1
  # DELETE /locations/1.json
  def destroy
    @location.destroy
    respond_to do |format|
      format.html { redirect_to locations_url, notice: 'Location was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @shops = Barbershop.find(params[:id])
    end


  def shop_params
    params.require(:barbershop).permit(:BarbershopCity, :BarbershopFullAddress,:BarbershopCountry,
    :BarbershopPhone,:BarbershopState, :BarbershopStreetAddress,:BarbershopZipCode,:BarbershopName,:latitude,:longitude)
  end



end
