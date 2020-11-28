# == Schema Information
#
# Table name: air_travels
#
#  id         :bigint           not null, primary key
#  area_code  :integer          not null
#  month      :integer          not null
#  passengers :integer          not null
#  sales      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class AirTravel < ApplicationRecord
    validates :area_code, :month, :passengers, :sales, presence: true
    validates :area_code, inclusion: { in: (1..4).to_a }
    validates :month, inclusion: { in: (1..12).to_a }
    
end
