require 'active_support/concern'

module Pictureable
  extend ActiveSupport::Concern

  included do
    has_many :pictures, as: :pictureable
  end
end
