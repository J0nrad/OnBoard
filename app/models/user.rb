# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  profile_image   :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  validates :password_digest, :email, presence: true
  validates :username, :session_token, uniqueness: true, presence: true
  validates :password, length: { minimum: 7, allow_nil: true }

  attr_reader :password

  has_many :products,
    foreign_key: :seller_id

  has_many :messages,
    foreign_key: :sender_id,
    class_name: :Message
  # has_one_attached :photo
  #
  # has_many :favorites,
  #   foreign_key: :product_id
  #
  # has_many :reviews,
  #   foreign_key: :author_id

    after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

end
