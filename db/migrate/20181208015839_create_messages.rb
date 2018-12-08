class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :chat_id
      t.string :body
      t.integer :sender_id

      t.timestamps
    end
  end
end
