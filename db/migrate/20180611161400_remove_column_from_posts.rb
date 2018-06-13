class RemoveColumnFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :title, :string
    remove_column :posts, :topic, :string
    remove_column :posts, :content, :string
    remove_column :posts, :post_pic, :string
  end
end
