class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string  :title, null: false
      t.text    :description, null: false
      t.integer :price, null: false
      t.integer :seller_id, null: false
      t.float :lat
      t.float :lng
      t.boolean :sold
      t.string :category
      t.string :image_url
      t.string :image_content_type

      t.timestamps
    end
    add_index :products, :seller_id
  end
end
