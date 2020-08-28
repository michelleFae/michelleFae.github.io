var padding = {top:20, right:40, bottom:0, left:0},
            w = 500 - padding.left - padding.right,
            h = 500 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();//category20c()

            //first 3 people who wanna do it ... if they dont do it, they have to select a candidate or officer willing to do the challenge for you. 
            //randomNumbers = getRandomNumbers(); /// who ever wins get checked off // write a UPE jingle in a second
            var data = [
                    {"label":"Sing a Song 1",  "value":1,  "question":"(3 people) As a group, sing a song in front of everyone here. Pick one of three songs: I want it that way (backstreet boys), Twinkle Twinkle Little Star (Nursery Rhyme), or Bad Guy (Billie Eilish)"}, // padding
                    {"label":"Dance Away",  "value":2,  "question":"(3 people) Do the Chicken dance in front of everyone (https://www.youtube.com/watch?v=l5sIspLfmXM)."},
                    {"label":"Piazza Post",  "value":3,  "question":"(5 people) Choose any one of your classes and publicly post an image of a whale on the class's Piazza. You are not allowed to disclose that this is a candidate challenge until tomorrow morning. In fact, the only thing that you can write on the post is 'I love whales.'"}, //color
                    {"label":"Sing a Song 2",  "value":4,  "question":"(3  people) As a group, sing a song infront of everyone here. Pick one of three songs: Don't stop believing (Journey), Any nursery rhyme of your choice, or we will rock you (Queen)"}, //font-weight
                    {"label":"Email HKN 1",  "value":5,  "question":"(1 person) Email hkn@hkn.eecs.berkeley.edu with a poem (written last year by Eric) (Michelle will provide the poem). Alternatively, write your own poem. You can not disclose that this is a candidate challenge. Forward the email to exec@upe.berkeley.edu AFTER you send it."}, //font-size
                    {"label":"Picture Perfect",  "value":6,  "question":"(5 people) Post a picture of GM on any one of your social media accounts. You can disclose that is a candidate challenge. If you don't have a social media account, email the picture to Danny Chu (president of HKN) (dannychu@berkeley.edu)."}, //background-color
                    {"label":"Drawing Blind 1",  "value":7,  "question":"(5 people) We're going to ask you to draw something with your eyes closed. The person who draws the best picture gets checked off (we will all vote). You can use paint or https://sketch.io/sketchpad/ for a drawing canvas. Then, post the picture on #random."},
                    {"label":"Draw away ~ ",  "value":8,  "question":"(5 people) With your eyes open, we're going to ask you to draw a picture of something on your computer. The person who draws the best picture gets checked off (we will all vote). You can use paint or https://sketch.io/sketchpad/ for a drawing canvas. Then, post the picture on #random. You will have 20 seconds to complete the drawing."}, //bottom
                    {"label":"Email a Professor 1",  "value":9,  "question":"(3 people) Send an amazing email to any Berkeley Professor. You can't disclose that this is a candidate challenge until tomorrow morning. Michelle will provide the email. Forward the email to exec@upe.berkeley.edu AFTER you send it."},
                    {"label":"Piazza Comment",  "value":10,  "question":"(3 people) Comment on a recent piazza post with the phrase: 'Whale, isn't that whaley nice to hear?'"},
                    {"label":"Professor Impression",  "value":11,  "question":"(2 people) Do your best impression of any professor. However, you can't reveal which professor it is. Additionally, you can't use the course name in your impression as well as the word 'announcements'. You get checked off for your candidate challenge if we guess the professor in 30 seconds. DM Michelle the professor's name before you start your impression."}, //bottom
                    {"label":"Officer Impression",  "value":12,  "question":"(2 people) Do your best impression of any officer. However, you can't reveal which officer it is. Additionally, you can't use the officer's committee or name in your impression. You get checked off for your candidate challenge if we guess the officer in 30 seconds. DM Michelle the officer's name before you start your impression."},
                    {"label":"Ask the Audience",  "value":13,  "question":"(2 people) Anyone in the audience can give you a challenge, which you can complete now or later."},
                    {"label":"Message a member",  "value":14,  "question":"(3 people) Slack message a UPE member, candidate, or officer that is not at GM with the phrase: 'Whale hello! Why didn't you come to GM?'.You can't disclose that this is a candidate challenge until tomorrow morning."}, //bottom
                    {"label":"Email a Professor 2",  "value":15,  "question":"(3 people) Send an email to any professor with only the phrase 'Do you like whales?'. You can't disclose that this is a candidate challenge until tomorrow morning."},
                    {"label":"Piazza Profile Pictures",  "value":16,  "question":"(3 people) Change your Piazza profile picture to a whale for the rest of the week. You can change it back next monday."},
                    {"label":"Social Media Profile Pictures",  "value":17,  "question":"(1 person) Change your social media profile picture to a whale for the rest of the week. You can change it back next monday. You can't disclose that this is a candidate challenge until next week. If you don't have a social media account, change your piazza or email profile picture."}, //bottom
                    {"label":"Ask the Audience",  "value":18,  "question":"(1 person) Anyone in the audience can give you a challenge, which you can complete now or later."},
                    {"label":"Mini Charades",  "value":19,  "question":"(3 people) Without talking, singing or typing, get the audience to guess the title of any movie in one minute. DM michelle the name of the movie before you start."},
                    {"label":"Meme Maker",  "value":20,  "question":"(5 people) Make a UPE releated meme and post it in #random. Each person has to make their own meme. This might be a helpful site: https://meme-creator.com/templates/all . You'll have 20 seconds to create your meme after we pick the last person for this challenge - but you can get started right away. We'll vote for the best meme and the winning creator will get their candidate challenge checked off."}, //bottom
                    {"label":"Ketchup Dance",  "value":21,  "question":"(3 people) Do the Ketchup song dance for a minute (https://www.youtube.com/watch?v=bxOyZnkFdWw)"},
                    {"label":"Hold it!",  "value":22,  "question":"(5 people) Say the word 'UPEeeee...' for as long as you can, in a single breath. The person who holds the word for the longest time gets checked off for the challenge."},
                    {"label":"Ask the Audience",  "value":23,  "question":"(1 person) Anyone in the audience can give you a challenge, which you can complete now or later."}, //bottom
                    {"label":"Do a Past Challenge",  "value":24,  "question":"(2 people) Pick any one of the completed challenges from this wheel and do it to get checked off. If there are no completed challenges, spin the wheel again."},
                    {"label":"The Chosen One",  "value":25,  "question":"(5 people) Place your hands on your keyboard. You have 10 seconds to make a choice. You can either DM Michelle with the character '1' or '2'.  If only one candidate DMs michelle a '1', that one candidate gets checked off, while the others do not. If more than one candidate DMs michelle with a '1', no one gets checked off. If no candidate does this, we flip a coin to decide whether we check off all candidates doing this challenge, or none of them (the probability of us checking off all candidates will be 1 in 8). If you decide to not DM michelle with '1', DM her with the character '2'."},
                    {"label":"DM an officer name",  "value":26,  "question":"(8 people) DM Michelle an officer name. The candidates that dm michelle the name of the most common officer get checked off. (No discussing the officer name amongst yourselves). However, if you all DM Michelle the same officer name, no one gets checked off. Also - you can't pick any officer on the exec board."}, //bottom
                    {"label":"UPE Jingle",  "value":27,  "question":"(3 people) Each of you should write & sing your own UPE jingle (An example of a jingle is a catchy rhyme to get you to buy a product). Feel free to use this (https://www.google.com/doodles/44th-anniversary-of-the-birth-of-hip-hop). We'll hear all your jingles at the end of the bingo game. The person with the best jingle gets checked off. (The jingle should be less that 30 seconds)."},
                    {"label":"Whale Rhymes",  "value":28,  "question":"(5 people) Each person has to say an english word that rhymes with whale. On their turn, they each have 5 seconds to come up with the rhyming word, ensuring not to repeat a word. If you can't come up with a word in that time, you're out of this mini-game and lose your chance to get checked off. The last person standing wins. You can't repeat a word."},
                    {"label":"Whale Dance", "value":29,  "question":"(5 people) Do this super fun whale dance (It's super easy and fun ... i don't usually dance, but this is a dance I'd totally do) - https://www.youtube.com/watch?v=Parej8Fi0es"}, 
                    {"label":"Whale Noises",  "value":30,  "question":"(3 people) How well can you immitate this whale noise: https://youtu.be/WabT1L-nN-E?t=27 ? The person with the best immitation wins."},
                    {"label":"Whale Search",  "value":31,  "question":"(3 people) You will all be given 20 seconds to find an image of a real or cartoon whale that looks like a particular character from a well-known movie. You have to upload your image onto #random and can't repeat the same image as someone else. (Michelle will annonunce the movie character after 3 people have been picked for this challenge)."},
                    {"label":"Longest Word",  "value":32,  "question":"(5 people) Create the longest word that you can using the following letters: 'whales are wonderful' and dm it to michelle (e.g. you can make the word 'falls'). The person with the longest word gets checked off. However, if there are multiple words of the same length, they are automatically disqualified. You have to submit your word before the next spin - so start thinking asap."}, //bottom
                    {"label":"Whaley Whale Memory",  "value":33,  "question":"(5 people) Watch this video once (https://www.youtube.com/watch?v=wrO6ZrB8sY8). Then be quizzed on things you saw in the video. Can you remember them all? The last person standing gets checked off."},
                    {"label":"Drawing Blind 2",  "value":34,  "question":"(5 people) We're going to ask you to draw something with your eyes closed. The person who draws the best picture gets checked off (we all will vote). You can use paint or https://sketch.io/sketchpad/ for a drawing canvas. Then, post the picture on #random."},
                    {"label":"Drawing Blind 3",  "value":35,  "question":"(3 people) We're going to ask you to draw something with your eyes closed. The person who draws the best picture gets checked off (we all will vote). You can use paint or https://sketch.io/sketchpad/ for a drawing canvas. Then, post the picture on #random."},
                    {"label":"TWO CHALLENGES",  "value":36,  "question":"(2 people) The next 2 people selected will have to do both the next two challenges on the wheel in order to get checked off!"}
                   
        ];
        var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);
        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            
        arcs.append("path")
            .attr("fill", function(d, i){ return getRedWhiteBlue(i % 3); })
            .attr("d", function (d) { return arc(d); });
        // add the text
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .style('fill', 'white')
            .style("font-size", "18px")
            .text( function(d, i) {
                return data[i].label;
            });
        container.on("click", spin);
        function spin(d){
            
            container.on("click", null);
            //all slices have been seen, all done
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
            if(oldpick.length == data.length){
                //reset
                oldpick.forEach(function (picked, i) {
                     d3.select(".slice:nth-child(" + (picked) + ") path")
                        .attr("fill", getRedWhiteBlue((picked + 2)% 3));
                        d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", getRedWhiteBlue((picked +3) % 3));
                });
                oldpick = [];
                console.log("done");
                container.on("click", spin);
               
                return;
            }
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            if(oldpick.indexOf(picked) !== -1){
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
            }
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", "#111");
                    //populate question
                    d3.select("#question h1")
                        .text(data[picked].question);
                    oldrotation = rotation;
              
                    /* Get the result value from object "data" */
                    console.log(data[picked].value)
              
                    /* Comment the below line for restrict spin to sngle time */
                    container.on("click", spin);
                });
        }
        // arrow
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
            .style({"fill":"#3264a8"});
        //draw spin circle
        container.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({"fill":"white","cursor":"pointer"});
        //spin text
        container.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .text("SPIN")
            .style({"font-weight":"bold", "font-size":"30px"});
        
        
        function rotTween(to) {
          var i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
        
        
        function getRandomNumbers(){
            var array = new Uint16Array(1000);
            var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                for(var i=0; i < 1000; i++){
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return array;
        }

function getRedWhiteBlue(index){
    return ["#86bfcf", "#bac2c9", "#002744"][index]
}



