class GalleryItem < ActiveRecord::Base
  validates :blurb, :user, presence: true

  include Pictureable
  belongs_to :user
end
