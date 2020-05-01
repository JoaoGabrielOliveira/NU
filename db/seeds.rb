# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artistas = [
        {name: 'Korn'},
        {name: 'System of a Down'},
        {name: 'Disturbed'}
    ]

albuns = [
    {title: 'The Sickness', release: Date.new(2000,03,07),artist: Artist.find_by(name: "Disturbed")},
    {title: 'System of a Down', release: Date.new(1998,07,30),artist: Artist.find_by(name: "System of a Down")},
    {title: 'Korn', release: Date.new(1994,10,11),artist: Artist.find_by(name: "Korn")},
    {title: 'The Nothing', release: Date.new(2019,07,13),artist: Artist.find_by(name: "Korn")}
    
]
songs = [
    {title: 'Blind', MusicLink: '', faixa:'1', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Ball Tongue', MusicLink: '', faixa:'2', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Need To', MusicLink: '', faixa:'3', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Clown', MusicLink: '', faixa:'4', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Divine', MusicLink: '', faixa:'5', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Faget', MusicLink: '', faixa:'6', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Shoots and Ladders', MusicLink: '', faixa:'7', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Predictable', MusicLink: '', faixa:'8', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Fake', MusicLink: '', faixa:'9', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Lies', MusicLink: '', faixa:'10', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Helmet in the Bush', MusicLink: '', faixa:'11', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")},
    {title: 'Daddy', MusicLink: '', faixa:'12', album: Album.find_by(title: "Korn"),artist: Artist.find_by(name: "Korn")}
]

artistas.each do |artista|
    Artist.find_or_create_by(artista)
end

albuns.each do |a|
    Album.find_or_create_by(a)
end

songs.each do |a|
    Song.find_or_create_by(a)
end

#User.find_or_create_by("j@j.com",123456,"João")