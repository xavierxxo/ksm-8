import React from 'react';
import DramaCard from '../elements/DramaCard';

const Popular = () => (
  <div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold mb-3">Popular Dramas</h2>
    <p>Discover the most trending K-Dramas that everyone is talking about. Watch these popular shows now!</p>
    <div className="overflow-x-auto mt-10">
      <div className="flex space-x-6">
        <DramaCard imgSrc="https://awsimages.detik.net.id/community/media/visual/2024/05/30/drama-korea-high-school-return-of-a-gangster-4.jpeg?w=1200" title="High School Return of a Gangster" description="This drama raises issues about bullying at school, adolescent adjustment, and the consequences of criminal acts, with a touch of comedy and romance." link="https://www.viu.com/ott/id/en/vod/2359978/High-School-Return-of-a-Gangster?utm_source=viu_web&utm_medium=vod_share_btn&utm_campaign=61bc60fc-b57c-44b2-a0ce-7eda4dfadefb&utm_content=link"/>
        <DramaCard imgSrc="https://www.viu.com/ott/id/articles/wp-content/uploads/2024/05/nonton-streaming-bitter-sweet-hell-sub-indo-viu-3.jpeg" title="Bitter Sweet Hell" description="This drama raises the issue of terror and mystery that hit the family of a famous psychologist, along with the collaboration between his son-in-law and mother-in-law to uncover the truth and protect their family." link="https://www.viu.com/ott/id/id/vod/2379417/Bitter-Sweet-Hell?utm_source=viu_web&utm_medium=vod_share_btn&utm_campaign=61bc60fc-b57c-44b2-a0ce-7eda4dfadefb&utm_content=link"/>
        <DramaCard imgSrc="https://www.viu.com/ott/id/articles/wp-content/uploads/2024/03/nonton-streaming-missing-crown-prince-sub-indo-viu.jpeg" title="Missing Crown Prince" description="This drama raises the issue of the struggle of a Crown Prince who was kidnapped and had to adapt to the life of ordinary people, as well as his love affair with the woman who saved him." link="https://www.viu.com/ott/id/id/vod/2341851/Missing-Crown-Prince?utm_source=viu_web&utm_medium=vod_share_btn&utm_campaign=61bc60fc-b57c-44b2-a0ce-7eda4dfadefb&utm_content=link"/>
        <DramaCard imgSrc="https://i.mydramalist.com/rN53dj_4c.jpg?v=1" title="Hierarchy" description="Jusin High School's law and order is controlled by the top 0.01% of students, but a mysterious transfer student creates a rift in their unshakable world." link="https://www.netflix.com/id/title/81624364?source=35"/>
        <DramaCard imgSrc="https://upload.wikimedia.org/wikipedia/en/6/67/Lovely_Runner.png" title="Lovely Runner" description="Based on popular webtoon Tomorrow’s Best, this time-slip romance drama follows unfolds as fan girl Im Sol gets transported back 15 years into the past to save her favourite idol Ryu Sun-jae from death." link="https://www.viu.com/ott/id/id/vod/2359590/Lovely-Runner"/>
        <DramaCard imgSrc="https://upload.wikimedia.org/wikipedia/en/7/76/Dreaming_of_a_Freaking_Fairy_Tale_poster.png" title="Dreaming of a Freaking Fairy Tale" description="Jae-rim, who dreams of becoming Cinderella, faces a challenging relationship after meeting and falling for Cha-min, the son of a wealthy family who does not believe in love." link="https://www.viu.com/ott/id/id/vod/2360178/Dreaming-of-a-Freaking-Fairy-Tale"/>
      </div>
    </div>
  </div>
);

export default Popular;