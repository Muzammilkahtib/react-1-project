import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";



const Home = () => {
  return (

    <> 
    <div className="home" id="home">
        <main>
            <h1 >TechFizz</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta a officia laudantium vitae vero doloremque cum, corrupti ut tenetur ad quibusdam cumque quisquam eaque molestias nihil eligendi sequi adipisci perspiciatis explicabo, fuga in nulla velit ducimus. Error placeat magni ut. Incidunt, ut magnam, beatae, ipsam consequuntur assumenda obcaecati dolor dicta saepe facere magni porro id Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias veniam veritatis, earum maxime culpa molestiae eveniet ut debitis nobis praesentium provident adipisci temporibus vel, sapiente exercitationem repudiandae sunt inventore. Sapiente ea, a odio officiis aut repellat quis magnam odit rerum minus tempora dicta quam illum corporis blanditiis animi culpa fuga? Nulla ad laborum culpa a.</p>
      </div>
    </div>

   <div className="home4" id="brands" >
    <div>
      <h1>Brands</h1>

      <article>
        <div style={{animationDelay:"0.3s",}}>
          <AiFillGoogleCircle />
          <p>Google</p>
        </div>
        
        <div style={{animationDelay:"0.5s",}}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
        </div>

        
        <div style={{animationDelay:"0.7s",}}>
          <AiFillYoutube />
          <p>Youtube</p>
        </div>

        
        <div style={{animationDelay:"1s",}}>
          <AiFillInstagram />
          <p>Instagram</p>
        </div>
      </article>
    </div>
   </div>

    </>
  );
};

export default Home;