$(document).ready(function() {
    
    $('#ws-showcase').hide();
    
    // Actual data
    
    var wsData =  {
        "workshops" : [
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Cardiovascular Surgery: Aortic Valve Replacement",
                "description" : "This workshop will teach you the skills to perform some of the most frequent procedures in cardiovascular surgery, with a focus on heart valve surgery. You will discuss the surgical approach of the heart, become familiar with the special instruments used in cardiovascular surgery, learn about extracorporeal circulation and prosthetic heart valves and perform valve implantations. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/valve-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Cardiovascular Surgery: Coronary Bypass",
                "description" : "This workshop will teach you the skills to perform some of the most frequent procedures in cardiovascular surgery, with a focus on coronary bypass. You will discuss the surgical approach of the heart, become familiar with the special instruments used in cardiovascular surgery, learn about extracorporeal circulation and bypass procedures and perform a coronary by-pass yourself. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/bypass-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Vascular Surgery",
                "description" : "This workshop will present the key principles behind vascular surgery. You will become familiar with the special instruments used in vascular surgery, learn how to make an arteriotomy, arteriorrhaphy and angioplasty, perform vascular anastomoses and study the main indications for vascular surgery. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/vascular-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Neonatal Advanced Life Support",
                "description" : "Neonatology is an interesting specialty, but also overwhelming, considering the mixture of emotions that we, humans and doctors, might feel in different situations. Some of these are truly dramatic, and besides a good self-control of emotions, physicians also require excellent medical skills. This hands-on workshop is not addressed only to those passionate about the subject, but to all medical students, because no matter what their chosen specialty is, they can always find themselves in the situation of saving a life - especially one of a child. It’s an excellent opportunity to learn and apply the basic particularities of CPR for newborns, as well as making a comparison with its adult version.",
                "speaker" : "Lecturer Cătălin Cîrstoveanu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/nals2-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS Knots & Sutures",
                "description" : "RSSS's Knots & Sutures, an already classic surgical workshop, is great for beginners! If you know nothing about surgery, this is where you should start. You will become familiar with the main surgical instruments, learn how to manage a surgical wound and practice elementary surgical procedures such as knots, incisions and several types of sutures. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ks-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Paediatric Surgery",
                "description" : "Clinical Cases sound easy, don’t they? When you’re faced with a patient and you only have a few test results, making a diagnosis is not that easy. This workshop will teach you which tests you need, which you don’t, and also what treatment you need to administer to the patient. The Paediatric Surgery Clinical Case workshop, for example, will be an excellent experience for those who want to follow a paediatric speciality in the future. We all know that children are harder to diagnose than adults, so this workshop will come to aid your future paediatric career. The cases you will be asked to solve during the workshop will help you consolidate and broaden your knowledge about paediatric surgery, helping you discover a different approach.",
                "speaker" : "Assistant Lecturer Alexandra Munteanu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cs-paediatrics-min.jpg'
            }
        ]
    };
    
    // Static data loading
    
    $('#workshops > .ws-wrap').html(function(){
        
        for(i=0; i < wsData.workshops.length; i++)
        {
            if(i==0)
            {
                wsSectionData = "<div class=\"ws\">"
                                    +"<img src=\""+wsData.workshops[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+wsData.workshops[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                    +"</div>"
                                +"</div>";
            }else{
                wsSectionData = wsSectionData +
                                "<div class=\"ws\">"
                                    +"<img src=\""+wsData.workshops[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                    +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                    +"<div class=\"ws-details\">"
                                        +"<h3 class=\"ws-title\">"+wsData.workshops[i].title+"</h3>"
                                        +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                    +"</div>"
                                +"</div>";
            }
        }
        return wsSectionData;
    });
    
    
    // Showcase data loading
    
    $('.ws-details-link').click(function(){
        var k = $('.ws-details-link').index(this);
        
        $('#ws-showcase > img').attr("src", wsData.workshops[k].imgsrc);
        $('#sc-ws-title').html(wsData.workshops[k].title);
        $('#sc-ws-description').html(wsData.workshops[k].description);
        $('#sc-ws-speaker').html(wsData.workshops[k].speaker);
        $('#sc-ws-location').html(wsData.workshops[k].location);
        
        $('#ws-showcase').show();
    });
    
    // Showcase control

    $('.ws-sc-close').click(function(){
        $('#ws-showcase').hide();
    });
    
});