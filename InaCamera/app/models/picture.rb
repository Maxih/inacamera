class Picture < ActiveRecord::Base
  validates :image_url, :user, presence: true

  include Pictureable
  belongs_to :pictureable, polymorphic: true
  belongs_to :user
end
