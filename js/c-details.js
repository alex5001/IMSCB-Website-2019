$(document).ready(function() {
    
    $('#ws-showcase').hide();
    
    // Actual data
    
    var cData =  {
        "conferences" : [
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "On how brain ageing triggers neurodegeneration (or not)",
                "description" : "People are afraid of neurodegeneration as they grow older. Do you ever think about how your brain will function once you start heading towards the senior years of your life? Our respectable guest, prof. Bogdan Ovidiu Popescu, MD, PhD, will share the secrets on the process of brain ageing and whether it influences the neurodegeneration or not. This conference is not to be missed!",
                "speaker" : "Professor Bogdan Ovidiu Popescu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : "img/c/sciences-min.jpg"
            },
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Mainting young the ageing brain",
                "description" : "Neurodegenerative disease is an umbrella term for a range of conditions which primarily affect the neurons in the human brain, so the progressive loss of structure or function of neurons can lead to  amyotrophic lateral sclerosis, Parkinson's disease, Alzheimer's disease and other diseases. The purpose of the conference is to inform you about how to keep your brain young and how to slow down the neurodegeneration!",
                "speaker" : "Liana Kobylinska, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/maintaining young the ageing brain.jpg'
            }
            ,
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Women in Interventional Radiology",
                "description" : "Have you always been passionate about radiology, and you would love to persue such a career. However, as it there is always in life, there is  a but, you want to persue a career but also have a family and kids. Would the radiations you are exposed to harm you? Is it likely to get breast cancer if you pursue such a domain? Would it be harmful for a pregnancy to be exposed? Is technology so advanced? Dr. Protto Sara joins us from Helinski to help us answer there questions and let us know on her experience in interventional radiology! Attend this conference because you can, because you are a women and you can persue your dreams as well!",
                "speaker" : "Sara Protto, MD, PhD, ETF deputy chairperson, Tampere University Hospital, Vascular and interventional radiology centre",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/Women in interventional radiology-min1.png'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Shok-late.. a non-sweet way to death",
                "description" : "Shock-late: the Unsweet way to death This interactive case based lecture will take us through the shock disease in trauma patients from diagnosis, managment and saving lives. Iis very important information for the anyone who is practicing Medicine and may see trauma cases",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/Osama M Odat1.jpg'
            }, {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The art and science behind a tattoo",
                "description" : "The art of tattooing has suffered many controversial opinions along the years. Nowadays getting tattooed has become a common action among the new generations. However, this art is still condemned by a large part of the society,although its meaning, purpouses and advantages still remain a taboo subject, focusing only on its disadvantages, which may or may not be as told.  Our conference will approach this taboo subject from the point of view of a tattoo artist, and also from the point of view of a dermatologist, each talking about different aspects of this art.  Are tattoos a mistery for you as they are for us? Ever wondered how society responds to a tattooed healthcare professional? Buckle up, because this conference has the aim of bringing this mystery to light.",
                "speaker" : "Cristian Cezar Brinzanescu ; Diana Savu MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/_Cristian Cezar Brinzanescu.jpg'
            }
           
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
                "imgsrc" : 'img/c/sample.jpeg'
            }*/
        ]
    };
    
    // Static data loading
    
    $('#conferences > .ws-wrap').html(function(){
        
        for(i=0; i < cData.conferences.length; i++)
        {
            if(i==0)
            {
                cSectionData = "<div class=\"ws\">"
                                    +"<img src=\""+cData.conferences[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+cData.conferences[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Conference Details</span>"
                                    +"</div>"
                                +"</div>";
            }else{
                cSectionData = cSectionData +
                                "<div class=\"ws\">"
                                    +"<img src=\""+cData.conferences[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+cData.conferences[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Conference Details</span>"
                                    +"</div>"
                                +"</div>";
            }
        }
        return cSectionData;
    });
    
    // Showcase data loading
    
    $('.ws-details-link').click(function(){
        var k = $('.ws-details-link').index(this);
        
        $('#ws-showcase > img').attr("src", cData.conferences[k].imgsrc);
        $('#sc-ws-title').html(cData.conferences[k].title);
        $('#sc-ws-description').html(cData.conferences[k].description);
        $('#sc-ws-speaker').html(cData.conferences[k].speaker);
        $('#sc-ws-location').html(cData.conferences[k].location);
        
        $('#ws-showcase').show();
    });
    
    // Showcase control

    $('.ws-sc-close').click(function(){
        $('#ws-showcase').hide();
    });
    
});