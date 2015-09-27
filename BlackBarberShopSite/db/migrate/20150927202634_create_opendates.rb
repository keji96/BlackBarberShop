class CreateOpendates < ActiveRecord::Migration
  def change
    create_table :opendates do |t|
      t.time :closed
      t.string :day_of_the_week
      t.time :open
      t.integer :barbershop_id
      t.timestamps null: false
    end
  end
end
