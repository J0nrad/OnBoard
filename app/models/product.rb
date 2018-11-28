class Product < ApplicationRecord

  validates :title, :price, :category, :lat, :lng, presence: true
  validates :description, length: { maximum: 140 }

  # has_attached_files :images
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  # validates_with AttachmentSizeValidator, attributes: :image, less_than: 5.megabytes

  belongs_to :user,
  foreign_key: :seller_id,
  class_name: :User

end
