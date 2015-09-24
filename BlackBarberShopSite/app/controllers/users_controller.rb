class UsersController < ApplicationController
include SessionsHelper

  def new
     @user = User.new
  end

  def create
    User.create(user_params)
    redirect_to ('/log_in')
  end

  def log_in

  end

  def profile
    authenticate!
    @user = current_user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end


end
