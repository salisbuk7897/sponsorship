import * as React from 'react';

export default function Welcome({ sendDataToParent }) {

    function handleClick() {
        sendDataToParent(1);
    }

    return(
        <div class="grid grid-rows-2 gap-2 h-screen flex">
            <div class="columns-2 flex flex-row place-content-center gap-2 w-full">
                <img class="w-60 h-80 rounded-sm " src={require("./salisu.png")} />
                <img class="w-60 h-80 rounded-sm " src={require("./ihu1.jpg")} />
                {/* <div class="place-content-center">
                    <img class="w-80 h-80 rounded-full " src={require("./salisu.png")} />
                </div>
                <div class="place-content-center">
                    <img class="w-80 h-80 rounded-sm " src={require("./ihu1.jpg")} />
                </div> */}
            </div>
            
            <div class="">
                <h1 class="font-sans"> Hi There,</h1>
                <p class="indent-4 font-sans">
                    I am a final year student of Medicine and Surgery at Bayero University Kano (BUK), Nigeria, 
                    a self-taught software developer and one of the founders of BUKMEDS, 
                    a small group consisting of my classmates. 
                    BUKMEDS aims to create digital solutions for healthcare problems through research and development.
                    I am very interested in the intersection of medicine and technology. 
                    I intend to focus on digital health and research after graduation. 
                    hence, my decision to apply for Surgical Data Science (SDS) summer school in Strasbourg, France.
                    </p>
                <p class="indent-4 font-sans">
                    My application Got selected. To be able to attend this great school, I need about:
                </p>
                <p class="text-center text-5xl font-serif">
                    $2100
                </p>
                <p class="font-sans"> 
                    to cover the cost of transportation, visa and accomodation.
                </p>
                <p class="indent-4 font-sans"> The aim of setting up this website is to look for sponsorship. 
                    If you know any organisation or entity that can help me secure the funds,
                    Please do contact me using details on the "contact me" page. If not, Thank you for visiting!
                </p>
                <button class="bg-blue-300 float-right py-3 px-3 rounded-full font-sans" onClick={handleClick}>
                    $2100 for what?
                </button>
            </div>
        </div>
    )
}