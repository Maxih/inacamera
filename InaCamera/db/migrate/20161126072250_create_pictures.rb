class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.references :pictureable, :polymorphic => true
      t.string :image_url, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
