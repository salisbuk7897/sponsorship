export default function ForWhat({sendDataToParent}) {
    function handleClick() {
        sendDataToParent(2);
    }

    return(
        <div>
            <p> The following table contains the breakdown of the funds</p>
            <br />
            <table class="table-fixed w-full border-solid border-2 border-indigo-600 font-sans">
                <thead class="border-solid border-2 border-indigo-600 font-sans">
                    <tr>
                    <th class="border-solid border-2 border-indigo-600 font-sans">For</th>
                    <th class="border-solid border-2 border-indigo-600 font-sans">Range</th>
                    <th class="border-solid border-2 border-indigo-600 font-sans">Estimated cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border-solid border-2 border-indigo-600 font-sans">Air Ticket</td>
                    <td class="border-solid border-2 border-indigo-600 font-sans">$1200 - $1400 (economy)</td>
                    <td class="border-solid border-2 border-indigo-600 font-sans">$1300</td>
                    </tr>
                    <tr>
                    <td class="border-solid border-2 border-indigo-600 font-sans">Accomodation for a week</td>
                    <td class="border-solid border-2 border-indigo-600 font-sans">$500 - $1500</td>
                    <td class="border-solid border-2 border-indigo-600 font-sans">$643 (5 - 8 minutes from institute)</td>
                    </tr>
                    <tr>
                    <td class="border-solid border-2 border-indigo-600 font-sans">Visa</td>
                    <td class="border-solid border-2 border-indigo-600 font-sans">Nil</td>
                    <td class="border-solid border-2 border-indigo-600 font-sans">$157</td>
                    </tr>
                    <tr>
                    <td class="border-solid border-2 border-indigo-600 font-sans">Registration Fee</td>
                    <td class="border-solid border-2 border-indigo-600 font-sans">Waived by the institute</td>
                    <td class="border-solid border-2 border-indigo-600 font-sans">$326 or €300</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p class="font-sans">This is an estimate as at 24/5/2024, with an expectation of slight increase in air 
                fare and accomodation cost as the event approaches.</p>
            <button class="bg-blue-300 float-right py-3 px-3 rounded-full font-sans" onClick={handleClick}>
                Why All This?
            </button>
        </div>
    )
}