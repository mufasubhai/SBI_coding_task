# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AirTravel.delete_all

def generateSeeds
    area_codes = (1..4).to_a
    months = (1..12).to_a

    area_codes.each do |area_code| 
        months.each do |month|
            
            passengers = rand(2000..14000)
            if passengers.between?(2000, 6000) 
                sales = rand(500000..1500000)
            elsif passengers.between?(6001, 10000)
                sales = rand(900000..3500000)
            else 
                sales = rand(2500000..6500000)
            end

            AirTravel.create!(
                month: month,
                area_code: area_code,
                passengers: passengers,
                sales: sales   
            )
        end
    end

end

generateSeeds