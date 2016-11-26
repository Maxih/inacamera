class CreateGalleryItems < ActiveRecord::Migration[5.0]
  def change
    create_table :gallery_items do |t|
      t.integer :user_id, null: false
      t.string :blurb, null: false

      t.timestamps
    end
  end
end
