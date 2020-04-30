class AddMusiclinkToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :MusicLink, :string
  end
end
