$(document).ready(function() {
    
    $('#ws-showcase').hide();
    
    // Actual data
    
    var wsData =  {
        "fundamentals" : [
           {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Fundamental Sciences Workshops are to be announced",
                "description" : "",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            },
           /* {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Fundamental 2",
                "description" : "description",
                "speaker" : "Speaker",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : " ",
                "description" : "",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            }   */
            /*, 
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "",
                "description" : "",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/sample.jpeg'
            }*/
        ]    ,
        "medicals": [
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Neonatal Advanced Life Support",
                "description" : "Neonatology is an interesting specialty, but also overwhelming, considering the mixture of emotions that we, humans and doctors, might feel in different situations. Some of these are truly dramatic, and besides a good self-control of emotions, physicians also require excellent medical skills. This hands-on workshop is not addressed only to those passionate about the subject, but to all medical students, because no matter what their chosen specialty is, they can always find themselves in the situation of saving a life - especially one of a child. It’s an excellent opportunity to learn and apply the basic particularities of CPR for newborns, as well as making a comparison with its adult version. ",
                "speaker" : "Lecturer Cătălin Cîrstoveanu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/Neonatal Advanced Life Support.jpg'
            },
           /* {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Medical 2",
                "description" : "description",
                "speaker" : "speaker",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Medical 3",
                "description" : "description",
                "speaker" : "Speaker",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            }  */ /*,
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "",
                "description" : "",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/sample.jpeg'
            }*/
        ],
        "surgicals": [
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Paediatric Surgery",
                "description" : "Have you ever wondered how Dr. House always seems to know what a patient has after just a few test results? This workshop will teach you which tests you need, which you don’t and also what treatment you need to administer to the patient. We all know that children are harder to diagnose than adults, the common challenges being  the variations in pathologies and often the low number of cases from which you can gain experience. The Paediatric Surgery Clinical Case workshop will be an excellent starting point for those who want to follow any kind of paediatric speciality in the future. The cases you will be asked to solve during the workshop will help you consolidate and broaden your knowledge about paediatric surgery, helping you discover a different approach. Hint: it’s never lupus.",
                "speaker" : "Assoc.Prof. Radu-Iulian Spătaru",
                
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cs-paediatrics-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Mastering the surgical procedure of cleft lip and palate",
                "description" : "Cleft lip and palate is the most common of the craniofacial anomalies. Children born with cleft lips and palates present various challenges throughout their development that need to be solved for successful habilitation. The complexity of these problems requires that numerous health care practitioners cooperate in providing the specialized knowledge and skills necessary to ensure comprehensive care, including timely surgery and speech therapy. At our workshop you will learn more about these complex patients and how to help them face any difficulties that may arise. You will find out more about this anomaly and also, you will enter in an OR to see the surgical approach.",
                "speaker" : "Assoc.Prof. Radu-Iulian Spătaru",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/Mastering the surgical procedure of cleft lip and palate (1).jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Orthopaedics",
                "description" : "Orthopaedics is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system.Including bones, joints, ligaments, muscles and nerves, it enables the active and passive movements that shape our everyday life. The workshop creates an interactive enviroment that will challenge your medical knowledge and communication skills resulting in an accurate diagnosis based on the information provided by a virtual patient.",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-ortho-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Obstetrics and Gynaecology",
                "description" : "Clinical Case: Obstetrics and Gynaecology Workshop is an interactive clinical workshop that proved itself as an effective learning tool. It is dedicated to students and young doctors that want to hone their skills in positive and differential diagnoses and therapeutic behavior using gripping, real-world clinical cases.",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-obg-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: General Surgery",
                "description" : "Clinical Cases sound easy, don’t they? When you’re faced with a patient and you only have a few test results, making a diagnosis is not that easy. Learn how to select the the most useful tests and familiarise yourself with the elected treatment. Broaden your knowledge and take the unique opportunity not only to test your ability to make the best decisions during an emergency, but also to make an accurate diagnosis. Discover the most valuable secrets of a surgeon during an interactive workshop that will enable you to come up with the best results.",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-gen-surgery-min.jpg'
            }
            /*,
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Surgical 3",
                "description" : "description",
                "speaker" : "Speaker",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            }*/ /*,
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "",
                "description" : "",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/sample-min.jpg'
            }*/
        ]
    };
    
    // Static data loading
    
    $('#fundamentals > .ws-wrap').html(function(){
        
        for(i=0; i < wsData.fundamentals.length; i++)
        {
            if(i==0)
            {
                wsSectionData = "<div class=\"ws\">"
                                    +"<img src=\""+wsData.fundamentals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+wsData.fundamentals[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                    +"</div>"
                                +"</div>";
            }else{
                wsSectionData = wsSectionData +
                                "<div class=\"ws\">"
                                    +"<img src=\""+wsData.fundamentals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+wsData.fundamentals[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                    +"</div>"
                                +"</div>";
            }
        }
        return wsSectionData;
    });
    
    $('#medicals > .ws-wrap').html(function(){
        
        for(i=0; i < wsData.medicals.length; i++)
        {
            if(i==0)
            {
                wsSectionData = "<div class=\"ws\">"
                                    +"<img src=\""+wsData.medicals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+wsData.medicals[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                    +"</div>"
                                +"</div>";
            }else{
                wsSectionData = wsSectionData +
                                "<div class=\"ws\">"
                                    +"<img src=\""+wsData.medicals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+wsData.medicals[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                    +"</div>"
                                +"</div>";
            }
        }
        return wsSectionData;
    });
    
    $('#surgicals > .ws-wrap').html(function(){
        
        for(i=0; i < wsData.surgicals.length; i++)
        {
            if(i==0)
            {
                wsSectionData = "<div class=\"ws\">"
                                    +"<img src=\""+wsData.surgicals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+wsData.surgicals[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                    +"</div>"
                                +"</div>";
            }else{
                wsSectionData = wsSectionData +
                                "<div class=\"ws\">"
                                    +"<img src=\""+wsData.surgicals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+wsData.surgicals[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                    +"</div>"
                                +"</div>";
            }
        }
        return wsSectionData;
    });
    
    // Showcase data loading
    
    $('.ws-details-link').click(function(){
        var inSection = $(this).parent().parent().parent().parent().attr('id'),
            k = $('.ws-details-link').index(this);
        
        switch(inSection){
            case "fundamentals": 
                $('#ws-showcase > img').attr("src", wsData.fundamentals[k].imgsrc);
                $('#sc-ws-title').html(wsData.fundamentals[k].title);
                $('#sc-ws-description').html(wsData.fundamentals[k].description);
                $('#sc-ws-speaker').html(wsData.fundamentals[k].speaker);
                $('#sc-ws-location').html(wsData.fundamentals[k].location);
                break;
            case "medicals": 
                k = k - wsData.fundamentals.length;
                $('#ws-showcase > img').attr("src", wsData.medicals[k].imgsrc);
                $('#sc-ws-title').html(wsData.medicals[k].title);
                $('#sc-ws-description').html(wsData.medicals[k].description);
                $('#sc-ws-speaker').html(wsData.medicals[k].speaker);
                $('#sc-ws-location').html(wsData.medicals[k].location);
                break;
            case "surgicals": 
                k = k - wsData.fundamentals.length - wsData.medicals.length;
                $('#ws-showcase > img').attr("src", wsData.surgicals[k].imgsrc);
                $('#sc-ws-title').html(wsData.surgicals[k].title);
                $('#sc-ws-description').html(wsData.surgicals[k].description);
                $('#sc-ws-speaker').html(wsData.surgicals[k].speaker);
                $('#sc-ws-location').html(wsData.surgicals[k].location);
        }
        
        $('#ws-showcase').show();
    });
    
    // Showcase control

    $('.ws-sc-close').click(function(){
        $('#ws-showcase').hide();
    });
    
});