json.artist @artists.each do |a|
    json.id a.id
    json.name a.name
    json.albuns a.albums.each do |al|
        json.id al.id
        json.title al.title
    end
end

json.albuns @albums.each do |a|
    json.id a.id
    json.title a.title
    json.date a.release
    json.artist a.artist.id
end

json.songs @songs.each do |a|
    json.id a.id
    json.title a.title
    json.album a.album.id
    json.artist a.artist.id
end