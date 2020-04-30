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
    {title: 'Korn', release: Date.new(1994,10,11),artist: Artist.find_by(name: "Korn")}
    
]

artistas.each do |artista|
    Artist.find_or_create_by(artista)
end

albuns.each do |a|
    Album.find_or_create_by(a)
end