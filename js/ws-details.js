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
                "imgsrc" : 'img/ws/nals2-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "3D printing: Multiple Technologies and how to use them for the benefit of the patient",
                "description" : "3D printing is a modern technology that can be used to propel medicine in a new era, the era of personalized medicine. In this workshop we will talk about different 3D-printing technologies focusing on the advantages and disadvantages of using each one to create better 3D printed patient-specific models. We will also showcase some clinical cases where we used 3D printing and talk about how these models helped in patient treatment/ medical personnel education.",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/3D printing- Multiple Technologies and how to use them for the benefit of the patient4.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "3D Printing: Applications in Medicine",
                "description" : "3D printing is a modern technology that can be used to propel medicine in a new era, the era of personalized medicine. In this workshop you will learn how we obtain a patient-specific 3D printed model  starting from a CT exam. We will also talk about certain uses of these models in different pathologies.",
                "speaker" : "",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/3D printing-Applications in Medicine2.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Airway 101",
                "description" : "In the Emergency Medicine Service any protocol is structured by the ABC system. When it comes to the Cardiopulmonary Resuscitation, A stands for Airway. This workshop aims to prepare you for the airway management. You will not only learn about all the devices that ensure the procedures related to this procedure, but you will also aquire the medical knowledge needed to be prepared for the unexpected situations. Use this unique chance to discover the misteries behind the CPR and enhance your practic skills in a friendly enviroment, guided by a well-trained doctor.",
                "speaker" : "Delia Andreea Crețu, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/Airway 101.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "FAST (Focused Assessment with Sonography for Trauma)",
                "description" : "The workshop aims to teach medical students the theoretical and practical aspects of the FAST exam. It requires basic anatomical knowledge and at the end of the session the students will accurately perform and interpret a FAST exam. The workshop is structured in two parts, a theoretical part highlighting the importance and use of the FAST exam in the trauma workup, and a practical part in which students perform 6-7 examinations under direct supervision and guidance.",
                "speaker" : "Asst.Lect. Alexandru Constantin Carâp, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/FAST (Focused Assessment with Sonography for Trauma).jpg'
            },
       
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : " LIE TO ME-Deconstructing a lie",
                "description" : "How do we detect a lie? Can we be able to realize when someone is lying? This workshop it is an excellent opportunity to find out how to deconstruct a lie and how to find out the truth!",
                "speaker" : "Liana Kobilynska MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/LIE TO ME-deconstructing a lie.gif'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Fear of the unknown - how do we justify bullying?",
                "description" : "LGBT is an initialism used since 1990s that stands for lesbian, gay, bisexual, and transgender. As we all know LGBT people are targeted for bullying, assault, discrimination, all this contributing to depression and suicide in the adulthood. If you want to find out more about this sensitive subject, this workshop it is an excellent opportunity!",
                "speaker" : "Liana Kobylinska MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/Fear of the unknown-how do we justify bullying.jpg'
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
                "imgsrc" : 'img/WS BLA BLA/Clinical Case-General Surgery-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Skills in Laparoscopy",
                "description" : "We all know that a laparoscopy surgery is way easier for both, surgeon and patient. Because of that, this workshop is going to be the best way for a start in the laparoscopy surgery path. As a plus, we are going to organise three workshops instead of one in order to give as many of you as possible the chance to participate and explore this less invasive surgery technique.",
                "speaker" : "X-Projects",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/basic skills laparoscopic surgery.jpeg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Skills in Microsurgery",
                "description" : "Because the world is always in a developing process, we are more than pleased to offer you three microsurgery workshops. Learning how to do knots and sutures on a hand, leg or any part of the body sounds easy, but can you do it on a leave or a rose petal? There is your chance to prove to yourself that you are made to become a surgeon and also your chance to make the first steps into this amazing part of the medicine.",
                "speaker" : "X-Projects",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/basic skills microsurgery.jpeg'
            },
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Trauma Evaluation and Management for Medical Students",
                "description" : "Trauma Evaluation and Management for Medical Students will teach you how to manage the multiple injured patients at the scene, in the first hours. It is very important for every medical student to have these skills, considering the fact that trauma is the most common cause of death worldwide",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/Trauma Evaluation and Management for Medical Students.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Trauma Management",
                "description" : "Trauma Management is a workshop in which you’ll be given an insight on how to deal with a trauma case, how to manage the stress of this specialty and how to make instant decisions in a critical situation. Being a hands-on workshop, you will be taught some procedures, such as endotracheal intubation, tracheostomy and chest intubation and you’ll also be guided, step by step, on how to do it yourselves.",
                "speaker" : "Hani Al-Qadhi, MD, FRCSC",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/Trauma Management.jpg'
            },
         
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