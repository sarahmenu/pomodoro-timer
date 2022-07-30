# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.destroy_all

puts 'Creating task 1'
task1 = Task.create(
  title: 'Work on new timer app',
  status: 'Ongoing...',
  notes: 'Finish the protoype on Figma'
)

puts 'Creating task 2'
task2 = Task.create(
  title: 'Book flight for August trip',
  status: 'Done !',
  notes: 'Depature 10/08, return 17/08'
)
