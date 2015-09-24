class CreateBarbershops < ActiveRecord::Migration
  def change
    create_table :barbershops do |t|
      t.string :BarbershopCity
      t.string :BarbershopCountry
      t.string :BarbershopFullAddress
      t.string :BarbershopPhone
      t.string :BarbershopState
      t.string :BarbershopStreetAddress
      t.string :BarbershopZipCode
      t.string :BarbershopName
      t.timestamps null: false
    end
  end
end
