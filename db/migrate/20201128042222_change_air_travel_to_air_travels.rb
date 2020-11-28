class ChangeAirTravelToAirTravels < ActiveRecord::Migration[5.2]
  def change
    rename_table :air_travel, :air_travels
  end
end
