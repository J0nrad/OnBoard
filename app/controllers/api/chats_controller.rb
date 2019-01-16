class Api::ChatsController < ApplicationController
  # before_action :set_chat, only: [:show, :edit, :update, :destroy]


  def index
    @chats = Chat.all
  end

  def show
    @chat = Chat.find_by(id: params[:id])
    @messages = @chat.messages
    render :show
  end


  def create
    @chat = Chat.new(chat_params)

      if @chat.save
        render 'api/chats/show'
      else
        render json: @chat.errors.full_messages
      end
  end

  def destroy
    @chat = Chat.find_by(chat_params[:id])
    @chat.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    # Never trust parameters from the scary internet, only allow the white list through.
    def chat_params
      params.require(:chat).permit(:product_id)
    end
end
