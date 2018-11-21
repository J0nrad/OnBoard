# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

test_user1 = User.create!(username: 'Kinle', email: 'test1@test.com', password: 'sssssss')
test_user2 = User.create!(username: 'Lovely', email: 'test2@test.com', password: 'ddddddd')
test_user3 = User.create!(username: 'Zoobra', email: 'test3@test.com', password: 'fffffff')
test_user4 = User.create!(username: 'Bannanas', email: 'test4@test.com', password: 'ggggggg')

test_product1 = Product.create!(title: 'Lost Board', description: 'Best ever', price: 100, seller_id: test_user4.id, image_url: 'https://lostsurfboards.net/wp-content/uploads/2018/05/PYCHO-CW-1.png', lat: 4.987776, lng: 4837.33, category: 'surf')
test_product2 = Product.create!(title: 'Skateboard', description: 'used in too many ways', price: 100, seller_id: test_user4.id, lat: 4.987, lng: 3827.22, category: 'surf')
test_product3 = Product.create!(title: 'OneWheel XR', description: 'Most on land fun you\'ll ever have', price: 100, seller_id: test_user3.id, lat: 4.989, lng: 3827.22, category: 'surf')
test_product4 = Product.create!(title: 'Gnu Snowboard', description: 'What?', price: 100, seller_id: test_user2.id, lat: 4.9889, lng: 3827.22, category: 'surf')
