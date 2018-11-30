class User < ApplicationRecord

  validates :password_digest, :email, presence: true
  validates :username, :session_token, uniqueness: true, presence: true
  validates :password, length: { minimum: 7, allow_nil: true }

  attr_reader :password

  has_many :products,
    foreign_key: :seller_id
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
