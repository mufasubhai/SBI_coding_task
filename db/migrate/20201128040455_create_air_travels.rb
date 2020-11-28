class CreateAirTravels < ActiveRecord::Migration[5.2]
  def change
    create_table :air_travel do |t|
      t.integer :area_code, null: false
      t.integer :month, null: false
      t.integer :passengers, null: false
      t.integer :sales, null: false
      t.timestamps
    end
  end
end
