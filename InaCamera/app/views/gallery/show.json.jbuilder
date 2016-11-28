json.(@gallery_item, *GalleryItem.column_names)

json.pictures(@gallery_item.pictures) do |picture|
  json.(picture, :image_url)
end
