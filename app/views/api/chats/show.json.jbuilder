# json.chat do
#   json.extract! @chat, :id, :product_id, :created_at, :updated_at
#   # json.url chat_url(chat, format: :json)
# end
#
# json.users do
#   # json.set @chat.sender.id do
#   #   json.extract! @chat.sender, :username, :profile_image
#   # end
#   json.set @chat.seller.id do
#     json.extract! @chat.seller, :username, :profile_image
#   end
# end
#
# json.messages do
#   @chat.messages.each do |message|
#     json.set message.id, :body, :created_at, :updated_at
#   end
# end
#
# json.products do
#   json.set @chat.product.id do
#     json.extract! @chat.product, :image_url
#   end
# end
json.partial! "api/chats/chat", chat: @chat
# json.partial! "chats/chat", chat: @chat
# :sender_id, :message_id, :seller_id
