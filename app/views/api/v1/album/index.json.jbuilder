json.albuns @albuns.each do |a|
    json.id a.id
    json.title a.title
    json.date a.release
    json.artist a.artist.id
end