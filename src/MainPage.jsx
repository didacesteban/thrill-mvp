import React from "react";
import { Link} from "react-router-dom";
import { CalendarIcon, HeartIcon } from "@heroicons/react/solid";

export default function MainPage({ data }) {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data && data.map((post) => <div className="rounded overflow-hidden shadow-lg flex flex-col" key={post.name}>
            <Link to={`post/${post.id}`}>
            <div className="relative">
                    <img className="w-full"
                        src={post.image}
                        alt="Sunset in the mountains" />
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-indigo-950 opacity-25">
                    </div>
              
                <span>
                    <div className="text-xs absolute top-0 right-0 bg-orange-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-indigo-100 transition duration-500 ease-in-out">
                        {post.type}
                    </div>
                </span>
            </div>
            </Link>
            <div className="px-6 py-4 mb-auto">
                <span
                    className="font-medium text-lg inline-block indigo-950 mb-2">
                    {post.name}</span>
                <p className="text-gray-500 text-sm">
                {post.description}
                </p>
            </div>
            <div className="px-6 py-3 flex items-center justify-between bg-indigo-50">
                <div href="#" className="py-1 text-xs font-regular text-indigo-950 mr-1 flex items-center">
                    <CalendarIcon className="w-6 h-6 text-orange-500" /><div className="ml-1">{post.date}</div>
                </div>

                <div href="#" className="py-1 text-xs font-regular text-indigo-950 mr-1 flex items-center">
                    <HeartIcon className="w-6 h-6 text-orange-500" />
                    <div className="ml-1">{post.rating}%</div>
                </div>
            </div>
        </div>)}

    </div>

    </div>
  );
}
