@air_travels.each do |air_travel|
    json.set! air_travel.id do
        json.partial! "api/air_travels/air_travel", air_travel: air_travel
    end
end