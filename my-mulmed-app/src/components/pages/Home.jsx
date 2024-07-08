import React from 'react';
import DramaCard from '../elements/DramaCard';

const Home = () => (
  <div>
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-3">Welcome to K-Drama World</h2>
      <p>Find the latest and most popular Korean dramas here. Explore our curated list and dive into the world of K-Dramas!</p>
      <div className="overflow-x-auto mt-10">
        <div className="flex space-x-6">
          <DramaCard imgSrc="https://koreanindo.net/wp-content/uploads/2024/03/queen-of-tears-1-scaled.jpeg" title="Queen of Tears" description="This drama raises the issue of marriage crises experienced by young couples due to family pressure and lack of communication." link="https://www.netflix.com/id/title/81707950?source=35"/>
          <DramaCard imgSrc="https://upload.wikimedia.org/wikipedia/id/8/8a/Doctor_Slump_%28TV_series%29_poster.jpg" title="Doctor Slump" description="This drama raises the issue of mental health, especially depression and PTSD, that young doctors face in the competitive medical world." link="https://www.netflix.com/id/title/81697985?source=35"/>
          <DramaCard imgSrc="https://m.media-amazon.com/images/M/MV5BN2RhNDIyYWMtZDZhYy00NWQ3LThmNjAtYjUyNDgxYTE0ZjZlXkEyXkFqcGdeQXVyNjI4NDY5ODM@.V1.jpg" title="Pyramid Game" description="This drama raises the issue of bullying and violence in schools due to a cruel social hierarchy system and the dangerous Pyramid Game voting game." link="https://www.viu.com/ott/id/en/vod/2315076/Pyramid-Game" />
          <DramaCard imgSrc="https://asianwiki.com/images/c/c7/Flexx_Cop-p.jpg" title="Flex x Cop" description="This drama raises the issue of social and power disparities between wealthy conglomerates and police officers in upholding justice." link="" />
          <DramaCard imgSrc="https://o-cdn-cas.sirclocdn.com/parenting/images/The_Player_2.width-800.format-webp.webp" title="The Player 2: Master of Swindlers" description="This drama raises the issue of fraud and corruption committed by elites and conglomerates, and how a group of con artists fight them to uphold justice." link="https://www.viu.com/ott/id/id/vod/2368847/The-Player-2-Master-of-Swindlers"/>
          <DramaCard imgSrc="https://asianwiki.com/images/b/bb/My_Sweet_Mobster-tp1.jpeg" title="My Sweet Mobster" description="This drama raises the issue of stigma and discrimination that former prisoners face in the process of reintegrating into society, as well as their struggle to find love and acceptance." link="https://www.viu.com/ott/id/id/vod/2381287/My-Sweet-Mobster" />
          <DramaCard imgSrc="https://upload.wikimedia.org/wikipedia/en/4/42/The_Auditors.png" title="The Auditors" description="This drama raises the issue of rampant corruption in large companies and the audit team's struggle to uncover it and uphold justice." link="https://www.viu.com/ott/id/id/vod/2382645/The-Auditors"/>
          <DramaCard imgSrc="https://www.viu.com/ott/id/articles/wp-content/uploads/2024/06/nonton-streaming-good-partner-sub-indo-viu-min.jpg" title="Good Partner" description="This drama raises the issue of marital problems and divorce, and how lawyers help their clients to resolve them in a fair and wise manner." link="https://www.viu.com/ott/id/id/vod/2373753/Teaser-Good-Partner"/>
          <DramaCard imgSrc="https://upload.wikimedia.org/wikipedia/en/0/0e/No_Way_Out_The_Roulette_poster.png" title="No Way Out: The Rowlette" description="This drama raises the issue of moral and ethical dilemmas related to reward killings and society's 'right' to take the lives of criminals." link=""/>        
        </div>
      </div>
    </div>
  </div>
);

export default Home;
