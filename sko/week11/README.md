week11

This was the final week before the pop-up exhibition, and I haven't finished the 3d library, which made me felt pressure about time management... I already finished the coding part and the next step was imported the 3d model from c4d. 

![IMG_4010](https://user-images.githubusercontent.com/68723373/96841899-f09a2200-147e-11eb-9437-844912b29ff2.GIF)

However, when I attempted to export it as fbx file and uploaded it, the console said 'no ID found'

<img width="231" alt="id" src="https://user-images.githubusercontent.com/68723373/96843256-b03ba380-1480-11eb-8ff4-c70ccea2cc56.png">

I already baked all the texture in the file and this issue shouldn't happen. Therefore I came back to the texture folder and found that there was another folder called "*.fbm" and I thought that confused the system. To figure it out, I should not bake the texture separately except click the option 'bake texture' in the export setting! 

The original model was made in the situation without consideration regarding the file size, the render effect of texture and materials... (nearly 1GB and contained the metal and crystal that couldn't be rendered in html or needed extra specific plugin or coding?) Karen and Andy strongly suggested to make the file lower than 10MB in order to have better user experience. Basically I remade the model and reduced the polygon counts. 

![3dlibrarys5](https://user-images.githubusercontent.com/68723373/96844220-d7df3b80-1481-11eb-8750-3816cabc3a0e.png)
the final outcomes of 3d library

Another problem I had was when I uploaded the model, I couldn't see it. This situation happened basic on my coding was workable(I used the fbx from the internet to text and it worked). Still, something wrong with the model. I did a quick research regarding the probable reason that could cause the model to disappear and notice one element that TOTALLY was ignored : the position of the model!! 

<img width="123" alt="屏幕快照 2020-10-22 下午4 29 17" src="https://user-images.githubusercontent.com/68723373/96845880-c5660180-1483-11eb-8081-4dcb712584d9.png">

FINALLY I imported it successfully. Then I needed to adjust the scene light: scene.add(new THREE.AmbientLight(0xff0000)) and the camera perspective and imported my background MP3. I used the text-to-speech function in speech.js to read the Abstract and introduction part of the essay " Emotional attachment to objects mediates the relationship between loneliness and hoarding symptoms " so that let the audience comprehended the significant and intention easily.

reference : https://www.researchgate.net/publication/337004887_Emotional_attachment_to_objects_mediates_the_relationship_between_loneliness_and_hoarding_symptoms?enrichId=rgreq-bc09da9c4a48ed846450e010edcd3a3a-XXX&enrichSource=Y292ZXJQYWdlOzMzNzAwNDg4NztBUzo4MjI1ODU1MjA1NzAzNjhAMTU3MzEzMTA3OTQ4NA%3D%3D&el=1_x_3&_esc=publicationCoverPdf


homepage

<img width="535" alt="屏幕快照 2020-08-17 下午12 25 05" src="https://user-images.githubusercontent.com/68723373/96848232-bfbdeb00-1486-11eb-9964-175088549994.png">

The initial visual effect came from AR function, which is a speculative work because it combined with the AR technology, the system will scan the user’s screen in camera and analyses their personality and spiritual needs and provide a digital world which constituted by materials from the data library and the system will connect them with user’s physical environment/object on the screen. 

<img width="456" alt="屏幕快照 2020-10-22 下午4 51 54" src="https://user-images.githubusercontent.com/68723373/96848367-eb40d580-1486-11eb-8359-d89ba23ac482.png">

<img width="764" alt="屏幕快照 2020-10-14 下午11 01 53" src="https://user-images.githubusercontent.com/68723373/96848433-04498680-1487-11eb-9fe0-2872b04c0c6a.png">

The next step was continuously collected the images (most of them came from the collections from my father and I) of emotional attachment items. Rather than displayed them directly, I would like to refine the color, not only for the visual but also for conveying the diversity, richness, and complexity of our substance world.

<img width="1331" alt="屏幕快照 2020-10-14 下午11 11 11" src="https://user-images.githubusercontent.com/68723373/96848550-26db9f80-1487-11eb-949c-07a06bc666dc.png">

After finished the basic visual setting, I used AE to create a small animated GIF, which presented the visualization of our communication with objects abstractly. The coding part was quite simple, I only needed to create three buttons linked to my three webpages. With the createFunction in JS, I set up three 'click me' buttons. Their positions also had significances: voice library matched the image of the trumpet, collage machine matched the mirror, which presented the reflection and relationship between emotion and items. 3d library matched the image of medicine because it visualized the symptom of hoarding disorder.

