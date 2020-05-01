json.artist @artists.each do |a|
    json.id a.id
    json.name a.name
    json.albuns a.albums.each do |al|
        json.id al.id
        json.title al.title
        json.date al.release
    end
end