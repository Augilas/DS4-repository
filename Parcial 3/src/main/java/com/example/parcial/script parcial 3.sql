create database parcial3
use parcial3

create table seccion (
id_seccion int
constraint id_seccion_Seccion_PK primary key
)

create table Ramen (
informacion varchar(20),
id_seccion int
constraint id_seccion_Ramen_FK foreign key
references seccion(id_seccion)
)

create table datos (
Titulo varchar(500),

Texto varchar(500),

imagen varchar(500),


id_seccion int
constraint id_seccion_Datos_FK foreign key
references seccion(id_seccion)
)

insert into seccion 
values (1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13)

insert into datos
values (null,null,'https://i.imgur.com/2Nd4NJx.png',1),
	   (null,null,'https://i.imgur.com/bduYJqe.png',1),
	   ('An Unforgettable Experience','Ramen is a Japanese dish consisting of noodles in a flavorful soup. You can find it with various types of broth and accompaniments like meat and egg.Its a delicious and comforting meal that has become very popular worldwide.','https://i.imgur.com/ikG9MkH.jpg',2),
/*3*/  ('About Us','At Rahme, we not only serve ramen but also share the culture and passion that surrounds it. Our mission is to create unforgettable moments for our customers as they enjoy the warmth of Japanese hospitality. Come and join us at Rahme, where each bowl tells a story of flavor and dedication.','https://i.imgur.com/YZygObX.jpg',3),
/*4*/  ('Achieving Excellence','In our ramen restaurant, we take pride in having a community of satisfied customers who have experienced the excellence of our flavors and services.',null,4),
	   (null,'Our ramen restaurant has been recognized for its commitment to quality and excellence. We have won awards and evaluations for our dedication to providing an exceptional dining experience.',null,4),
	   ('8455 Happy Clients','Every satisfied customer is an achievement for us', 'https://i.imgur.com/KsbQubS.jpg',4),
	   ('25 Grading and awards','Honors confirm our commitment to excellence', 'https://i.imgur.com/gufTehU.jpg',4),
/*5*/  ('Most Popular Menu','The variety of flavors and experiences we offer with our products will delight you every day as if you were trying us for the first time.',null,5),
	   ('TONKOTSU RAMEN',null,'https://i.imgur.com/b6Ypv32.jpg',5),
	   ('VEGAN RAMEN',null,'https://i.imgur.com/wftrqhE.jpg',5),
	   ('SPICY MISO RAMEN',null,'https://i.imgur.com/vnxVK9h.jpg',5),
	   ('MISO BUTTER CORN RAMEN',null,'https://i.imgur.com/EwfNYBM.jpg',5),
	   ('Features that make our Ramen Great','Authentic Flavor',null,6),
	   (null,'Variety of Flavors',null,6),
	   (null,'Fresh Ingredients',null,6),
	   (null,'Handmade Noodles',null,6),
	   (null,'Rich Broth',null,6),
	   (null,'Customization Options',null,6),
	   (null,'Healthy Choices',null,6),
	   ('We care about your comments and thus continously improve our products','With your help, we can keep improving our products by looking for ingredients and flavors to appeal to your taste and taste buds necessities, thus diminishing your needs to look further for the best Ramen restaurant in town!','https://i.imgur.com/HnUpNko.jpg',7),

	   ('Our team','Mario Philips','https://i.imgur.com/xS4GlAc.jpg',9),
	   (null,'Elizabeth Johnson','https://i.imgur.com/bn2xTPu.jpg',9),
	   (null,'Elijah Jameson','https://i.imgur.com/atqDMgF.jpg',9),
	   (null,'Narie Stolz','https://i.imgur.com/yennW67.png',9),


	   ('Sauce Partners',null,'https://i.imgur.com/xxEnf8B.png',10),
	   (null,null,'https://i.imgur.com/nJK97wm.png',10),
	   (null,null,'https://i.imgur.com/y0YkDSC.png',10),
	   (null,null,'https://i.imgur.com/kAVmyQK.png',10),

	   (null,'Do you want to inform us about your experience with us or have any questions that you would like to have answered? Then please enter your information on the enter your information on the form.',null,11),

	   (null,'Copyright Rahme S.A. 2023',null,12)

	   insert into Ramen 
	   values ('Basic broth',8),
			  ('$3.50',8),
			  ('PER VISIT',8),
			  ('Ramen',8),
			  ('Miso base',8),
			  ('1 sauce',8),
			  ('1 egg',8),
			  ('Seasoned broth',13),
			  ('4.00',13),
			  ('PER VISIT',13),
			  ('Ramen',13),
			  ('Tonkotsu base',13),
			  ('3 sauces',13),
			  ('3 eggs and more',13)
			  