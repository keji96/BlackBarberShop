class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.float :rating
      t.text :recomendation
      t.integer :barber_id
      t.timestamps null: false
    end
  end
end
