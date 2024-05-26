export default function ForWhat({sendDataToParent}) {
    function handleClick() {
        sendDataToParent(2);
    }

    return(
        <div>
            <p> The following table contains the breakdown of the funds</p>
            <br />
            <table class="table-fixed w-full border-solid border-2 border-indigo-600">
                <thead class="border-solid border-2 border-indigo-600">
                    <tr>
                    <th class="border-solid border-2 border-indigo-600">For</th>
                    <th class="border-solid border-2 border-indigo-600">Range</th>
                    <th class="border-solid border-2 border-indigo-600">Estimated cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border-solid border-2 border-indigo-600">Air Ticket</td>
                    <td class="border-solid border-2 border-indigo-600">$1200 - $1400 (economy)</td>
                    <td class="border-solid border-2 border-indigo-600">$1300</td>
                    </tr>
                    <tr>
                    <td class="border-solid border-2 border-indigo-600">Accomodation for a week</td>
                    <td class="border-solid border-2 border-indigo-600">$500 - $1500</td>
                    <td class="border-solid border-2 border-indigo-600">$643 (5 - 8 minutes from institute)</td>
                    </tr>
                    <tr>
                    <td class="border-solid border-2 border-indigo-600">Visa</td>
                    <td class="border-solid border-2 border-indigo-600">Nil</td>
                    <td class="border-solid border-2 border-indigo-600">$157</td>
                    </tr>
                    <tr>
                    <td class="border-solid border-2 border-indigo-600">Registration Fee</td>
                    <td class="border-solid border-2 border-indigo-600">Waived by the institute</td>
                    <td class="border-solid border-2 border-indigo-600">$326 or €300</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p>This is an estimate as at 24/5/2024, with an expectation of slight increase in air 
                fare and accomodation cost as the event approaches.</p>
            <button class="bg-blue-300 float-right py-3 px-3 rounded-full" onClick={handleClick}>
                Why All This?
            </button>
        </div>
    )
}