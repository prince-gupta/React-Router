import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component{
    render(){
        const Articles = [
            "Settings Article 1",
            "Settings Article 2",
            "Settings Article 3",
            "Settings Article 4",
            "Settings Article 5",
            "Settings Article 6",
            "Settings Article 7",
            "Settings Article 8",
            "Settings Article 9",
        ].map((title,i) => <Article key={i} title={title}></Article>);

        const adText = [
            "ad 1 text",
            "ad 2 text",
            "ad 3 text",
            "ad 4 text",
            "ad 5 text",
            "ad 6 text",
        ];
        const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

        return (

            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="well text-center">
                            {randomAd}
                        </div>
                    </div>
                </div>

                <div class="row">{Articles}</div>
            </div>
        );
    }
}