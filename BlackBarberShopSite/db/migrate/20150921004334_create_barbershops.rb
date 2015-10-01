class CreateBarbershops < ActiveRecord::Migration
  def change
    create_table :barbershops do |t|
      t.string :barbershopcity
      t.string :barbershopcountry
      t.string :barbershopfulladdress
      t.string :barbershopphone
      t.string :barbershopstate
      t.string :barbershopstreetaddress
      t.string :barbershopzipcode
      t.string :barbershopname
      t.timestamps null: false
    end
  end
end
