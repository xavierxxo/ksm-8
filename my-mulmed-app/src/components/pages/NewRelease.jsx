import React from 'react';
import DramaCard from '../elements/DramaCard';

const NewReleases = () => (
  <div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold mb-3">New Releases</h2>
    <p>Explore the latest K-Dramas that have just premiered. Stay updated with what's new in the world of Korean entertainment.</p>
    <div className="overflow-x-auto mt-10">
      <div className="flex space-x-6">
        <DramaCard imgSrc="https://upload.wikimedia.org/wikipedia/en/4/42/The_Auditors.png" title="The Auditors" description="This drama raises the issue of rampant corruption in large companies and the audit team's struggle to uncover it and uphold justice." link="https://www.viu.com/ott/id/id/vod/2382645/The-Auditors"/>
        <DramaCard imgSrc="https://www.viu.com/ott/id/articles/wp-content/uploads/2024/06/nonton-streaming-good-partner-sub-indo-viu-min.jpg" title="Good Partner" description="This drama raises the issue of marital problems and divorce, and how lawyers help their clients to resolve them in a fair and wise manner." link="https://www.viu.com/ott/id/id/vod/2373753/Teaser-Good-Partner"/>
        <DramaCard imgSrc="https://i.mydramalist.com/vX57e8_4f.jpg" title="Miss Night and Day" description="A romantic comedy about a young job seeker who suddenly finds herself trapped in the body of a 50-year-old woman and a skilled prosecutor who becomes entangled with her." link="https://www.netflix.com/id/title/81738994?source=35"/>
        <DramaCard imgSrc="https://upload.wikimedia.org/wikipedia/en/0/0e/No_Way_Out_The_Roulette_poster.png" title="No Way Out: The Rowlette" description="This drama raises the issue of moral and ethical dilemmas related to reward killings and society's 'right' to take the lives of criminals." link=""/> 
        <DramaCard imgSrc="https://images.justwatch.com/poster/309923507/s718/season-3.jpg" title="Sweet Home 3" description="a loner high school student who moves into a new apartment when monsters start breaking out among humanity and the apartment residents are trapped inside the building." link=""/>       
        <DramaCard imgSrc="https://artworks.thetvdb.com/banners/v4/series/417337/posters/66635a7922c94.jpg" title="My Military Valentine" description="Tells the dicey yet sweet story of inter-Korean romance and unification between a South Korean world star who has enlisted in the military and a North Korean female soldier." link="https://www.viki.com/tv/40441c-my-military-valentine?locale=en"/>
      </div>
    </div>
  </div>
);

export default NewReleases;