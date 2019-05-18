$(document).ready(function() {
    
    $('#ws-showcase').hide();
    
    // Actual data
    
    var cData =  {
        "conferences" : [
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Role of amyloid-beta peptide in synaptic plasticity and memory: from physiology to Alzheimer’s disease",
                "description" : "Here we will discuss the physiological role of Aβ in synaptic plasticity and memory, new theories on its interaction with tau protein and a novel hypothesis of AD pathogenesis. Such research results will call for a reconsideration of therapeutic approaches in AD patients.",
                "speaker" : "Associate Professor Daniela Puzzo, MD, PhD, University of Catania, Italy",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/amyloid-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Surgeon opinions vs patient’s features: how to choose the best breast reconstructive option!",
                "description" : "It will be described the concept of comprehensive rehabilitation after breast cancer treatment, that will be completed only after the best possible breast reconstruction. Different techniques to restore the beast will be presented, highlighting advantages and disadvantages. Special attention will also be given to autologous tissue reconstructions.",
                "speaker" : "Prof. Fabio Santanelli di Pompeo, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/surgeon-opinion-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "3D Printing in Medicine: The New Age of Personalised Treatment",
                "description" : "The purpose of this conference is to highlight the valuable use of 3D Printing in the medical world. By a series of complex surgical cases and challenging projects, presented to you by medical professionals, we hope, not only to stir your interest, but also to broaden your knowledge and take you a step further towards innovation.",
                "speaker" : "Prof. Dr. Sebastian Ionescu, Conf. Dr. Alexandru Ulici, Dr. Bogdan Olteanu, Dr. Bogdan Prisecaru, Dr. Eduard Liciu, Dr. Bogdan Popescu, Dr. Maria Delia Clantau, Asist. Univ. Roman Murzac",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/3d-c-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "What about sports cardiology?",
                "description" : "1. Acute cardiovascular effects of exercise in healthy sedentary and trained people- Alexandru Cotoban Assistant Lecturer, MD PhD stud, Emergency University Hospital Bucharest, University of Medicine and Pharmacy “Carol Davila” Bucharest, President of the Romanian Young Cardiologists Club <br> 2. Long-term adaptation to exercise: athlete’s heart- Berenice Suran - Assistant Lecturer, MD PhD stud, Emergency University Hospital Bucharest, University of Medicine and Pharmacy “Carol Davila” Bucharest <br> 3. Cardiac evaluation in sports cardiology-Mihai Trofenciuc MD, PhD stud, Institute of Cardiovascular Disease Timisoara, “Vasile Goldiş” Western University of Arad <br> 4. Sudden death in sports- Ovidiu Mitu - Assistant Lecturer MD PhD, Clinical Emergency Hospital, University of Medicine and Pharmacy „Grigore T. Popa” – Iași",
                "speaker" : "Session recommended by the: <br> The Young Cardiologists' Club of the Romanian Society of Cardiology <br> Stefan Busnatu Assistant Lecturer, MD PhD, Bagdasar-Arseni Emergency Clinical Hospital, University of Medicine and Pharmacy “Carol Davila” Bucharest, EAPC Young Community Preventive Cardiology Romanian Ambassador",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/cardio-sports-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "DDH - Development And Dysplasia Of The Hip",
                "description" : "Development and Dysplasia of the Hip is both one of the most important developmental diseases in paediatric patients and one of the most common. Managing and treating these patients is very important, but we also have to focus on prevention. In this conference you will learn how to read an x-ray , how to diagnose clinically and how to manage DDH cases.",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/ddh-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "A General Review of Different Topics on Surgery",
                "description" : "Review of Surgery is a lecture that everyone interested in surgery will enjoy. There will be different surgery cases presented with pictures and radiology images regarding different topics related to this field of medicine. The cases will be discussed openly and the public will be welcomed to intervene with questions or affirmations.",
                "speaker" : "Hani Al-Qadhi, MD, FRCSC",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/gen-review-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Trauma Assessment and Management",
                "description" : "If you’re passionate about trauma, this conference, Trauma Assessment and Management is perfect for gaining basic knowledge on this specialty. You’ll learn all about the basic procedures which are followed in trauma and you’ll be given an insight on how to manage an emergency case and how to put up with the stressful situations that define this specialty.",
                "speaker" : "Hani Al-Qadhi, MD, FRCSC",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/trauma-assessment-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Adoptive Cell Transfer - a new step in treating haemathological malignancies",
                "description" : "In October 2018, the Nobel Prize in Physiology or Medicine was awarded jointly to James P. Allison and Tasuku Honjo 'for their discovery of cancer therapy by inhibition of negative immune regulation.' Today, adoptive T-cell immunotherapy has emerged as the fourth pillar of cancer therapy, in addition to the three existing weapons that are currently involved in the battle against malignancy: surgery, chemotherapy and radiotherapy. Professor Daniel Coriu, MD, PhD, Head of the Department of Haematology and Bone Marrow Transplantation of Fundeni Clinical Institute, and former International Visiting Scientist at the University of Tennessee Graduate School of Medicine, Knoxville, USA, provides an interesting overview of the uses of immunotherapy in the management of haematological malignancies.",
                "speaker" : "Prof. Daniel Coriu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/CAR-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Digital health trends",
                "description" : "1.The future is happening now- Razvan Vulcanescu Phd, Appointed President at National Health Insurance House                    2. Taking diagnosis and imaging to the next level with digital health- Silviu Stanciu MD PhD, Head of the Non-Invasive Cardiovascular Functional Exploration Laboratory of the Central Military Emergency University Hospital Dr. Carol Davila                  3.Future of digital health with AI and machine learning- its applicability in cardiology- Stefan Busnatu Assistant Lecturer, MD PhD, Bagdasar-Arseni Emergency Clinical Hospital, Head of IT Department - University of Medicine and Pharmacy “Carol Davila” Bucharest,                                                                                                                4.How genetics will take digital health to the next level- Paul Iordache - Assistant Lecturer, MD PhD, Epidemiology Department, University of Medicine and Pharmacy “Carol Davila”, Bucharest                                                            5.Building the Digital health ecosystem, the role of the young generation- Ion-Gheorghe Petrovai, MD, FreshBlood – Cluj",
                "speaker" : "Stefan Busnatu Assistant Lecturer,MD PhD, Bagdasar-Arseni Emergency Clinical Hospital, Head of IT Department - University of Medicine and Pharmacy “Carol Davila” Bucharest",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/trends-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Sciences and Humanities",
                "description" : " A session which intends to explore the relationships between sciences and humanities. At some point in the middle of last century, CP Snow described the existence of 'two cultures' that found it difficult to communicate. In the intervening time, sciences went from strength to strength, both on their own and through the technological developments that it engenderd. At the same time, faced with this increaed role of sciences in society, the humanities have been relegated to a secondary status. Are then humanities just a luxurious waste of intellectual time? This question is probably even more relevant in medical sciences, in which specialism can provide better and sharper means of intervention but sometimes at the risk of losing the perspective on the human individual.                                                                                           -Sesiune Prof. Popescu: How Humanities shaped my Science and how Science shaped my Literature                                   -Sesiune Prof. Toescu: Do Sciences need Humanities?                                                                             -Sesiune Prof. Lucaci: Art - the science of being alive. How can arts and science shake hands to help humans to have a better life?",
                "speaker" : "Prof. Bogdan Ovidiu Popescu, MD, PhD; Prof. Emil Toescu, MD, PhD; Prof. Liviu Lucaci, MD, PhD <br>Organized with the support of the COMUNIC Association",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/c/sciences-min.jpg'
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