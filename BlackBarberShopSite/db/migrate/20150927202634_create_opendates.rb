class CreateOpendates < ActiveRecord::Migration
  def change
    create_table :opendates do |t|
      t.integer :closed
      t.string :day_of_the_week
      t.integer :open_time
      t.integer :barbershop_id
      t.timestamps null: false
    end
  end
end
