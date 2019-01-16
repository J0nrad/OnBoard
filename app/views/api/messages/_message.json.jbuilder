json.extract! message, :id, :chat_id, :body, :sender_id, :created_at, :updated_at
json.messages do
  @chat.messages.each do |message|
    json.set message.id, :body, :created_at, :updated_at
  end
end
