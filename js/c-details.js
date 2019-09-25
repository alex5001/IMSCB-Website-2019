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