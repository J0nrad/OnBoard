json.extract! chat, :id, :product_id, :sender_id, :seller_id, :created_at, :updated_at
json.url chat_url(chat, format: :json)
