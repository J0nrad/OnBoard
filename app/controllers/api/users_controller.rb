class Api::UserController < ApplicationController
  def create
    @user = User.new(users_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def users_params
    params.require(:user).permit(
      :id,
      :username,
      :password,
      :email,
      :profile_image
    )
  end

end
