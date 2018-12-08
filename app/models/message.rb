# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  chat_id    :integer
#  body       :string
#  sender_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :chat

  belongs_to :sender,
  foreign_key: :sender_id,
  class_name: :User

  has_one :seller,
  through: :chat,
  source: :seller

end
