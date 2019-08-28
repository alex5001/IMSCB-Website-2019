$(document).ready(function() {
    
    $('#ws-showcase').hide();
    
    // Actual data
    
    var wsData =  {
        "fundamentals" : [
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Funfamental 1",
                "description" : "description",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            },
            {
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
                "title" : "Fundamental 3",
                "description" : "description",
                "speaker" : "Speaker",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            }/*,
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
        "medicals": [
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Medical 1",
                "description" : "description",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Medical 2",
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
                "title" : "Medical 3",
                "description" : "description",
                "speaker" : "Speaker",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            }/*,
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
                "title" : "Surgical 1",
                "description" : "description",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Surgical 2",
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
                "title" : "Surgical 3",
                "description" : "description",
                "speaker" : "Speaker",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            }/*,
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