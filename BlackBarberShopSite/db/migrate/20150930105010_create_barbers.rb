class CreateBarbers < ActiveRecord::Migration
  def change
    create_table :barbers do |t|
        t.string  :name
        t.integer  :experience
        t.string  :avatar
        t.integer :barbershop_id
        t.timestamps null: false
    end
  end
end
