json.(item, *GalleryItem.column_names)

json.pictures(item.pictures) do |picture|
  json.(picture, :image_url)
end
