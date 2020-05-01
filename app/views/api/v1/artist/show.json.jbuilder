json.id @artist.id
json.name @artist.name
json.albuns @artist.albums.each do |a|
    json.id a.id
    json.title a.title
    json.date a.release
    json.artist a.artist.id
end
