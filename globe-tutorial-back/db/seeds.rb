# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.create(name: "Graycie", username: "grayciecat", password: "password")
# Location.create(city: "New York", country: "USA", state: "NY")

# anaheim = Location.create(city: "Anaheim", state: "California", country: "USA")
# disney = anaheim.attractions.create(name: "Disneyland", description: "Happiest place on Earth!")

disney = Attraction.first
graycie = User.first

#graycie_disney = graycie.trips.create(start_date: "2019-06-01", end_date: "2019-06-08")
graycie_disney = Trip.first

#graycie.comments.create(content: "Fun for all", attraction: disney)


#last for when visits is built
graycie_disney.visits.create(attraction: disney, date: "2019-06-01")

