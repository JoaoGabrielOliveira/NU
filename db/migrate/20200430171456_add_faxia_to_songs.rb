class AddFaxiaToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :faixa, :integer
  end
end
