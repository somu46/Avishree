import React from 'react';





const PhotosData = [
  {
    id: 1,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464204252_122116727162514888_9205309151012874358_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=54ZO6G0fLEQQ7kNvgGQTJAR&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=Az2wEnBQOyb4t0jSFejBwUn&oh=00_AYBkRjHV2B1ujF1r8Q3WuUcII_mDpkFVNtZHPhf9R9nD6Q&oe=67395343',
  },
  {
    id:2,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464112787_122116727132514888_2278513851889402223_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DCN2X996Fw0Q7kNvgFBZNYq&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=AjhKS0c1YQ_G3LEdJnIOuPc&oh=00_AYAiacnTwAUydvV3F9Wuz9w4jNomdpvtv940wxZec2L2fg&oe=67393D7C'
  },
  {
    id:3,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464322041_122116727102514888_3700317002850497627_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ivn-kf2S7LYQ7kNvgGXNC1Z&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=AyrTvGw15guh7WzJTAwhoL9&oh=00_AYBHSRJ2PL2xcvKOxF_7Xk2sTELauP_mv_kGcsLknzE-XQ&oe=67395578'
  },
  {
    id:3,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464322041_122116727102514888_3700317002850497627_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ivn-kf2S7LYQ7kNvgGXNC1Z&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=AyrTvGw15guh7WzJTAwhoL9&oh=00_AYBHSRJ2PL2xcvKOxF_7Xk2sTELauP_mv_kGcsLknzE-XQ&oe=67395578'
  },
  {
    id:3,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464322041_122116727102514888_3700317002850497627_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ivn-kf2S7LYQ7kNvgGXNC1Z&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=AyrTvGw15guh7WzJTAwhoL9&oh=00_AYBHSRJ2PL2xcvKOxF_7Xk2sTELauP_mv_kGcsLknzE-XQ&oe=67395578'
  },
  {
    id:3,
    image: 'https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/464322041_122116727102514888_3700317002850497627_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ivn-kf2S7LYQ7kNvgGXNC1Z&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=AyrTvGw15guh7WzJTAwhoL9&oh=00_AYBHSRJ2PL2xcvKOxF_7Xk2sTELauP_mv_kGcsLknzE-XQ&oe=67395578'
  }
];

function Photos() {
  return (
    <div className="container mt-[5.1rem] mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Photo Gallery</h2>
      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
        {PhotosData.map((hall, index) => (
          <div key={index} className="banquet-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={hall.image} alt={hall.id} className="w-full h-48 object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Photos;