// Write your JS code here

import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return <div className="flex flex-row justify-center items-start pt-20 h-screen px-8">
            <div>
                <h1 className='font-bold text-4xl w-80'>Clothes that get you Noticed</h1>
                <p className=' py-4 text-gray-500 w-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore nihil necessitatibus incidunt vitae eius sapiente molestiae voluptate nam, at mollitia consequatur labore, ab nisi, accusamus quod? Omnis, a mollitia!
                </p>
                <button className='my-2 rounded bg-blue-600 font-semibold text-white hover:bg-blue-700 py-2 w-48'>Shop Now</button>
            </div>
            <div>
                <img className='h-80' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" />
            </div>
        </div>;
    }
}

export default Home;

