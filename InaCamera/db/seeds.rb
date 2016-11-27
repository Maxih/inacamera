# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "max", password: "password");

GalleryItem.destroy_all

item1 = GalleryItem.create(blurb: "Howls Moving Castle", user_id: user1.id)
item2 = GalleryItem.create(blurb: "Spirited Away", user_id: user1.id)
item3 = GalleryItem.create(blurb: "Princess Mononoke", user_id: user1.id)
item4 = GalleryItem.create(blurb: "Howls Moving Castle 2", user_id: user1.id)
item5 = GalleryItem.create(blurb: "Princess Mononoke 2", user_id: user1.id)
item6 = GalleryItem.create(blurb: "Princess Mononoke 3", user_id: user1.id)
item7 = GalleryItem.create(blurb: "Spirited Away 2", user_id: user1.id)
item8 = GalleryItem.create(blurb: "Spirited Away 3", user_id: user1.id)
item9 = GalleryItem.create(blurb: "Howls moving castle", user_id: user1.id)

item10 = GalleryItem.create(blurb: "Howls Moving Castle", user_id: user1.id)
item11 = GalleryItem.create(blurb: "Spirited Away", user_id: user1.id)
item12 = GalleryItem.create(blurb: "Princess Mononoke", user_id: user1.id)
item13 = GalleryItem.create(blurb: "Howls Moving Castle 2", user_id: user1.id)
item14 = GalleryItem.create(blurb: "Princess Mononoke 2", user_id: user1.id)
item15 = GalleryItem.create(blurb: "Princess Mononoke 3", user_id: user1.id)
item16 = GalleryItem.create(blurb: "Spirited Away 2", user_id: user1.id)
item17 = GalleryItem.create(blurb: "Spirited Away 3", user_id: user1.id)
item18 = GalleryItem.create(blurb: "Howls moving castle", user_id: user1.id)

Picture.destroy_all
image1 = Picture.create(image_url: "assets/gallery/WzeMtiZ.jpg", user_id: user1.id, pictureable: item1)
image2 = Picture.create(image_url: "assets/gallery/QLde8NU.png", user_id: user1.id, pictureable: item2)
image3 = Picture.create(image_url: "assets/gallery/SW6BzXV.png", user_id: user1.id, pictureable: item3)
image4 = Picture.create(image_url: "assets/gallery/L4VNWYd.jpg", user_id: user1.id, pictureable: item4)
image5 = Picture.create(image_url: "assets/gallery/09Q7PHT.png", user_id: user1.id, pictureable: item5)
image6 = Picture.create(image_url: "assets/gallery/Zn2BBg8.png", user_id: user1.id, pictureable: item6)
image7 = Picture.create(image_url: "assets/gallery/ecrMCre.jpg", user_id: user1.id, pictureable: item7)
image8 = Picture.create(image_url: "assets/gallery/hWcTKDR.png", user_id: user1.id, pictureable: item8)
image9 = Picture.create(image_url: "assets/gallery/2smhxyV.png", user_id: user1.id, pictureable: item9)

image10 = Picture.create(image_url: "assets/gallery/7b119p3.png", user_id: user1.id, pictureable: item10)
image11 = Picture.create(image_url: "assets/gallery/7TctZPW.jpg", user_id: user1.id, pictureable: item11)
image12 = Picture.create(image_url: "assets/gallery/dMobJqL.png", user_id: user1.id, pictureable: item12)
image13 = Picture.create(image_url: "assets/gallery/GjxEpBz.png", user_id: user1.id, pictureable: item13)
image14 = Picture.create(image_url: "assets/gallery/KlhtVEY.png", user_id: user1.id, pictureable: item14)
image15 = Picture.create(image_url: "assets/gallery/nK8o9QA.png", user_id: user1.id, pictureable: item15)
image16 = Picture.create(image_url: "assets/gallery/td2y5xn.png", user_id: user1.id, pictureable: item16)
image17 = Picture.create(image_url: "assets/gallery/tfFaE9N.png", user_id: user1.id, pictureable: item17)
image18 = Picture.create(image_url: "assets/gallery/YAURCyY.png", user_id: user1.id, pictureable: item18)
