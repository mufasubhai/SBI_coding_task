class Api::AirTravelsController < ApplicationController

    def index
        @air_travels = AirTravel.all
        render :index
    end


    def show
                @air_travels = AirTravel.all
    end

    def create
        @air_travel = AirTravel.new(air_travel_params)

        if @air_travel.save
            render :show
        else
            render json: @air_travel.errors.full_messages, status: 422
        end
    end

    def update
        # use find_by instead of find so that update will not fail softly
        @air_travel = AirTravel.find_by(id: params[:id])

        if @air_travel.update(air_travel_params)

        else
            render json: @air_travel.errors.full_messages, status: 422
        end

    end

    def destroy
        @air_travel = AirTravel.find_by(id: params[:id])

        if @air_travel.destroy
            render :show
        else
            render json: @air_travel.errors.full_messages, status: 422
        end

    end

    private

    # strong params to allow updating
    def air_travel_params
        params.require(:air_travel).permit(:area_code, :month, :passengers, :sales)
    end

end
