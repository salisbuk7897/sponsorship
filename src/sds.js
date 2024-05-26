import * as React from 'react';

export default function SDS({sendDataToParent}) {
    function handleClick() {
        sendDataToParent(3);
    }

    return(
        <div class="grid grid-rows-2 gap-4 h-screen flex">
            <div class="columns-2 flex flex-row place-content-center gap-2 w-full">
                <img class="w-96 h-90 rounded-sm " src={require("./edu4SDS.png")} />
                
            </div>
            <div class="">
                <h1 class="text-2xl"> About Surgical Data Science</h1>
                <p class="indent-4">
                    The SDS summer school aims to promote research and innovation on computer/data science tools of 
                    clinical value by providing multidisciplinary education on surgical data science. The school is 
                    therefore dedicated to educating clinicians and computer scientists on respective contexts, needs, 
                    tools and methodologies.
                </p>
                <p class="indent-4">
                We are witnessing the transformation of operating rooms into smart hubs of interconnected advanced technologies 
                where multiple, highly specialized professionals must coordinate for the benefit of patients. Such high-stake 
                sociotechnical process is generally highly effective but error prone. Surgical data science aims to improve the 
                safety and efficiency of modern surgery by modelling multimodal surgical data and developing artificial 
                intelligence (AI) algorithms to provide timely assistance to caregivers. read more: <a  href='https://www.edu4sds.org/'>https://www.edu4sds.org/</a>
                </p>
                <br />
                <h1 class="text-2xl"> What are the benefits of Attending</h1>
                <ul>
                    <li>
                        * Tight and effective collaboration between clinicians and computer scientists to 
                        learn from each other and finally develop the common language needed to team up and 
                        complement each other.
                    </li>
                    <li>
                        * Learn from the experts about using AI to improve Surgical procedures like endoscopy, 
                        laparascopy and robot assisted surgery.
                    </li>
                    <li>
                        * Work with sophisticated tools, in fully equiped, state of the art labs.
                    </li>
                    <li>
                        * Work on group projects
                    </li>
                    <li>
                        * Learn to develop safe 
                        and efficient AI system that assist caregivers, improve quality of intervention and teaching of future clinicians.
                    </li>
                </ul>
                <button class="bg-blue-300 float-right py-3 px-3 rounded-full" onClick={handleClick}>
                    Contact Me
                </button>
            </div>
        </div>
    )
}