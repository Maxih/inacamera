class GalleryController < ApplicationController
  def index
    start_idx = params[:start] || 0;

    @gallery = GalleryItem.all.includes(:pictures).limit(6).offset(start_idx)

    respond_to do |format|
      format.html { redirect_to root_url }
      format.json { render :index }
    end
  end

  def show

  end
end
