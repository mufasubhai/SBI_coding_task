@air_travels.each do |air_travel|
    json.set! air_travel.id do
        air_travel.partial! "api/air_travel/air_travel". air_travel: air_travel
    end
end