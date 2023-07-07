import React from "react";
import {Hero} from "../components/hero/Hero"
import {New} from "../components/hero/New"
import {Recommand} from "../components/hero/Recommand"
import {Treading} from "../components/hero/Treading"

function Home() {
  return (
    <div>
   <Hero/>
   <New/>
   <Recommand/>
   <Treading/>
    </div>
  );
}

export default Home;
