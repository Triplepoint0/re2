class AddColumnToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :materials, :string
    add_column :posts, :pickup_location, :string
    add_column :posts, :start_time, :datetime
    add_column :posts, :pounds, :integer
  end
end
