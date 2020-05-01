if (@favorite_albums != nil)
    json.favorite_albums @favorite_albums.each do |a|
        json.id a.id
        json.title a.title
        json.date a.release
        json.artist a.artist.id
    end
end

json.albuns @albuns.each do |a|
    json.id a.id
    json.title a.title
    json.date a.release
    json.artist a.artist.id
end