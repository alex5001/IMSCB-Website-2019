$(document).ready(function() {
    
    var wsData = {
        "fundamentals": [
            {
                "uid" : "",
                "category" : "1",
                "years": "V",
                "title" : "Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures",
                "description" : "The supratentorial region is an anatomical region of the brain located above the tentorium cerebelli and contains the cerebral cortex, hippocampus, basal ganglia and olfactory bulb. We will discover all this by dissecting brain structures and we will learn about the basic anatomy of this area. In the end we will talk about imagistic applications of all the information have learnt and see how these can help us in the management of a patient.",
                "speaker" : "Lect. Tarta Eugen, MD, PhD",
                "location" : "",
                "time" : new Date(2019, 11, 08, 14, 00),
                "imgsrc" : 'img/ws2/Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures (1)BUN.jpeg'
            }
        ],
        "medicals": [
            {
                "uid" : "",
                "category" : "2",
                "years": "V",
                "title" : "Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures",
                "description" : "The supratentorial region is an anatomical region of the brain located above the tentorium cerebelli and contains the cerebral cortex, hippocampus, basal ganglia and olfactory bulb. We will discover all this by dissecting brain structures and we will learn about the basic anatomy of this area. In the end we will talk about imagistic applications of all the information have learnt and see how these can help us in the management of a patient.",
                "speaker" : "Lect. Tarta Eugen, MD, PhD",
                "location" : "",
                "time" : new Date(2019, 11, 06, 14, 00),
                "imgsrc" : 'img/ws2/Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures (1)BUN.jpeg'
            },
            {
                "uid" : "",
                "category" : "3",
                "years": "V",
                "title" : "Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures",
                "description" : "The supratentorial region is an anatomical region of the brain located above the tentorium cerebelli and contains the cerebral cortex, hippocampus, basal ganglia and olfactory bulb. We will discover all this by dissecting brain structures and we will learn about the basic anatomy of this area. In the end we will talk about imagistic applications of all the information have learnt and see how these can help us in the management of a patient.",
                "speaker" : "Lect. Tarta Eugen, MD, PhD",
                "location" : "",
                "time" : new Date(2019, 11, 06, 13, 00),
                "imgsrc" : 'img/ws2/Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures (1)BUN.jpeg'
            }
        ],
        "surgicals": [
            {
                "uid" : "",
                "category" : "4",
                "years": "V",
                "title" : "Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures",
                "description" : "The supratentorial region is an anatomical region of the brain located above the tentorium cerebelli and contains the cerebral cortex, hippocampus, basal ganglia and olfactory bulb. We will discover all this by dissecting brain structures and we will learn about the basic anatomy of this area. In the end we will talk about imagistic applications of all the information have learnt and see how these can help us in the management of a patient.",
                "speaker" : "Lect. Tarta Eugen, MD, PhD",
                "location" : "",
                "time" : new Date(2019, 11, 06, 12, 00),
                "imgsrc" : 'img/ws2/Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures (1)BUN.jpeg'
            }
        ]
    };
    
    /*** Schedule Page ***/
    
    function schedule(){
        
        // Make a single array with all the workshops & sort them by date
        var ccData = wsData.fundamentals.concat(wsData.medicals, wsData.surgicals);
        ccData.sort((a, b) => (a.time > b.time) ? 1 : -1);
        
        // Make an object organized by day
        var schData = new Object();
        var currentDate = ccData[0].time.getDate();
        var k = 0;
        schData[k] = [];
        for(i=0; i < ccData.length; i++){
            if( ccData[i].time.getDate() === currentDate ){
                schData[k].push(ccData[i]);
            }else{
                currentDate = ccData[i].time.getDate();
                k++;
                schData[k] = [];
                schData[k].push(ccData[i]);
            }
        }
        
        // else if-uri pentru toate tipurile de sufixe (st, nd, rd, th)
        
    }
    
    /*** Choose the function you run depending on the page you are on. ***/
    
    if(document.title === "Schedule"){
        schedule();
    }
    
});