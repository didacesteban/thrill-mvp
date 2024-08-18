import React from "react";
import MainPage from "./MainPage";
import Profile from "./Profile";
import Post from "./Post";


const data = [    {
  id: 1,
  name: "Harmony Hall",
  type: "Classical Music",
  description: "A grand venue for classical music performances, offering an intimate atmosphere.",
  image: "https://picsum.photos/600/400?random=1",
  rating: 85,
  date: "5/12"
},
{
  id: 2,
  name: "The Comedy Cave",
  type: "Stand-Up Comedy",
  description: "The best comedians from around the world perform here in this cozy, underground spot.",
  image: "https://picsum.photos/600/400?random=2",
  rating: 92,
  date: "6/23"
},
{
  id: 3,
  name: "Bass Arena",
  type: "Electronic Dance Music",
  description: "A massive arena with state-of-the-art sound systems for EDM lovers.",
  image: "https://picsum.photos/600/400?random=3",
  rating: 88,
  date: "7/14"
},
{
  id: 4,
  name: "Acoustic Garden",
  type: "Acoustic Sessions",
  description: "An open-air venue surrounded by nature, perfect for acoustic performances.",
  image: "https://picsum.photos/600/400?random=4",
  rating: 90,
  date: "8/04"
},
{
  id: 5,
  name: "Jazz Junction",
  type: "Jazz",
  description: "A classic jazz club with an old-school vibe, featuring top jazz artists.",
  image: "https://picsum.photos/600/400?random=5",
  rating: 95,
  date: "9/18"
},
{
  id: 6,
  name: "Rock Palace",
  type: "Rock",
  description: "A legendary venue for rock concerts, with a history of iconic performances.",
  image: "https://picsum.photos/600/400?random=6",
  rating: 97,
  date: "10/10"
},
{
  id: 7,
  name: "Indie Loft",
  type: "Indie Bands",
  description: "An intimate venue showcasing up-and-coming indie bands.",
  image: "https://picsum.photos/600/400?random=7",
  rating: 84,
  date: "11/07"
},
{
  id: 8,
  name: "Hip-Hop Haven",
  type: "Hip-Hop",
  description: "The go-to place for hip-hop performances and battles.",
  image: "https://picsum.photos/600/400?random=8",
  rating: 89,
  date: "12/15"
},
{
  id: 9,
  name: "Country Barn",
  type: "Country Music",
  description: "A rustic venue set in a barn, perfect for country music and line dancing.",
  image: "https://picsum.photos/600/400?random=9",
  rating: 82,
  date: "1/21"
},
{
  id: 10,
  name: "Opera House",
  type: "Opera",
  description: "A grand and elegant venue for opera lovers, with stunning acoustics.",
  image: "https://picsum.photos/600/400?random=10",
  rating: 94,
  date: "2/28"
},
{
  id: 11,
  name: "Soul Sanctuary",
  type: "Soul",
  description: "A place where soul music comes alive, with passionate performances.",
  image: "https://picsum.photos/600/400?random=11",
  rating: 87,
  date: "3/09"
},
{
  id: 12,
  name: "Blues Bar",
  type: "Blues",
  description: "A dimly lit bar where the blues are played with heart and soul.",
  image: "https://picsum.photos/600/400?random=12",
  rating: 91,
  date: "4/11"
},
{
  id: 13,
  name: "Latin Fiesta",
  type: "Latin Music",
  description: "A vibrant venue for salsa, merengue, and other Latin music genres.",
  image: "https://picsum.photos/600/400?random=13",
  rating: 93,
  date: "5/19"
},
{
  id: 14,
  name: "Folk Forest",
  type: "Folk Music",
  description: "A tranquil venue nestled in the woods, ideal for folk music.",
  image: "https://picsum.photos/600/400?random=14",
  rating: 86,
  date: "6/25"
},
{
  id: 15,
  name: "Pop Arena",
  type: "Pop",
  description: "A modern arena hosting the biggest pop stars and high-energy performances.",
  image: "https://picsum.photos/600/400?random=15",
  rating: 98,
  date: "7/13"
},
{
  id: 16,
  name: "Metal Fortress",
  type: "Heavy Metal",
  description: "A fortress of sound for the heaviest of metal bands and their fans.",
  image: "https://picsum.photos/600/400?random=16",
  rating: 85,
  date: "8/05"
},
{
  id: 17,
  name: "Reggae Island",
  type: "Reggae",
  description: "A laid-back venue where the spirit of reggae flows freely.",
  image: "https://picsum.photos/600/400?random=17",
  rating: 92,
  date: "9/17"
},
{
  id: 18,
  name: "Punk Pit",
  type: "Punk",
  description: "A no-frills venue for raw and energetic punk rock performances.",
  image: "https://picsum.photos/600/400?random=18",
  rating: 80,
  date: "10/31"
},
{
  id: 19,
  name: "Dance Dome",
  type: "Dance",
  description: "A futuristic dome where dance music and lights create a hypnotic experience.",
  image: "https://picsum.photos/600/400?random=19",
  rating: 96,
  date: "11/22"
},
{
  id: 20,
  name: "Funk Factory",
  type: "Funk",
  description: "A lively venue where the groove is strong and the funk is real.",
  image: "https://picsum.photos/600/400?random=20",
  rating: 88,
  date: "12/30"
}]

export const getRoutes = () => {
  const routes = [
    {
      path: "",
      element: <MainPage data={data} />,
    },
    {
      path: "post",
      element: <MainPage data={data} />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "post/:id",
      element: <Post data={data} />,
    },
  ];

  return routes;
};
