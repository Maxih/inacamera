json.array!(@gallery) do |item|
  json.partial!("gallery/item", item: item)
end
