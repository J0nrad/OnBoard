# == Schema Information
#
# Table name: chats
#
#  id         :bigint(8)        not null, primary key
#  product_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chat < ApplicationRecord
  belongs_to :product

  has_many :messages
  # dependent: :destroy

  has_one :seller,
  through: :product,
  source: :user

  has_one :sender,
  through: :messages,
  source: :sender

end
