json.extract! message, :id, :chat_id, :body, :sender_id, :created_at, :updated_at
json.url message_url(message, format: :json)
