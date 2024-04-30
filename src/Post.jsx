import React from "react";
import { useParams } from "react-router-dom";
import { CalendarIcon, HeartIcon } from "@heroicons/react/solid";

export default function Post() {
  const {id} = useParams();
  const post = [{
    id: 1,
    name: "Razzmatazz",
    type: "DJ",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://www.theproject.es/archivos/razzmatazz-barcelona-16209.jpg",
    rating: 73,
    date: "3/05"
}, {
    id: 2,
    name: "Apolo",
    type: "Banda",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://www.theproject.es/archivos/razzmatazz-barcelona-16209.jpg",
    rating: 93,
    date: "3/05"
}, {
    id: 3,
    name: "El Molino",
    type: "Mago",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://www.theproject.es/archivos/razzmatazz-barcelona-16209.jpg",
    rating: 90,
    date: "3/05"
}].find(post => post.id === 1);

  return (<div><div className="overflow-hidden flex flex-col" key={post.name}>

  <div className="relative">
          <img className="w-full"
              src={post.image}
              alt="Sunset in the mountains" />
          <div
              className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-indigo-950 opacity-25">
          </div>
 
 
          <div
              className="text-xs absolute top-0 right-0 bg-orange-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-indigo-100 transition duration-500 ease-in-out">
              {post.type}
          </div>

  </div>
  <div className="px-6 py-3 flex items-center justify-between bg-indigo-50">
                <button className="button-menu">Ofertas</button>
                <button className="button-menu">Info sala</button>
                <button className="button-menu">Reviews</button>
            </div>
  <div className="px-6 py-4 mb-auto">
      <span 
          className="font-medium text-lg inline-block indigo-950 mb-2">
          {post.name}</span>
      <p className="text-gray-500 text-sm">
      {post.description} {post.description}
      </p>
      <p className="text-gray-500 text-sm mt-2">
      {post.description}
      </p>
      <p className="text-gray-500 text-sm mt-2">
      {post.description} {post.description}
      </p>
  </div>
  <div className="px-6 py-3 flex items-center justify-between bg-indigo-50">
      <div href="#" className="py-1 text-xs font-regular text-indigo-950 mr-1 flex items-center">
          <CalendarIcon className="w-6 h-6 text-orange-500" /><div className="ml-1">{post.date}</div>
      </div>
      <button className="button-menu">Solicitar</button>
  </div>

  <div className="px-6 py-4 mb-auto">
      <span 
          className="font-medium text-lg inline-block indigo-950 mb-2">
          {post.name} 2</span>
      <p className="text-gray-500 text-sm">
      {post.description} {post.description}
      </p>
      <p className="text-gray-500 text-sm mt-2">
      {post.description}
      </p>
      <p className="text-gray-500 text-sm mt-2">
      {post.description} {post.description}
      </p>
  </div>
  <div className="px-6 py-3 flex items-center justify-between bg-indigo-50">
      <div href="#" className="py-1 text-xs font-regular text-indigo-950 mr-1 flex items-center">
          <CalendarIcon className="w-6 h-6 text-orange-500" /><div className="ml-1">{post.date}</div>
      </div>
      <button className="button-menu">Solicitar</button>

  </div>
</div></div>
  );
}
