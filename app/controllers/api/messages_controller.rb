class Api::MessagesController < ApplicationController
  # before_action :set_message, only: [:show, :edit, :update, :destroy]

  def create
    @message = Message.new(message_params)
    @message.sender_id = @current_user.id

      if @message.save
        render 'api/messages/show'
      else
        render json: @message.errors.full_messages
      end
  end

  def show
    @message = Message.find_by(id: params[:id])
    render :show
  end


  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def message_params
      params.require(:message).permit(:chat_id, :body, :seller_id)
    end
end
