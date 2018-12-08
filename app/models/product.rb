# == Schema Information
#
# Table name: products
#
#  id                 :bigint(8)        not null, primary key
#  title              :string           not null
#  description        :text             not null
#  price              :integer          not null
#  seller_id          :integer          not null
#  lat                :float
#  lng                :float
#  sold               :boolean
#  category           :string
#  image_url          :string
#  image_content_type :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

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
