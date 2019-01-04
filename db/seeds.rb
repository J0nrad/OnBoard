# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
Chat.destroy_all
Message.destroy_all

test_user1 = User.create!(username: 'Kinle', email: 'test1@test.com', password: 'sssssss')
test_user2 = User.create!(username: 'Lovely', email: 'test2@test.com', password: 'ddddddd')
test_user3 = User.create!(username: 'Zoobra', email: 'test3@test.com', password: 'fffffff')
test_user4 = User.create!(username: 'Bannanas', email: 'test4@test.com', password: 'ggggggg')
test_user5 = User.create!(username: 'Dustin', email: 'test5@test.com', password: 'fractals')

test_product1 = Product.create!(title: 'Lost Board', description: 'Best ever', price: 100, seller_id: test_user4.id, image_url: 'https://lostsurfboards.net/wp-content/uploads/2018/05/PYCHO-CW-1.png', lat: 4.987776, lng: 4837.33, category: 'surf')
test_product2 = Product.create!(title: 'Skateboard', description: 'used in too many ways', price: 100, seller_id: test_user4.id, lat: 4.987, lng: 3827.22, category: 'skate', image_url: 'https://images-na.ssl-images-amazon.com/images/I/61RQ-r0jWiL._SX425_.jpg' )
test_product3 = Product.create!(title: 'OneWheel XR', description: 'Most on land fun you\'ll ever have', price: 100, seller_id: test_user3.id, lat: 4.989, lng: 3827.22, category: 'skate', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvFuCIN3WvFitYAqjWIq0gCkS0a8BVOnI6Co4R0M2ete-jD6VeQ')
test_product4 = Product.create!(title: 'Gnu Snowboard', description: 'What?', price: 100, seller_id: test_user2.id, lat: 4.9889, lng: 3827.22, category: 'snow', image_url: 'http://coresites-cdn.factorymedia.com/whitelines_new/wp-content/uploads/2016/01/GNU-B-Pro-Womens-Snowboard-2016-2017-ISPO.jpg')
test_product5 = Product.create!(title: 'Roberts Board', description: 'Best ever', price: 100, seller_id: test_user4.id, image_url: 'http://www.robertssurf.com/uploads/1/0/6/3/10638997/roberts-starchip-web_orig.jpg', lat: 4.987776, lng: 4837.33, category: 'surf')
test_product6 = Product.create!(title: 'Skateboard by Primative', description: 'Used in too many ways', price: 100, seller_id: test_user4.id, lat: 4.987, lng: 3827.22, category: 'skate', image_url: 'https://i.ebayimg.com/images/g/wpAAAOSwEppcArqQ/s-l640.jpg' )
test_product7 = Product.create!(title: 'The whippersnapper', description: 'Most on land fun you\'ll ever have', price: 100, seller_id: test_user3.id, lat: 4.989, lng: 3827.22, category: 'surf', image_url: 'https://s-media-cache-ak0.pinimg.com/originals/83/ce/71/83ce71763b9f57a5832ce9348867d87c.png')
test_product8 = Product.create!(title: 'Magic board', description: 'This board changed my life and I cannot believe how good it is for the East Coast summer.  Must have in your quiver', price: 1000, seller_id: test_user2.id, lat: 4.9889, lng: 3827.22, category: 'surf', image_url: 'http://www.blinksurf.com/wp-content/uploads/2017/10/haydenshapes6-1.jpg')
test_product11 = Product.create!(title: 'Flip', description: 'Most on land fun you\'ll ever have', price: 100, seller_id: test_user3.id, lat: 4.989, lng: 3827.22, category: 'skate', image_url: 'http://theskateboardmag.com/media/video/post/gallery/cache/1/9df78eab33525d08d6e5fb8d27136e95/0/9/09-tsm-vdi-day2-selects-9811-2000px.jpg')
test_product12 = Product.create!(title: 'Burton Snowboarder', description: 'What?', price: 100, seller_id: test_user2.id, lat: 4.9889, lng: 3827.22, category: 'snow', image_url: 'https://w82.com/wp/wp-content/uploads/2017/10/burton_1.jpg')
test_product9 = Product.create!(title: 'Lib Tech Surf', description: 'Best ever', price: 100, seller_id: test_user4.id, image_url: 'https://www.cleanlinesurf.com/theshop/wp-content/uploads/2016/04/slider-desktop-short-round-01.jpg', lat: 4.987776, lng: 4837.33, category: 'surf')
test_product10 = Product.create!(title: 'Plan B Deck', description: 'used in too many ways', price: 100, seller_id: test_user4.id, lat: 4.987, lng: 3827.22, category: 'skate' )
test_product13 = Product.create!(title: 'HS Boarder', description: 'Best ever', price: 760, seller_id: test_user4.id, image_url: 'https://www.haydenshapes.com/wp-content/uploads/2017/09/Alexander-Wang-Cage-Installation-3-1024x853.jpg', lat: 4.987776, lng: 4837.33, category: 'surf')
test_product14 = Product.create!(title: 'SLS Cup winning board', description: 'used in too many ways', price: 2500, seller_id: test_user4.id, lat: 4.987, lng: 3827.22, category: 'skate', image_url: 'http://streetleague.wpengine.com/wp-content/uploads/2014/06/street-league-skateboarding-primitive-deck-board.jpeg' )
test_product16 = Product.create!(title: 'Nothing much here', description: 'Most on land fun you\'ll ever have', price: 900, seller_id: test_user3.id, lat: 4.989, lng: 3827.22, category: 'surf')

test_chat1 = Chat.create!(product_id: test_product1.id)
test_chat2 = Chat.create!(product_id: test_product3.id)
test_chat3 = Chat.create!(product_id: test_product5.id)
test_chat4 = Chat.create!(product_id: test_product8.id)

test_message2 = Message.create!(sender_id: test_user1.id, chat_id: test_chat1.id, body: "Wow board")
test_message3 = Message.create!(sender_id: test_user5.id, chat_id: test_chat1.id, body: "Im tired board")
test_message4 = Message.create!(sender_id: test_user3.id, chat_id: test_chat4.id, body: "Sleep board")
test_message5 = Message.create!(sender_id: test_user1.id, chat_id: test_chat3.id, body: "Keep going board")
