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
      alt: "Panorama d'un lac, en premier plan une forêt de sapin, en arrère plan des montagnes.",
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
  title: 'Far far away, behind the word mountains, far from.',
  date: new Date('1998-10-04T15:36:14'),
  categorie: 'deco',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/10/1000/500.jpg',
      alt: "Panorama d'un lac, en premier plan une forêt de sapin, en arrère plan des montagnes.",
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
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'Far far away, behind the word mountains, far from.',
  date: new Date('2005-01-28T05:56:28'),
  categorie: 'voyages',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/13/1000/500.jpg',
      alt: "Panorama d'un lac, en premier plan une forêt de sapin, en arrère plan des montagnes.",
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
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
},
{
  title: 'Far far away, behind the word mountains, far from.',
  date: new Date('2015-04-05T22:05:00'),
  categorie: 'cuisine',
  content: [
    {
      key: 'I1234T',
      data: 'https://i.picsum.photos/id/15/1000/500.jpg',
      alt: "Panorama d'un lac, en premier plan une forêt de sapin, en arrère plan des montagnes.",
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
      key: 'I6789',
      data: 'https://i.picsum.photos/id/11/1000/500.jpg',
      alt: "Paysage naturel, une rivière entourée d'une forêt de sapin, des collines en arrière plan.",
    },
  ],
}]);

db.articles.createIndex({ date: 1 });
