class CalcController < ApplicationController
    def index
  
    end

    def calc_params
      params.require(:post).permit(:materials, :pounds, :user_id)
    end
  end
  