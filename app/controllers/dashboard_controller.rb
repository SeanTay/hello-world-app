class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    redirect_to root_path unless current_user 
  end
end
