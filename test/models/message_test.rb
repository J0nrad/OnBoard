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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
