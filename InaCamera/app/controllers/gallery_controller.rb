class GalleryController < ApplicationController
  def index
    @gallery = GalleryItem.all.includes(:pictures)

    respond_to do |format|
      format.html { redirect_to root_url }
      format.json { render :index }
    end
  end

  def show

  end
end
