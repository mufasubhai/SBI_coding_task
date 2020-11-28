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
require 'test_helper'

class AirTravelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
