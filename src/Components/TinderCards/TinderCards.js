import React, { useState, useEffect } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import database from '../../firebase';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection('people')
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));
  }, []);
  return (
    <div className='tinderCards__shadow'>
      <div className='tinderCards__cardContainer'>
        {people.map(person => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{
                backgroundImage: `url(${person.url})`,
              }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

//{
//  name: 'Tony Stark',
//  url:
//    'https://img.cinemablend.com/filter:scale/quill/d/9/5/a/c/9/d95ac9d6f0acd56e12b9452301c763cd1aeffe51.jpg?mw=600',
//},
//{
//  name: 'Steve Rogers',
//  url:
//    'https://i.pinimg.com/474x/89/3c/46/893c462b5960b5f331c66ab3b00f87ae.jpg',
//},
//{
//  name: 'Natasha Romanoff',
//  url: 'https://hungarytoday.hu/wp-content/uploads/2019/05/black_widow.jpg',
//},
//{
//  name: 'Peter Parker',
//  url:
//    'https://i.pinimg.com/564x/14/dc/40/14dc40cea790f2c4b3e84d367f58c84a.jpg',
//},
//{
//  name: 'Wanda Maximoff',
//  url:
//    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_mas_mob_02_0_0.jpg',
//},
//{
//  name: 'Bruce Banner',
//  url:
//    'https://i.pinimg.com/originals/a3/f2/a3/a3f2a3112b94c39e4fb6a50d2295963c.jpg',
//},
//{
//  name: 'Thanos',
//  url:
//    'https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/26/thanos-avengers-infinity.jpg',
//},
//{
//  name: 'Deadpool',
//  url:
//    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F10%2Fmcddead_fe005-2000.jpg',
//},
//{
//  name: 'Thor',
//  url:
//    'https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684',
//},
//{
//  name: 'Logan',
//  url:
//    'https://media.gq.com/photos/58b9fda8803bdb766dd69ef7/16:9/w_1280,c_limit/wolverine.jpg',
//},
//{
//  name: 'Clint Barton',
//  url:
//    'https://s3-us-west-2.amazonaws.com/forgefiction/wiki-pages-photos-test/image_clint-barton-2LLxs0full.jpeg?hash=1596645729-825367',
//},
//{
//  name: 'Loki',
//  url:
//    'https://i.guim.co.uk/img/media/e5da92e4397a66d9771ca1ef4d0d8eb0847eda85/0_16_1920_1152/master/1920.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1d61ca60204a01b684eb2ec8213986e5',
//},
//{
//  name: `T'Challa`,
//  url:
//    'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/65WCQQCGZ43WXDT4VN6FHRV44M.jpg',
//},
//{
//  name: ' Matt Murdock',
//  url:
//    'https://i.pinimg.com/originals/37/6a/d7/376ad7021888ac7e71e6463d3454229c.jpg',
//},
//{
//  name: 'Jean Grey',
//  url:
//    'https://img.cinemablend.com/filter:scale/quill/1/6/0/d/2/f/160d2fecd5a21712d1336b6f11734abbfa9ed556.jpg?fw=1200',
//},
//{
//  name: 'Star-Lord',
//  url:
//    'https://akns-images.eonline.com/eol_images/Entire_Site/20201114/rs_1200x1200-201214124949-1200-Chris_Pratt-Guardians_Of_The_Galaxy_-_2014.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top',
//},
//{
//  name: 'Nick Fury',
//  url:
//    'https://tvline.com/wp-content/uploads/2020/09/samuel-l-jackson-nick-fury.jpg?w=620',
//},
//{
//  name: 'Groot',
//  url:
//    ' https://cdn.vox-cdn.com/thumbor/99WUPvdrLIQ20euntmxrdwzOS20=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8378039/baby-groot-guardians.0.jpg',
//},
//{
//  name: 'James Rupert "Rhodey" Rhodes',
//  url:
//    'https://cache.desktopnexus.com/thumbseg/2119/2119881-bigthumbnail.jpg',
//},
//{
//  name: 'Magneto',
//  url:
//    'https://qph.fs.quoracdn.net/main-qimg-0c86b2d9a7a040fb53d9f50cdcdfb0bd',
//},
//{
//  name: 'Gamora',
//  url:
//    'https://www.denofgeek.com/wp-content/uploads/2019/11/Gamora_Guardians_of_the_Galaxy.jpg?fit=1200%2C675',
//},
//{
//  name: 'Charles Xavier',
//  url: 'https://static.tvtropes.org/pmwiki/pub/images/charlesxavier.jpg',
//},
//{
//  name: 'Scott Summers',
//  url:
//    'https://michaeljacksoncelebrityclothing.com/wolverine-x-men-jacket/buy-cyclops-scott-summers-jacket.jpg',
//},
//{
//  name: 'Rogue',
//  url:
//    'https://media.comicbook.com/wp-content/uploads/2014/04/anna-paquin-rogue-days-of-future-past.jpg',
//},
//{
//  name: 'Mary Jane Watson',
//  url:
//    'https://heavy.com/wp-content/uploads/2017/07/mary-jane-e1499123666867.jpg?quality=65&strip=all&w=780',
//},
//{
//  name: 'Cable',
//  url:
//    'https://s.abcnews.com/images/Entertainment/josh-brolin-cable-deadpool-2-ht-jef-170807_4x3t_992.jpg',
//},
//{
//  name: 'Storm',
//  url:
//    'https://i.pinimg.com/originals/b2/64/1d/b2641d208e3247cd0855c16422366223.jpg',
//},
//{
//  name: 'Beast',
//  url:
//    'https://img1.looper.com/img/gallery/read-the-beast-solo-movie-script-from-longtime-x-men-franchise-editor/intro-1560779875.jpg',
//},
//{
//  name: 'Juggernaut',
//  url:
//    'https://iv1.lisimg.com/image/6795800/600full-juggernaut-%28vinnie-jones%29.jpg',
//},
//{
//  name: 'Rocket Raccoon ',
//  url:
//    'https://i.pinimg.com/originals/d7/0d/68/d70d68ec034c06968a12a9daa2a11d69.jpg',
//},
//{
//  name: 'Mystique',
//  url:
//    'https://static2.srcdn.com/wordpress/wp-content/uploads/x-men-apocalypse-blue-mystique-lawrence.jpg',
//},
//{
//  name: 'Drax the Destroyer ',
//  url:
//    'https://www.sideshow.com/storage/product-images/902669/drax-the-destroyer_marvel_feature.jpg',
//},
//{
//  name: 'Gambit',
//  url:
//    'https://i.pinimg.com/originals/79/23/6f/79236fdae25b5778f97f1eb878b017ba.jpg',
//},
//{
//  name: 'Hope van Dyne',
//  url: 'https://week99er.com/wp-content/uploads/2018/06/wasp.jpg',
//},
//{
//  name: 'Robert Louis Drake',
//  url:
//    'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Movieiceman.jpg/200px-Movieiceman.jpg',
//},
//{
//  name: 'En Sabah Nur',
//  url:
//    'https://www.chicagotribune.com/resizer/b6qFP92NJxPBOFyz-nyQ5TeRnSg=/415x233/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/T6U7FSDWMZAI7GXLW6ZZ4E2434.png',
//},
//{
//  name: 'Victor Creed',
//  url:
//    'https://static.comicvine.com/uploads/original/11119/111190794/4992066-6825743921-10116.jpg',
//},
//{
//  name: 'Scott Lang ',
//  url:
//    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ant-man-avengers-endgame-paul-rudd-1555594407.jpg',
//},
//{
//  name: 'Carol Danvers',
//  url:
//    'https://i.pinimg.com/originals/f4/a8/41/f4a8411cc3f9304f4b5f3044874b16e3.jpg',
//},
//{
//  name: 'Diana Prince',
//  url:
//    'https://cdn.onebauer.media/one/empire-images/articles/5b7efa8afd0c0bc84444aa8e/wonder-woman-1984.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill',
//},
//{
//  name: 'Valkryie',
//  url:
//    'https://theundefeated.com/wp-content/uploads/2017/10/tessa_thompson_thor.jpg?w=700',
//},
//{
//  name: 'Psylocke',
//  url:
//    'https://media.comicbook.com/2020/04/x-men-apocalypse-olivia-munn-psylocke-1217887-1280x0.jpeg',
//},
//{
//  name: '  Shuri',
//  url: 'https://i.redd.it/ctqlnf7eblf21.jpg',
//},
//{
//  name: ' Elektra',
//  url:
//    'https://akns-images.eonline.com/eol_images/Entire_Site/2020013/rs_600x600-200113151010-600-elektra.cm.11320.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top',
//},
//{
//  name: 'Okoye',
//  url:
//    'http://pm1.narvii.com/6945/cf8f25ef857b6b993f5303522f37771062850df7r1-420-420v2_uhq.jpg',
//},
//{
//  name: 'Lady Sif',
//  url:
//    'https://media.comicbook.com/2021/01/jaimie-alexander-lady-sif-marvel-1251131-1280x0.jpeg',
//},
//{
//  name: 'Peggy Carter',
//  url:
//    'https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsagentcarter_f001_l178_episode_thumbnail_1920x1080_10028091_0.png',
//},
//{
//  name: ' Pepper Potts',
//  url: 'https://s3.r29static.com/bin/entry/9d3/x,80/2174391/image.jpg',
//},
