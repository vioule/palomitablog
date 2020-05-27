/* eslint-disable no-multi-str */
/* eslint-disable no-undef */
db = db.getSiblingDB('palomitablog');
db.createRole({
  role: 'app',
  privileges: [
    {
      resource: { db: 'palomitablog', collection: 'articles' },
      actions: ['find'],
    },
  ],
  roles: [],
});
db.createUser({
  user: 'palomitablog',
  pwd: 'palomitablog',
  roles: [
    {
      role: 'app',
      db: 'palomitablog',
    },
  ],
});

db.articles.insertMany([{
  title: 'Far far away, behind the word mountains, far from.',
  date: new Date('1995-12-17T12:24:00'),
  categorie: 'cuisine',
  content: [
    {
      key: 'I1234',
      data: 'https://i.picsum.photos/id/10/1000/500.jpg',
      alt: 'Panorama d\'un lac, en premier plan une forêt de sapin, en arrère plan des montagnes.',
    },
    {
      key: 'P3456',
      data: 'Nam consequat mauris mi, sed varius elit elementum id.<br>\
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br>\
Nullam vel commodo enim, ut pretium dui. Aenean auctor vestibulum est eget porta.<br>\
Morbi eget ligula et leo ullamcorper bibendum. Mauris libero ligula, mollis sit amet leo eget, rhoncus dapibus massa.<br>\
Nullam aliquet sem a porta viverra. Maecenas vitae efficitur dui, at rutrum ligula.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789T',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'A wonderful serenity has taken possession of my...',
  date: new Date('1998-10-04T15:36:14'),
  categorie: 'deco',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/10/1000/500.jpg',
      alt: 'Panorama d\'un lac, en premier plan une forêt de sapin, en arrère plan des montagnes.',
    },
    {
      key: 'P3456',
      data: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \
      Aenean commodo ligula eget dolor. Aenean massa. \
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \
      Nulla consequat massa quis enim. \
      Donec pede justo, fringilla vel, aliquet nec, vulputate.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'Li Europan lingues es membres del sam familie',
  date: new Date('2005-01-28T05:56:28'),
  categorie: 'voyages',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/13/1000/500.jpg',
      alt: 'Paysage d\'une plage sauvage avec quelques sapins et du bois flottant échoué sur le sable.',
    },
    {
      key: 'P3456',
      data: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
      totam rem aperiam, \
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, \
      sed quia consequuntur magni dolores eos qui ratione volupt',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'The quick, brown fox jumps over a lazy dog',
  date: new Date('2015-04-05T22:05:00'),
  categorie: 'cuisine',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/15/1000/500.jpg',
      alt: 'De grosses pierres en premier plan, une grande cascade en arrière plan.',
    },
    {
      key: 'P3456',
      data: 'But I must explain to you how all this mistaken idea of denouncing pleasure \
      and praising pain was born and I will give you a complete account of the system, \
      and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. \
      No one rejects, dislikes, or avoids pleasure itself.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'One morning, when Gregor Samsa woke from troubled',
  date: new Date('2019-06-22T20:33:15'),
  categorie: 'cuisine',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/16/1000/500.jpg',
      alt: "Panorama d'un gigantesque lac avec des petites montagnes en arrière plan.'",
    },
    {
      key: 'P3456',
      data: 'Li Europan lingues es membres del sam familie. \
      Lor separat existentie es un myth. \
      Por scientie, musica, sport etc, litot Europa usa li sam vocabular. \
      Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. \
      Omnicos directe al desirabilite de un nov lingua.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'The European languages are members of the same',
  date: new Date('2019-11-03T09:14:00'),
  categorie: 'style',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/17/1000/500.jpg',
      alt: 'Un chemin tout droit nous fait passer entre des oliviers.',
    },
    {
      key: 'P3456',
      data: 'The European languages are members of the same family. \
      Their separate existence is a myth. \
      For science, music, sport, etc, Europe uses the same vocabulary. \
      The languages only differ in their grammar, their pronunciation and their most common words. \
      Everyone realizes why a new common lang',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'Sed ut perspiciatis unde omnis iste natus error',
  date: new Date('2020-01-02T12:25:00'),
  categorie: 'deco',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/19/1000/500.jpg',
      alt: 'Contre plongée d\'un arbre mousseux.',
    },
    {
      key: 'P3456',
      data: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. \
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. \
      A small river named Duden flows by their place and supplies it with the.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'But I must explain to you how all this mistaken id',
  date: new Date('2020-02-16T18:29:00'),
  categorie: 'cuisine',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/27/1000/500.jpg',
      alt: 'Un homme pêche dans l\'océan debout sur un rocher, en arrière plan une bande de surfeur dans l\'eau.',
    },
    {
      key: 'P3456',
      data: 'A wonderful serenity has taken possession of my entire soul, \
      like these sweet mornings of spring which I enjoy with my whole heart. \
      I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. \
      I am so happy, my dear friend, so absorbed in the exquisite sense of mere.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'Far far away, behind the word mountains, far from.',
  date: new Date('2020-03-18T20:48:00'),
  categorie: 'voyages',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/28/1000/500.jpg',
      alt: 'Une forêt sauvage sur des rochers.',
    },
    {
      key: 'P3456',
      data: 'One morning, when Gregor Samsa woke from troubled dreams, \
      he found himself transformed in his bed into a horrible vermin. \
      He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, \
      slightly domed and divided by arches into stiff sections. \
      The bedding was hardly able to cover it and seemed ready to slide off any moment.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'The European languages are members of the same fam',
  date: new Date('2020-04-29T22:13:00'),
  categorie: 'cuisine',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/35/1000/500.jpg',
      alt: 'Mise au point sur un cactus aux longues épines.',
    },
    {
      key: 'P3456',
      data: 'The quick, brown fox jumps over a lazy dog. \
      DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. \
      Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! \
      Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. \
      Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'A wonderful serenity has taken possession of my en',
  date: new Date('2020-05-30T23:59:59'),
  categorie: 'style',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/37/1000/500.jpg',
      alt: 'Un océan, en premier plan de la végétation et quelques fleurs rouges, derrière un rocher.',
    },
    {
      key: 'P3456',
      data: 'Big July earthquakes confound zany experimental vow. \
      Foxy parsons quiz and cajole the lovably dim wiki-girl. \
      Have a pick: twenty six letters - no forcing a jumbled quiz! \
      Crazy Fredericka bought many very exquisite opal jewels. \
      Sixty zippers were quickly picked from the woven jute bag. \
      A quick movement of the enemy will jeopardize six gunboats.',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'The quick, brown fox jumps over a lazy dog.',
  date: new Date('2020-06-22T03:08:00'),
  categorie: 'cuisine',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/38/1000/500.jpg',
      alt: "Le ciel avec un nuage, on voit la ligne formée par le passage d'un avion.",
    },
    {
      key: 'P3456',
      data: 'The jay, pig, fox, zebra, and my wolves quack! \
      Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. \
      A wizard’s job is to vex chumps quickly in fog. \
      Watch "Jeopardy!", Alex Trebek\'s fun TV quiz game. \
      Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him..',
    },
    {
      key: 'P1558',
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\
Aliquam laoreet, ipsum eget rutrum dictum, ligula dui dapibus orci, eu rutrum turpis nunc ac odio. Proin aliquam non nisl sed commodo',
    },
    {
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},

]);

db.articles.createIndex({ date: 1 });
