class AddLatLng < ActiveRecord::Migration
  def change
    add_column :barbershops, :latitude, :decimal
    add_column :barbershops, :longitude, :decimal
  end
end
