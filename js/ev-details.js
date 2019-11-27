$(document).ready(function() {
    
    $('#ev-showcase').hide();
    
    /*** Actual data ***/
    
    var evData =  {
        "conferences": [
            {
                "uid" : "",
                "category" : "C",
                "years": "",
                "title" : "On how brain ageing triggers neurodegeneration (or not)",
                "description" : "People are afraid of neurodegeneration as they grow older. Do you ever think about how your brain will function once you start heading towards the senior years of your life? Our respectable guest, prof. Bogdan Ovidiu Popescu, MD, PhD, will share the secrets on the process of brain ageing and whether it influences the neurodegeneration or not. This conference is not to be missed!",
                "speaker" : "Professor Bogdan Ovidiu Popescu, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 16, 00),
                "imgsrc" : "img/c/sciences-min.jpg"
            },
            {
                "uid" : "",
                "category" : "C",
                "years": "",
                "title" : "Mainting young the ageing brain",
                "description" : "Neurodegenerative disease is an umbrella term for a range of conditions which primarily affect the neurons in the human brain, so the progressive loss of structure or function of neurons can lead to  amyotrophic lateral sclerosis, Parkinson's disease, Alzheimer's disease and other diseases. The purpose of the conference is to inform you about how to keep your brain young and how to slow down the neurodegeneration!",
                "speaker" : "Liana Kobylinska, MD, PhD",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 12, 00),
                "imgsrc" : 'img/c/maintaining young the ageing brain.jpg'
            },
            {
                "uid" : "",
                "category" : "C",
                "years": "",
                "title" : "Women in Interventional Radiology",
                "description" : "Have you always been passionate about radiology, and you would love to persue such a career. However, as it there is always in life, there is  a but, you want to persue a career but also have a family and kids. Would the radiations you are exposed to harm you? Is it likely to get breast cancer if you pursue such a domain? Would it be harmful for a pregnancy to be exposed? Is technology so advanced? Dr. Protto Sara joins us from Helinski to help us answer there questions and let us know on her experience in interventional radiology! Attend this conference because you can, because you are a women and you can persue your dreams as well!",
                "speaker" : "Sara Protto, MD, PhD, ETF deputy chairperson, Tampere University Hospital, Vascular and interventional radiology centre",
                "locationname" : "Victor Babes National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 07, 10, 00),
                "imgsrc" : 'img/Women in interventional radiology-min1.png'
            },
            {
                "uid" : "",
                "category" : "C",
                "years": "",
                "title" : "Shok-late.. a non-sweet way to death",
                "description" : "Shock-late: the Unsweet way to death This interactive case based lecture will take us through the shock disease in trauma patients from diagnosis, managment and saving lives. Iis very important information for the anyone who is practicing Medicine and may see trauma cases",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "locationname" : "Victor Babes National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 07, 18, 00),
                "imgsrc" : 'img/ws/shock-late.jpg'
            },
            {
                "uid" : "",
                "category" : "C",
                "years": "",
                "title" : "The art and science behind a tattoo",
                "description" : "The art of tattooing has suffered many controversial opinions along the years. Nowadays getting tattooed has become a common action among the new generations. However, this art is still condemned by a large part of the society,although its meaning, purpouses and advantages still remain a taboo subject, focusing only on its disadvantages, which may or may not be as told.  Our conference will approach this taboo subject from the point of view of a tattoo artist, and also from the point of view of a dermatologist, each talking about different aspects of this art.  Are tattoos a mistery for you as they are for us? Ever wondered how society responds to a tattooed healthcare professional? Buckle up, because this conference has the aim of bringing this mystery to light.",
                "speaker" : "Cristian Cezar Brinzanescu ; Diana Savu MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 11, 00),
                "imgsrc" : 'img/_Cristian Cezar Brinzanescu.jpg'
            },
            {
                "uid" : "",
                "category" : "C",
                "years": "",
                "title" : "Mistakes we make as parents",
                "description" : "This talk will draw on Dr Qureshi's expertise in Paediatrics, and look at the history of vaccines, how they work, and how to approach the consultation about vaccine consent. It will unpick the anti-Vaxx movement, including what we need to know in order to address parental concerns.",
                "speaker" : "Zeshan Quresi, BM MRCPCH MSc BSc (Hons)",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 16, 00),
                "imgsrc" : 'img/c/Mistakes we make as parents-min.jpg'
            },
            {
                "uid" : "",
                "category" : "C",
                "years": "",
                "title" : "Trauma in geriatric patients- between risks and healing",
                "description" : "",
                "speaker" : "Hani Al-Qadhi, MD, FRCSC ;Sultan Qaboos University Hospital",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 17, 00),
                "imgsrc" : 'img/c/Trauma in geriatric patients- between risks and healing-min.jpeg'
            }
        ],
        "fundamentals" : [
           {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-2",
                "title" : "Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures",
                "description" : "The supratentorial region is an anatomical region of the brain located above the tentorium cerebelli and contains the cerebral cortex, hippocampus, basal ganglia and olfactory bulb. We will discover all this by dissecting brain structures and we will learn about the basic anatomy of this area. In the end we will talk about imagistic applications of all the information have learnt and see how these can help us in the management of a patient.",
                "speaker" : "Lect. Tarta Eugen, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 10, 00),
                "imgsrc" : "../img/ws/supratentorial-cerebral.jpg"
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "Behind the signs and symptoms- Breast Pathology",
                "description" : "Breast tumours and inflammatory diseases concerning this area have always been associated with imposing a great impact upon patients, both medically and socially. This workshop aims to teach the participants, using a hands-on approach, how to recognize and describe the pathology associated with the most common types of breast cancer and benign afflictions. ",
                "speaker" : "Assoc. Prof. Maria Victoria Comănescu MD, PhD",
                "locationname" : "Victor Babes National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 08, 08, 00),
                "imgsrc" : 'img/ws/breast-path.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "Cell medicine ... Tests, truths and news ",
                "description" : "Molecular Medicine represents a wide interdisciplinary field that provides insights and a knowledge forefront to the basic and fundamental mechanisms of cellular and tissular homeostasis, as well as to the disease pathogenesis. This particular workshop aims to bring light upon one of the most modern and disputable, minimally invasive methods of testing for biomarkers - the liquid biopsy. We will find out together about cancer cells from a tumor that are circulating in the blood, circulating tumor DNA (ctDNA), circulating miRNAs, tumor-derived extracellular vesicles (EVs) that are shed from primary tumors and their metastatic sites into the peripheral blood.",
                "speaker" : " Assoc. Prof. Sanda Maria Crețoiu MD, PhD șAsst.Lect. Dragoș Crețoiu MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 12, 00),
                "imgsrc" : 'img/ws/cell-med-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-2",
                "title" : "Chain reaction - biochemistry in medicine",
                "description" : "In a friendly atmosphere you are going to have an insight of some of the most exciting experiments that have a very large applicability in medicine. Even though you are not a biochemistry fan you are going to enjoy it!",
                "speaker" : "Assoc. Prof. Elena Laura Găman",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 17, 00),
                "imgsrc" : 'img/ws/bioch-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "Extracellular vesicles - exosomes and ectosomes ",
                "description" : "Long- and short-distance communication can take multiple forms. Among them are exosomes and ectosomes, extracellular vesicles (EVs) released from the cell to deliver signals to different target cells. A very interesting workshop in which we will find out details about extracellular vesicles, what they are, how they can be determined, and what practical applications one might expect in the future.",
                "speaker" : "Asst.Lect. Luciana Pavelescu MD, PhD ; Asst. Lect. Laura Caravia MD, PhD ",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 09, 00),
                "imgsrc" : 'img/ws/exosomes-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-3",
                "title" : "First steps in cataract surgery",
                "description" : "Cataract surgery is a procedure to remove the lens of your eye and, in most cases, replace it with an artificial lens. This workshop will allow participants to gain experience with  the  techniques of cataract surgery. The session  will provide practical experience in removing a cataractous lens from porcine eyes under  an operating microscope, detailed practical information and also theoretical notions in ophthalmology.",
                "speaker" : "Asst.Lect. Emil Ungureanu MD, PhD ; Asst. Lect. Ștefan Oprea MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 17, 00),
                "imgsrc" : 'img/ws/cataract-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority Years 1-2",
                "title" : "Heart Dissection ",
                "description" : "The heart dissection is probably one of the most difficult dissections. Part of the reason why it is so difficult to learn it is that the heart is not perfectly symmetrical, but it is so close that it becomes difficult to discern which side you are looking at dorsal, ventral, left or right. This workshop will guide your way into discovering the anatomical structure of the symbol of life.",
                "speaker" : "Lect. Cosmin Marian Panțu, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws/heart-dissect-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "The perfect match - Introduction in immunohistochemistry",
                "description" : "Are you passionate about pathology, or do you just want to see where everything starts from? It all begins with the tiniest unit, our cell. This workshop will take you on a journey to discover the steps for a perfect match in an immunohistochemistry investigation.",
                "speaker" : "Assoc. Prof. Maria Victoria Comănescu MD, PhD",
                "locationname" : "Victor Babes National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 08, 10, 00),
                "imgsrc" : 'img/ws/perfect-match.jpg'
                     
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "Essential Microbiology Techniques",
                "description" : "In our medical practice, we will always be faced with all types of cases, each of them different from the other. Nowadays, laboratory medicine seems less and less important in the eyes of medical students and that is why our goal is to make you see its importance. The Essential Microbiology Techniques workshop will show you how a microbiologist works in order to determine a diagnosis that will help the clinician establish the best treatment.",
                "speaker" : "Prof. Mircea Ioan Popa, MD, PhD",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 10, 00),
                "imgsrc" : 'img/WS BLA BLA/Essential Microbiology Techniques.png'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-2",
                "title" : "New Generation Sequencing - Applications in Biomedical Research",
                "description" : "Gene manipulation is one of the main fields that geneticists nowadays explore in the hope that humanity could cure frequent severe diseases that affect most people within their lifetimes. But how did it all start? How could someone detain as much specific DNA as needed in order to perform the necessary tests? PCR (Polymerase Chain Reaction) is the main technology that is used in order to make numerous copies of the DNA sequences that are prone to be analysed. In this workshop, you will be trained in the basics of PCR and at the same time you will have the chance of a hands-on experience to multiply DNA strings in the same laboratories that geneticists use on a daily basis.",
                "speaker" : "Biol. Dumitru Jardan, PhD ; Biol. Mihaela Dragomir ; Asst. Lect. Andra Grigore, MD, PhD ; Prof. Daniel Coriu, MD, PhD",
                "locationname" : "Fundeni Clinical Insitute",
                "locationlink" : "https://goo.gl/maps/XBZnVYvdFs6FVf6B7",
                "time" : new Date(2019, 11, 06, 09, 00),
                "imgsrc" : 'img/ws/newgeneration.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-2",
                "title" : "Vomeronasal Organ - Atavisms of Our Ancestral Social Instinct",
                "description" : "The research is aimed on the highly debated vomeronasal organ, concluding its presence in human embryos with various ages. Detailed morphohistological aspects are approached along with development, comparison to other species and its possible implications in social behaviour both in humans and animals.",
                "speaker" : "Stud. Andrei Precup, Stud. Mihai-Alin Publik",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date (2019, 11, 06, 17, 00),
                "imgsrc" : 'img/WS BLA BLA/Vomeronasal Organ.jpg'
            }
        ],
        "medicals": [
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 4-6",
                "title" : "Neonatal Advanced Life Support",
                "description" : "Neonatology is an interesting specialty, but also overwhelming, considering the mixture of emotions that we, humans and doctors, might feel in different situations. Some of these are truly dramatic, and besides a good self-control of emotions, physicians also require excellent medical skills. This hands-on workshop is not addressed only to those passionate about the subject, but to all medical students, because no matter what their chosen specialty is, they can always find themselves in the situation of saving a life - especially one of a child. It’s an excellent opportunity to learn and apply the basic particularities of CPR for newborns, as well as making a comparison with its adult version. ",
                "speaker" : "Lecturer Cătălin Cîrstoveanu, MD, PhD",
                "locationname" : "Marie S. Curie Children's Clinical Hospital",
                "locationlink" : "https://goo.gl/maps/XRXpWybXUsqPMGRaA",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws/nals2-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Without priority",
                "title" : "3D printing: Multiple Technologies and how to use them for the benefit of the patient",
                "description" : "3D printing is a modern technology that can be used to propel medicine in a new era, the era of personalized medicine. In this workshop we will talk about different 3D-printing technologies focusing on the advantages and disadvantages of using each one to create better 3D printed patient-specific models. We will also showcase some clinical cases where we used 3D printing and talk about how these models helped in patient treatment/ medical personnel education.",
                "speaker" : "AMRB3D",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 11, 30) ,
                "imgsrc" : 'img/ws/3d-ws-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Without priority",
                "title" : "3D Printing: Applications in Medicine",
                "description" : "3D printing is a modern technology that can be used to propel medicine in a new era, the era of personalized medicine. In this workshop you will learn how we obtain a patient-specific 3D printed model  starting from a CT exam. We will also talk about certain uses of these models in different pathologies.",
                "speaker" : "AMRB3D",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 09, 00),
                "imgsrc" : 'img/ws/3dprint-app-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-3",
                "title" : "Airway 101",
                "description" : "In the Emergency Medicine Service any protocol is structured by the ABC system. When it comes to the Cardiopulmonary Resuscitation, A stands for Airway. This workshop aims to prepare you for the airway management. You will not only learn about all the devices that ensure the procedures related to this procedure, but you will also aquire the medical knowledge needed to be prepared for the unexpected situations. Use this unique chance to discover the misteries behind the CPR and enhance your practic skills in a friendly enviroment, guided by a well-trained doctor.",
                "speaker" : "Delia Andreea Crețu, MD",
                "locationname" : "Victor Babes National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 07, 09, 00),
                "imgsrc" : 'img/ws/airway101-min.jpg'
            },
            {
                "title" : "Airway 101",
                "time" : new Date(2019, 11, 07, 17, 00)
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "FAST (Focused Assessment with Sonography for Trauma)",
                "description" : "The workshop aims to teach medical students the theoretical and practical aspects of the FAST exam. It requires basic anatomical knowledge and at the end of the session the students will accurately perform and interpret a FAST exam. The workshop is structured in two parts, a theoretical part highlighting the importance and use of the FAST exam in the trauma workup, and a practical part in which students perform 6-7 examinations under direct supervision and guidance.",
                "speaker" : "Asst.Lect. Alexandru Constantin Carâp, MD, PhD",
                "locationname" : "Sf. Pantelimon Clinical Emergency Hospital",
                "locationlink" : "https://goo.gl/maps/3X1fMyoqijaXUU63A",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/WS BLA BLA/FAST (Focused Assessment with Sonography for Trauma).jpg'
            },
            {
                "title" : "FAST (Focused Assessment with Sonography for Trauma)",
                "time" : new Date(2019, 11, 07, 08, 00),
            },
            {
                "title" : "FAST (Focused Assessment with Sonography for Trauma)",
                "time" : new Date(2019, 11, 07, 16, 00)
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Without priority",
                "title" : " LIE TO ME-Deconstructing a lie",
                "description" : "How do we detect a lie? Can we be able to realize when someone is lying? This workshop it is an excellent opportunity to find out how to deconstruct a lie and how to find out the truth!",
                "speaker" : "Liana Kobilynska MD, PhD",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 16, 00),
                "imgsrc" : 'img/ws/fast-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Without priority",
                "title" : "Fear of the unknown - how do we justify bullying?",
                "description" : "LGBT is an initialism used since 1990s that stands for lesbian, gay, bisexual, and transgender. As we all know LGBT people are targeted for bullying, assault, discrimination, all this contributing to depression and suicide in the adulthood. If you want to find out more about this sensitive subject, this workshop it is an excellent opportunity!",
                "speaker" : "Liana Kobylinska MD, PhD",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 09, 00),
                "imgsrc" : 'img/WS BLA BLA/Fear of the unknown-how do we justify bullying.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "Mindfulness",
                "description" : "Is your life too busy so you don’t have time to stop and stare? Has it been a long time since you felt truly happy? Do you feel like your life, your purpose and your wishes are in a blur and you can’t figure out what to do next? If the answer to these questions is yes then we welcome you to join us in this workshop and figure it out together.",
                "speaker" : "Psych. Cristina Ciubotaru",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 12, 00),
                "imgsrc" : 'img/ws/plasticity-min.jpg'
            },
            {
                "title" : "Mindfulness",
                "time" : new Date(2019, 11, 07, 16, 00)
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 5-6",
                "title" : "Clinical Case-Forensic Medicine",
                "description" : "Forensics is the application of various scientific methods and principles to investigate criminal and civil actions which are of interest to the legal systems. All the clues collected from a crime scene are analyzed by forensic scientists in a crime laboratory and are converted into evidences worth producing in legal courts. This workshop is intended to be an important tool for learning and quality improvement in clinical practice. The cases that will be presented during this workshop are related to important aspects of forensic practice as sudden or unexpected death, cause of death in infancy or how to make difference between a homicide, a suicide or an accident.",
                "speaker" : "Țurlea Ioana - Ruxandra",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws/cclegala-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "Challenges for international travelers",
                "description" : "Traveler's Medicine is an expanding multidisciplinary field all over the world and in Romania, targeting not only the prevention or treatment of tropical diseases but a set of pathologies that may occur or may be aggravated during the international travels. There are several types of travelers: tourists, business travelers, including mission soldiers, diplomats, humanitarian missions, and other categories, expatriates, emigrants, refugees, travelers for medical tourism. The risk of illness is different depending on the destination, age, reason for travel (tourists are more often sick than people traveling for professional purposes), journey time, experience, presence of concomitant diseases. The number of emigrants and refugees has also increased, and they might have special health problems.",
                "speaker" : "Assoc. Prof. Hristea Adriana, MD, PhD ; Asst. Lect. Raluca Elena Jipa, MD, PhD ; Asst. Lect. Eliza Manea, MD, PhD ; Emanuel Condria, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 17, 00),
                "imgsrc" : 'img/ws/travelmed.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 3-6",
                "title" : "Basic Autopsy Skills",
                "description" : "If you are interested in this field, you will need to be strong in all areas of science. Forensic pathology draws on biology, physics, chemistry, even psychology and anthropology. The findings of an autopsy are often used for evaluating the accuracy of a clinical diagnosis, identifying any unsuspected conditions, and establishing a cause of death. Attendance to this workshop will give you the opportunity to understand the unique and complex phenomena that are related to each crime scene because every scene is anything but a controlled setting.",
                "speaker" : "Țurlea Ioana - Ruxandra, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 18, 00),
                "imgsrc" : 'img/ws/autopsy.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 4-6",
                "title" : "Cardiac ecography: a story about heart’s details",
                "description" : "Since its very beginnings, echocardiography gained extraordinary ground in the medical world, becoming a golden standard in the diagnosis of a great many cardiac pathologies. A completely noninvasive technique, is the most frequently used diagnostic method. This workshop will teach you the basics of echocardiography, a procedure which you will most likely use numerous times in your medical career.",
                "speaker" : "Speaker: Lect. Alexandru Scafa-Udriste, MD, PhD",
                "locationname" : "Bucharest Clinical Emergency Hospital",
                "locationlink" : "https://goo.gl/maps/rGBY183G6w8M4fWt9",
                "time" : new Date(2019, 11, 05, 16, 00),
                "imgsrc" : 'img/ws/cardiacecho-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 5-6",
                "title" : "Clinical case-Psychiatry ",
                "description" : "Clinical cases may sound easy but what are you doing when you face a patient that does not know how to describe his symptoms? You are going to witness small plays and then you have to make a diagnosis based on what you saw and some test results. This workshop will teach you how to approach patients with various diseases by showing you how these patients behave!",
                "speaker" : "Asst.Lect. Vlad Dionisie MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 17, 00),
                "imgsrc" : 'img/ws/ccpsihi-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-2",
                "title" : "Diagnostic: myth or disease? ",
                "description" : "Learn how to quickly identify and select a medical issue from a medical myth. Discover the tools needed to assess all the data available and learn how to process it in order to become a true Medical-mythbuster! ",
                "speaker" : "Speaker: Cosmin-Viorel Bogu, 5th year student",
                "locationname" : "Victor Babes National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 07, 11, 00),
                "imgsrc" : 'img/ws/myth.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "Handling ultrasound during critical situations",
                "description" : "This workshop will teach you how to react properly in emergency situations. You are going to learn how to withstand the pressure of a wounded patient and how to set a diagnosis based on the information given by the ultrasound scans you are required to read and observe.",
                "speaker" : "Asst. Lect. Carmen Cristescu Md Phd",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 10, 00),
                "imgsrc" : 'img/ws/handling-ultrasound-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "How to read an X-ray",
                "description" : "In this workshop you will learn how to interpret an X-ray from A to Z, step-by-step, for any part of the body.",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 16, 00),
                "imgsrc" : 'img/ws/how-to-xray-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "Solving the abdominal labyrinth",
                "description" : "This hands-on abdominal ultrasound workshop aims to build a complete ultrasound protocol and to analyse all images, encouraging discussions and a practical approach. Participants will be able to guide themselves in 3D anatomy with 2D imaging and document each organ in the abdomen.",
                "speaker" : "Lecturer Alice Bălăceanu, MD PhD  ",
                "locationname" : "Sf. Ioan Clinical Emergency Hospital",
                "locationlink" : "https://goo.gl/maps/zZhstrovYAo17eqQ7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws/abd-labyrinth.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 3-6",
                "title" : "The challenges of treating sports injuries - clinical cases",
                "description" : "Participation in sports has well-known health and wellness benefits. Unfortunately, it is also associated with a risk of injury. Sporting injury can occur during either competition or training. Typically, athletes aim to return to play as soon as possible and at the pre-injury level, which means that the management should be optimized to combine the need for prompt return to sport and the biologic healing time of the musculo-skeletal system. The focus of the workshop will be on acute injuries and their management. Through a series of case presentations, the workshop highlights common emergencies that a sports physician might confront, covering the rationale behind treatment choices and the medical management at sporting events and out in the field.",
                "speaker" : "Andrei Vișoianu, MD ; Alina Smaranda, MD",
                "locationname" : "Victor Babes National Insitute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 07, 09, 00),
                "imgsrc" : 'img/ws3/The challengies of treating sports injuries - clinical casesBUN.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Cardiac Pacemakers. How do we keep the heart beating when the sinus node and/or AV node fail?",
                "description" : "Cardiac Pacemakers reflect modern treatments in medicine beyond medication, since the newly developed technology in the medical field began to integrate, with maximum efficiency and immediate and sustained long-term results. This workshop will be divided in two parts, a theoretical presentation in which cardiac electrical deficiencies will be explained and also an interactive part in which a series of clinical cases will be discussed.",
                "speaker" : "Mohamed Dardari, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 17, 00),
                "imgsrc" : 'img/ws3/Cardiac PAcemakers.jpeg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "Between Ups and Downs on an ECG - Basic",
                "description" : "No matter what your specialty will be, as a doctor you must know how to interpret an ECG. We are here to help you broaden your medical knowledge and this workshop is the best way not only to practice what you have already learned, but also to make the first steps into understanding the complexity of an ECG.",
                "speaker" : "Corneliu Iorgulescu, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws3/Between Ups and Downs on an ECG (1)-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Between Ups and Downs on an ECG - Advanced",
                "description" : "No matter what your specialty will be, as a doctor you must know how to interpret an ECG. We are here to help you broaden your medical knowledge and this workshop is the best way not only to practice what you have already learned, but also to make the first steps into understanding the complexity of an ECG.",
                "speaker" : "Corneliu Iorgulescu, MD",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "time" : new Date(2019, 11, 07, 10, 00),
                "imgsrc" : 'img/ws3/Between Ups and Downs on an ECG (1)-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Without Priority",
                "title" : "Bedside manners: Kids vs. Adults",
                "description" : "This workshop will teach you how to engage what you need to know about children and to understand how to interact with them. How are they different? And how does this affect the doctor-patient relationship? These skills are the very foundation of not only being a children's doctor, but also of anyone who might work with children in the future.",
                "speaker" : "Zeshan Quresi, BM MRCPCH MSc BSc (Hons)",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 12, 00),
                "imgsrc" : 'img/ws/bedside-manner.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-3",
                "title" : "Basic Clinical Techniques",
                "description" : "The workshop lasts approximately 6 hours and includes the following techniques/maneuvers : Breast palpation, Rectal examination, Vaginal Examination, Urinary Catheterization in male and female patients, Vital Signs Monitor, Orotracheal Intubation, Mask Ventilation, Nasogastric Intubation, Peripheral Venous Catheterization & Blood Drainage. As participants, you shall attend a training station, in teams of 3-4 individuals, where you will be instructed and allowed to perform the maneuver on high fidelity simulators.",
                "speaker" : "Lifesim",
                "locationname" : "LifeSim Simulation Center",
                "locationlink" : "https://goo.gl/maps/YdWsuzyYiJKEDBmJA",
                "time" : new Date(2019, 11, 05, 17, 00),
                "imgsrc" : 'img/ws3/Basic Clinical Techniques-min.jpeg'
            },
            {
                "title" : "Basic Clinical Techniques",
                "time" : new Date(2019, 11, 06, 17, 00)
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-3",
                "title" : "A Simple Way To Understand Ultrasonography",
                "description" : "As students, our first encounter with an ultrasound is, in most cases, terrifying. We think to ourselves “Will I ever manage to understand any of this?”. This workshop aims to talk you through the basics of performing and reading an ultrasound, explaining everything you need to know about identifying physiological and pathological structures, as well as interpreting your findings.",
                "speaker" : "Theodor Badea, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 17, 00),
                "imgsrc" : 'img/ws/understand-eco.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Clinical Case: Cardiology",
                "description" : "We invite you to participate in the Clinical Case - Cardiology workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience",
                "speaker" : "Asst. Lect. Alexandru George Cotoban, MD, PhD",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 11, 00),
                "imgsrc" : 'img/ws/cccardio-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Clinical Case: Oncology",
                "description" : "The Oncology Clinical Case workshop will be an excellent experience for those who want to follow this specialty in the future. Even though clinical cases may sound easy, when you’re facing a patient and you only have a few test results at your disposal, concluding upon a clear diagnosis is not that simple. You will be asked to solve different types of cases that will help you broaden your medical knowledge.",
                "speaker" : "Asst. Lect. Maria Barbu MD, PhD",
                "locationname" : "Victor Babes National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 07, 16, 00),
                "imgsrc" : 'img/ws/onco.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 5-6",
                "title" : "Clinical Case: Neurology",
                "description" : "We invite you to participate in the Clinical Case - Neurology workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience.",
                "speaker" : "Delia Tublă, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws/ccneuro-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 5-6",
                "title" : "Clinical Case - Infectious Diseases",
                "description" : "Problem-solving based learning is a useful and powerful tool, helping students develop analytical skills and to move from recalling the knowledge to analysis, evaluation and application. With this idea in mind, we propose an Infectious Diseases clinical-cases based workshop. The students participating in this workshop will be divided into four work groups. They will be presented with the same three virtual cases, one of them being used as an example. Each team will have to identify the diagnosis and perform the procedures required for the correct management of the patient’s conditions. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience.",
                "speaker" : " Lect. Liana Gavriliu, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 18, 00),
                "imgsrc" : 'img/ws/ccinfectioase-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 4-6",
                "title" : "Central Venous Catheterization - Theory & Practice",
                "description" : "What if you are in the ER and your patient is crashing? What if you really need to administer intravenous medication and there is no i.v. line available? Learn how to quickly set a central venous catheter into place, the DOs and DON'Ts of the procedure and try it yourself on a realistic simulator!",
                "speaker" : "Doru Cristian Hociotă, MD",
                "locationname" : "University of Agronomic Sciences and Veterinary Medicine",
                "locationlink" : "https://goo.gl/maps/QBmNwbaky8HfRkr3A",
                "time" : new Date(2019, 11, 07, 10, 00),
                "imgsrc" : 'img/ws/cateter-venos-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Clinical Case: Gastroenterology",
                "description" : "This interactive clinical workshop is dedicated to students and young doctors who want to hone their skills in positive and differential diagnoses and therapeutic behavior using gripping, real-world clinical cases. The workshop encourages the active involvement of participants in the learning process.",
                "speaker" : "Asst. Lect. Mihai Ciocîrlan, MD, PhD",
                "locationname" : "Emergency Clinical Hospital Agrippa Ionescu",
                "locationlink" : "https://goo.gl/maps/yhioUTMN7SYesXRx5",
                "time" : new Date(2019, 11, 05, 09, 00),
                "imgsrc" : 'img/ws/cc-gastro-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 5-6",
                "title" : "Clinical Case: Endocrinology",
                "description" : "Did you ever think about choosing endocrinology as your specialty? We want to help you decide if you are made for it. Let's explore the beauty of endocrinology together, from the most simple to the most complex diagnoses.",
                "speaker" : "Asst. Lect. Simona Găloiu, MD, PhD",
                "locationname" : "I.C. Parhon National Institute of Endocrinology",
                "locationlink" : "https://goo.gl/maps/iJ16BiKqZfp7xBrU9",
                "time" : new Date(2019, 11, 06, 16, 30),
                "imgsrc" : 'img/ws/cc-endo-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Clinical Case: Pneumology",
                "description" : "We invite you to participate in the Clinical Case-Pneumology workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience.",
                "speaker" : "Dragoș Bumbăcea, MD, PhSD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 17, 00),
                "imgsrc" : 'img/ws/ccpneumo-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 3-6",
                "title" : "Clinical Case: Emergency Medicine",
                "description" : "We invite you to participate in the Clinical Case - Emergency Medicine workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience.",
                "speaker" : "Asst. Lect. Carmen Cristescu, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 17, 00),
                "imgsrc" : 'img/ws/cc-emergency-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "The fear of being fearless - Confronting Anxiety",
                "description" : "I can’t do this. Everything is out of my control. I will fail. There is no way I can pull this off.  If you’ve ever had a feeling of nervousness about something uncertain, a feeling that you’re not in control of your own life and there is nothing you can do about it, you may be dealing with anxiety. Anxiety is a normal, and often healthy emotion. However, when a person regularly feels disproportionate levels of anxiety, it might become a medical disorder. But you mustn’t live a life full of unease, you do have a choice. This workshop will provide you with the right tools necessary to change the way you think, transforming your anxiety into motivation and at the end of it, you will be the one that’s setting the course of your life, instead of fears and second thoughts.",
                "speaker" : "Asst. Lect. Delia Popa, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws/anxiety.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Without Priority",
                "title" : "The European Code Against Cancer: Towards a Europe free of Cancer",
                "description" : "Description: Cancer is a leading morbidity and mortality factor globally. Communication of scientific knowledge to the public, civil society engagement and advocacy can play a crucial role in cancer's prevention and management. The European Code Against Cancer (ECAC)  is an initiative of the European Commission, developed by the World Health Organization. The Code consists of 12 key points, whose implementation may lead to a Europe Free of Cancer. The Association of European Cancer Leagues (ECL) and its Youth Ambassadors (YAs) are actively involved in spreading the word about the ECAC and enhancing cancer's prevention and treatment all over the European Union. The purpose of this interactive session is to give insights concerning the engagement of young people and particularly health science students and young professionals in this vision.",
                "speaker" : "Christos Tsagkaris",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 10, 00),
                "imgsrc" : 'img/ws/euro-code.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 3-6",
                "title" : "The Athletes' heart - basic principles of ECG",
                "description" : "Increasingly we are recognizing the complexity of the athletes’ heart and the effects that exercise has on cardiac physiology. Sports Cardiology is an advancing field that encompasses the care of athletes and active individuals with known or previously undiagnosed cardiovascular conditions. The purpose of the workshop is two-fold. Firstly, it is to review the information related to the basic cardiac anatomy and physiology, followed by a systematic approach on how to interpret a 12 lead ECG and an introduction of the main electrocardiographic findings related to the “athlete's heart”. Secondly, based on the information presented, participants will be asked to untangle a series of multiple case-presentations in order to differentiate physiological changes from pathology on ECG.",
                "speaker" : "Lect. Adela Caramoci, MD, PhD ; Alina Maria Smaranda, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 12, 00),
                "imgsrc" : 'img/ws3/11The Atheletes Heart-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-3",
                "title" : "Laryngeal Ultrasound – From Anatomy To Clinical Practice",
                "description" : "During this workshop, we will apply the knowledge of laryngeal anatomy during ultrasound imaging. In the first 30 minutes, we will review the important laryngeal landmarks and the examination protocol using handheld portable Philips Ultrasound Machines. Laryngeal ultrasound permits visualizing such pathology as: laryngeal trauma, acute edema, vocal folds polyps and tumors. Afterwards all the participants enlisted to this workshop will have the chance to perform the same examination on colleagues and patients. This workshop will be fruitful for medical students, regardless of their preference in their future specialty",
                "speaker" : "Asst. Lect. Mihai Dumitru MD, PhD, ENT Specialist, Bucharest University Emergency Hospital",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws3/11Laryngeal Ultrasound-min.jpeg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Without Priority",
                "title" : "Heavy Metals Intoxications",
                "description" : "Just an intoxication? Maybe not. Heavy metals intoxications have recently become common. In a matter of minutes, a patient could be either saved, or doomed, based on the first steps his doctor makes towards a diagnosis. This event will teach you how to recognize, diagnose and treat such a situation in an interactive and easy manner, making sure that you will always remember the steps.",
                "speaker" : "Speaker: Lect. Radu Ciprian Tincu, MD, PhD",
                "locationname" : "Bucharest Clinical Emergency Hospital",
                "locationlink" : "https://goo.gl/maps/rGBY183G6w8M4fWt9",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws3/11Heavy Metals Intoxications (1)-min.jpeg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 4-6",
                "title" : "Sleep and Respiratory Care. Introduction to mechanical ventilation. Types of mechanical ventilation",
                "description" : "During the past few years the noninvasive ventilation techniques have proven their use in intensive care patients, due to the lack of complications associated with invasive methods and also due to the patients’ compliance. This workshop aims to provide you with the basic knowledge in order to provide the best medical care to your patients.",
                "speaker" : "Bogdan Santa",
                "locationname" : "Ponderas Academic Hospital",
                "locationlink" : "https://goo.gl/maps/XR45UYU9Hmu8kdPu5",
                "time" : new Date(2019, 11, 05, 09, 00),
                "imgsrc" : 'img/ws/mechanical-ventilation-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 4-6",
                "title" : "Sleep and Respiratory Care. Secretion Management- Cough-Assist E70",
                "description" : "Most of us consider coughing to be a symptom of an ailment, but essentially coughing is our way of cleaning the lungs of mucus, in order to prevent infections caused by bacteria accumulated in place. Cough-Assist 70 is a medical device that uses positive pressures in order to stimulate coughing, while quickly reversing to negative pressures to aspirate the secretions. This workshop will teach you how to use this method in order to help your patients.",
                "speaker" : "Bogdan Santa",
                "locationname" : "Ponderas Academic Hospital",
                "locationlink" : "https://goo.gl/maps/XR45UYU9Hmu8kdPu5",
                "time" : new Date(2019, 11, 05, 11, 00),
                "imgsrc" : 'img/ws/cough-assist-min.jpg'
            }
        ],
        "surgicals": [
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Clinical Case: Paediatric Surgery",
                "description" : "Have you ever wondered how Dr. House always seems to know what a patient has after just a few test results? This workshop will teach you which tests you need, which you don’t and also what treatment you need to administer to the patient. We all know that children are harder to diagnose than adults, the common challenges being  the variations in pathologies and often the low number of cases from which you can gain experience. The Paediatric Surgery Clinical Case workshop will be an excellent starting point for those who want to follow any kind of paediatric speciality in the future. The cases you will be asked to solve during the workshop will help you consolidate and broaden your knowledge about paediatric surgery, helping you discover a different approach. Hint: it’s never lupus.",
                "speaker" : "Assoc.Prof. Radu-Iulian Spătaru",
                "locationname" : "Marie S. Curie Children's Clinical Hospital",
                "locationlink" : "https://goo.gl/maps/XRXpWybXUsqPMGRaA",
                "time" : new Date(2019, 11, 05, 09, 00),
                "imgsrc" : 'img/ws/ccpedi-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "Mastering the surgical procedure of cleft lip and palate",
                "description" : "Cleft lip and palate is the most common of the craniofacial anomalies. Children born with cleft lips and palates present various challenges throughout their development that need to be solved for successful habilitation. The complexity of these problems requires that numerous health care practitioners cooperate in providing the specialized knowledge and skills necessary to ensure comprehensive care, including timely surgery and speech therapy. At our workshop you will learn more about these complex patients and how to help them face any difficulties that may arise. You will find out more about this anomaly and also, you will enter in an OR to see the surgical approach.",
                "speaker" : "Assoc.Prof. Radu-Iulian Spătaru",
                "locationname" : "Marie S. Curie Children's Clinical Hospital",
                "locationlink" : "https://goo.gl/maps/XRXpWybXUsqPMGRaA",
                "time" : new Date(2019, 11, 06, 09, 00),
                "imgsrc" : 'img/ws/cleft-lip.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Clinical Case: Orthopaedics",
                "description" : "Orthopaedics is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system.Including bones, joints, ligaments, muscles and nerves, it enables the active and passive movements that shape our everyday life. The workshop creates an interactive enviroment that will challenge your medical knowledge and communication skills resulting in an accurate diagnosis based on the information provided by a virtual patient.",
                "speaker" : "Asst. Lect. Mark-Eduard Pogorasteanu MD, PhD",
                "locationname" : "Central Military Emergency Hospital Dr. Carol Davila",
                "locationlink" : "https://goo.gl/maps/yuVZsR4NxuQzdNAD7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws/ccortho-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 5-6",
                "title" : "Clinical Case: Obstetrics and Gynaecology",
                "description" : "Clinical Case: Obstetrics and Gynaecology Workshop is an interactive clinical workshop that proved itself as an effective learning tool. It is dedicated to students and young doctors that want to hone their skills in positive and differential diagnoses and therapeutic behavior using gripping, real-world clinical cases.",
                "speaker" : "Asst. Lect. Octavian Munteanu MD, PhD",
                "locationname" : "Bucharest Teaching Emergency Hospital",
                "locationlink" : "https://goo.gl/maps/zbeYBDoq5re5kynH6",
                "time" : new Date(2019, 11, 07, 08, 00),
                "imgsrc" : 'img/ws/cc-obg-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Clinical Case: General Surgery",
                "description" : "Clinical Cases sound easy, don’t they? When you’re faced with a patient and you only have a few test results, making a diagnosis is not that easy. Learn how to select the the most useful tests and familiarise yourself with the elected treatment. Broaden your knowledge and take the unique opportunity not only to test your ability to make the best decisions during an emergency, but also to make an accurate diagnosis. Discover the most valuable secrets of a surgeon during an interactive workshop that will enable you to come up with the best results.",
                "speaker" : "Asst. Lect. Florin Grama MD, PhD, Andrei Chitul MD, Cosmin Bezede MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 08, 00),
                "imgsrc" : 'img/ws/ccgenerala-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Without priority",
                "title" : "Basic Skills in Laparoscopy",
                "description" : "We all know that a laparoscopy surgery is way easier for both, surgeon and patient. Because of that, this workshop is going to be the best way for a start in the laparoscopy surgery path. As a plus, we are going to organise three workshops instead of one in order to give as many of you as possible the chance to participate and explore this less invasive surgery technique.",
                "speaker" : "X-Projects",
                "locationname" : "National Public Health Insitute",
                "locationlink" : "https://goo.gl/maps/RJ9pDfWRCEqDSA7u7",
                "time" : new Date(2019, 11, 05, 16, 00),
                "imgsrc" : 'img/ws/laparosurgery-min.jpg'
            },
            {
                "title" : "Basic Skills in Laparoscopy",
                "time" : new Date(2019, 11, 06, 16, 00),
            },
            {
                "title" : "Basic Skills in Laparoscopy",
                "time" : new Date(2019, 11, 07, 16, 00),
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "Basic Skills in Microsurgery",
                "description" : "Because the world is always in a developing process, we are more than pleased to offer you three microsurgery workshops. Learning how to do knots and sutures on a hand, leg or any part of the body sounds easy, but can you do it on a leave or a rose petal? There is your chance to prove to yourself that you are made to become a surgeon and also your chance to make the first steps into this amazing part of the medicine.",
                "speaker" : "X-Projects",
                "locationname" : "National Public Health Institute",
                "locationlink" : "https://goo.gl/maps/RJ9pDfWRCEqDSA7u7",
                "time" : new Date(2019, 11, 05, 16, 00),
                "imgsrc" : 'img/ws/basicmicro.jpg'
            },
            {
                "title" : "Basic Skills in Microsurgery",
                "time" : new Date(2019, 11, 06, 16, 00)
            },
            {
                "title" : "Basic Skills in Microsurgery",
                "time" : new Date(2019, 11, 07, 16, 00)
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Without priority",
                "title" : "Trauma Evaluation and Management for Medical Students",
                "description" : "Trauma Evaluation and Management for Medical Students will teach you how to manage the multiple injured patients at the scene, in the first hours. It is very important for every medical student to have these skills, considering the fact that trauma is the most common cause of death worldwide",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws/team.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "Trauma Management",
                "description" : "Trauma Management is a workshop in which you’ll be given an insight on how to deal with a trauma case, how to manage the stress of this specialty and how to make instant decisions in a critical situation. Being a hands-on workshop, you will be taught some procedures, such as endotracheal intubation, tracheostomy and chest intubation and you’ll also be guided, step by step, on how to do it yourselves.",
                "speaker" : "Hani Al-Qadhi, MD, FRCSC",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 10, 00),
                "imgsrc" : 'img/ws/trauma-maang.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 5-6",
                "title" : "Urology: Acquiring new skills in minimal invasive surgery",
                "description" : "”I will not cut, even for the stone, but I will leave such procedures to the practitioners of that craft.” (The Hippocratic Oath) Have you ever wondered what kind of procedures Hippocrates was thinking about? What has changed since then? Nephrolithiasis is one of the most common pathologies in urology. It is defined as being one complex puzzle because it represents a systemic condition. So, what is the most effective treatment? How do we approach this kind of affliction? This workshop aims to provide a comprehensive review of all major issues regarding pathophysiological, diagnostic and therapeutic aspects of such a challenging topic. It will help you consolidate and broaden your knowledge about urology, also guiding you through a frequent disease that all doctors should understand so that they can build an adequate clinical picture.",
                "speaker" : " Victor Cauni, MD, PhD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 05, 16, 00),
                "imgsrc" : 'img/ws3/0urology - acquiring new skills in minimal invasive surgery-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-3",
                "title" : "Treating the brain with 3D technology",
                "description" : "Neurosurgery represents a surgical specialty that provides treatment and care for adult and paediatric patients in case of pathological processes that may modify the neural activity in multiple sites of the nervous system or the physiological function of its supporting structures. 3-dimensional neuroimaging provides the best means to describe these conditions and find the proper surgical approach. In this workshop you will get in touch with the basic neurosurgical anatomy and the associated pathology using 3-D neuroimaging, also reviewing the clinical aspects related to the subject and the surgical protocol in certain medical situations.",
                "speaker" : "Sebastian Pavel, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 18, 00),
                "imgsrc" : 'img/ws/3dbrain.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "Dare to create beauty - Introduction to HA filling",
                "description" : "In the old Romanian fairy tales, a phrase is quite common: 'Youth without Old Age and Life without Death' Are you curious to find out the secrets of eternal youth? Come, discover and practice one of the most famous aesthetic interventions: Hyaluronic Acid filling.",
                "speaker" : "Ali Efati, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws3/0Dare to create beauty-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 4-6",
                "title" : "Clinical Case - Thoracic Surgery",
                "description" : "We've all had an opportunity to do a jigsaw puzzle in our childhood. A fun and simple game, in which you have to assemble the pieces following the model on the box. But is it just as simple if you cannot see the final picture? Or if you cannot be sure that all the pieces are in the box? Is the satisfaction of solving the puzzle greater when you uncover the right pieces? Does the stake grow when a man's life depends on you solving  the puzzle? We invite you to participate in the Clinical Case: Thoracic Surgery workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you.",
                "speaker" : "Prof. Ioan Cordoș, MD, PhD ; Mihnea George Orghidan, MD ; Asia Ashoor, MD ; Ana Adelina Afetelor, MD",
                "locationname" : "Marius Nasta Pneumophtiziology Institute",
                "locationlink" : "https://goo.gl/maps/zgZhgWK7fXgmuGnW8",
                "time" : new Date(2019, 11, 06, 17, 00),
                "imgsrc" : 'img/ws3/0Clinical Case - Thoracic Surgery-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 5-6",
                "title" : "Cochlear implant - a new concept in hearing loss treatment",
                "description" : "Congenital hearing loss is one of the most prevalent chronic conditions in children. In the majority of developed countries, neonatal hearing screening programmes enable early detection, which is essential to achieving the best outcomes. Severe to profound bilateral hearing loss can be managed by cochlear implantation, if picked up at an early age. This workshop aims to present the most common causes of pediatric hearing loss, their character and presentation diagnosis and therapeutic approaches of a deaf child.",
                "speaker" : " Lect. Adriana Neagoș, MD",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 17, 00),
                "imgsrc" : 'img/ws/cohlear-min.jpg'
            },
            {
                "uid" : "",
                "category" : "II",
                "years": "Priority years 1-2",
                "title" : "RSSS Asepsis and Antisepsis",
                "description" : "This workshop will teach you the basics any surgeon must know from entering the OR to performing the first incision. You will be able to learn the principles of asepsis and antisepsis, practice how to properly wash your hands and put your surgical gown on, as well as understand what the proper attitude while being in the OR is.",
                "speaker" : "RSSS",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 10, 00),
                "imgsrc" : 'img/ws2/0RSSS-Asepsis-and-Antisepsis-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-2",
                "title" : "RSSS Casts and Splints",
                "description" : "This workshop focuses on the management and treatment of bone fractures. You will be instructed on the theoretical aspects of limb fractures and the most important types of casts and splints for their respective treatment. You will then be able to practice proper placement of different types of casts and splints for a variety of orthopaedic pathologies.",
                "speaker" : "RSSS",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws2/0RSSS-Casts-and-Splints-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 1-2",
                "title" : "RSSS Knots & Sutures",
                "description" : "RSSS's Knots & Sutures, an already classic surgical workshop, is great for beginners! If you know nothing about surgery, this is where you should start. You will become familiar with the main surgical instruments, learn how to manage a surgical wound and practice elementary surgical procedures such as knots, incisions and several types of sutures. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 10, 00),
                "imgsrc" : 'img/ws2/0RSSS-KS_1-min.jpg'
            },
            {
                "title" : "RSSS Knots & Sutures",
                "time" : new Date(2019, 11, 06, 16, 00),
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "RSSS mini Skills in Bowel Surgery",
                "description" : "This workshop will present the key principles behind bowel surgery. You will become familiar with Roux-en-Y reconstructions, appendectomy, bariatric surgery, colon surgery and intestinal anastomoses and you will even perform some of them. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 10, 00),
                "imgsrc" : 'img/ws2/0RSSS-Intestinal_1-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "RSSS mini Skills in Hepato-Biliary Surgery",
                "description" : "This workshop will present the key principles behind hepatic surgery. You will become familiar with the main surgical instruments, learn the surgical approach of the liver and hepatic hilum, its anatomy, imaging techniques and how to perform a cholecystectomy and a liver resection. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "locationname" : "Carol Davila University of Medicine and Pharmacy",
                "locationlink" : "https://goo.gl/maps/hXsuGovwbpLD6aLY7",
                "time" : new Date(2019, 11, 06, 16, 00),
                "imgsrc" : 'img/ws2/0RSSS-Hepatobiliar-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "RSSS mini Skills in Plastic and Reconstructive Surgery",
                "description" : "This workshop will teach you the skills to perform some of the most frequent procedures in plastic surgery, with a focus on skin reconstruction. You will become familiar with the specific surgical instruments used in plastic surgery, learn how to manage a surgical wound and how to make a skin flap and graft to cover skin defects. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "locationname" : "Elias Emergency Teaching Hospital",
                "locationlink" : "https://goo.gl/maps/9SmcyK5AwBSJjceJA",
                "time" : new Date(2019, 11, 07, 09, 00),
                "imgsrc" : 'img/ws2/0RSSS-Plastic-min.jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "RSSS mini Skills in Thoracic Surgery",
                "description" : "This workshop has the purpose to present the main techniques and materials for realising a proper tracheostomy and different types of pulmonary resections and sutures. During the practical part of the workshop, the participants will learn how to correctly insert a tube into an obstructed windpipe and how to properly perform pulmonary resections and sutures on biological material.",
                "speaker" : "RSSS",
                "locationname" : "Elias Emergency Teaching Hospital",
                "locationlink" : "https://goo.gl/maps/9SmcyK5AwBSJjceJA",
                "time" : new Date(2019, 11, 07, 16, 00),
                "imgsrc" : 'img/ws2/0RSSS-Thoracic-min (1).jpg'
            },
            {
                "uid" : "",
                "category" : "I",
                "years": "Priority years 3-6",
                "title" : "RSSS mini Skills in Vascular Surgery",
                "description" : "This workshop will present the key principles behind vascular surgery. You will become familiar with the special instruments used in vascular surgery, learn how to make an arteriotomy, arteriorrhaphy and angioplasty, perform vascular anastomoses and study the main indications for vascular surgery. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "locationname" : "Dr. Carol Davila Nephrology Clinical Hospital",
                "locationlink" : "https://goo.gl/maps/A2FKzi2d6XyyUBXY6",
                "time" : new Date(2019, 11, 07, 09, 00),
                "imgsrc" : 'img/ws2/0RSSS-Vascular-min.jpg'
            }
        ],
        "specials": [
            {
                "uid" : "",
                "category" : "P",
                "years": "",
                "title" : "Oral Presentations - Case Report",
                "description" : '<a href="docs/Presentation Schedule - Case Report.pdf" class="btn" target="_blank">Presentations Schedule</a>',
                "speaker" : "You.",
                "locationname" : "Hospital Professor Dr. Theodor Burghele",
                "locationlink" : "https://goo.gl/maps/mq7RZ5JMc2gtLtAf7",
                "time" : new Date(2019, 11, 07, 08, 30),
            },
            {
                "uid" : "",
                "category" : "P",
                "years": "",
                "title" : "Oral Presentations - Fundamental Sciences",
                "description" : '<a href="docs/Presentation Schedule - Fundamental Sciences.pdf" class="btn" target="_blank">Presentations Schedule</a>',
                "speaker" : "You.",
                "locationname" : "Hospital Professor Dr. Theodor Burghele",
                "locationlink" : "https://goo.gl/maps/mq7RZ5JMc2gtLtAf7",
                "time" : new Date(2019, 11, 07, 08, 00),
            },
            {
                "uid" : "",
                "category" : "P",
                "years": "",
                "title" : "Oral Presentations - Medical Sciences",
                "description" : '<a href="docs/Presentation Schedule - Medical Sciences.pdf" class="btn" target="_blank">Presentations Schedule</a>',
                "speaker" : "You.",
                "locationname" : "Hospital Professor Dr. Theodor Burghele",
                "locationlink" : "https://goo.gl/maps/mq7RZ5JMc2gtLtAf7",
                "time" : new Date(2019, 11, 07, 08, 30),
            },
            {
                "uid" : "",
                "category" : "P",
                "years": "",
                "title" : "Oral Presentations - Surgical Sciences",
                "description" : '<a href="docs/Presentation Schedule - Surgical Sciences.pdf" class="btn" target="_blank">Presentations Schedule</a>',
                "speaker" : "You.",
                "locationname" : "Hospital Professor Dr. Theodor Burghele",
                "locationlink" : "https://goo.gl/maps/mq7RZ5JMc2gtLtAf7",
                "time" : new Date(2019, 11, 07, 08, 30),
            },
            {
                "uid" : "",
                "category" : "KN",
                "years": "",
                "title" : "The Sexual Reassignment Surgery/ BIA-ALCL: an Emerging Pathology",
                "description" : "Gender dysphoria emerged as a term designated to define the situation of a patient that doesn’t recognize his assigned gender to be his identity gender. Plastic surgeons often deal with patients experiencing gender dysphoria that require sex reassignment surgery. However, facing life threatening afflictions, such as anaplastic large cell lymphoma and other pathologies emerging from this subject, it is our duty as doctors to find ways to do prophylaxis as well as find the best way to treat already established disorders, affecting the patient as little as possible.",
                "speaker" : "Prof.	Fabio Santanelli di Pompeo, MD, PhD",
                "locationname" : "Main Amphiteatre, “Victor Babeş” National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 05, 14, 00),
            },
            {
                "uid" : "",
                "category" : "KN",
                "years": "",
                "title" : "The power of nutrition: healthy food for a longer living",
                "description" : "Anti-aging functional foods exert their influence mostly through their anti-oxidant and anti-inflammatory effects. Nutraceuticals are oral dietary components naturally found in foods and believed to have a medical or health benefit. Replacement of the micronutrient deficiencies, as well as high-dose therapy of selected nutraceuticals in combination with an optimal diet, can prevent not only aging but also chronic diseases such as coronary heart disease and stroke.",
                "speaker" : "Niklas Oppenrieder, MD, Aschaffenburg Hospital, <br> Assoc. Prof. Sanda Maria Crețoiu, MD, PhD",
                "locationname" : "Main Amphiteatre, “Victor Babeş” National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 06, 14, 00),
            },
            {
                "uid" : "",
                "category" : "KN",
                "years": "",
                "title" : "Geriatrics and Gerontology in Romania. Traditions and Continuity",
                "description" : "A characteristic of the last few decades is the increasing geriatric population, caused by the decreasing of natality, the evolution of medicine and also by the increasing life expectancy. The National Institute of Geriatrics and Gerontology was established on 22 January 1952 by Ana Aslan. Being the world’s first institute of geriatrics and gerontology, it is also the place where Ana Aslan studied and developed an anti-aging medicine called Gerovital H3. How did she discover this medicine? Why did John F. Kennedy, Charles de Gaulle and even Pablo Picasso followed this treatment? How did Ana Aslan discoveries influenced the evolution of Geriatrics and Gerontology? Prof. Gabriel Ioan Prada, MD, PhD is going to answer you all this questions and reveal the magic behind anti-aging treatments in a astounding keynote called “Geriatrics and Gerontology in Romania. Traditions and Continuity”.",
                "speaker" : "Prof.	Gabriel Ioan Prada, MD, PhD",
                "locationname" : "Main Amphiteatre, “Victor Babeş” National Institute",
                "locationlink" : "https://goo.gl/maps/y9pwpn5bb4FGjgMS7",
                "time" : new Date(2019, 11, 07, 14, 00),
            }
        ]
    };
    
    for(i=0; i < evData.conferences.length-1; i++){
        if( evData.conferences[i].title === evData.conferences[i+1].title ){
            evData.conferences[i+1].uid = evData.conferences[i].uid;
            evData.conferences[i+1].category = evData.conferences[i].category;
            evData.conferences[i+1].years = evData.conferences[i].years;
            //title
            evData.conferences[i+1].description = evData.conferences[i].description;
            evData.conferences[i+1].speaker = evData.conferences[i].speaker;
            evData.conferences[i+1].locationname = evData.conferences[i].locationname;
            evData.conferences[i+1].locationlink = evData.conferences[i].locationlink;
            //time
            evData.conferences[i+1].imgsrc = evData.conferences[i].imgsrc;
        }
    }
    for(i=0; i < evData.fundamentals.length-1; i++){
        if( evData.fundamentals[i].title === evData.fundamentals[i+1].title ){
            evData.fundamentals[i+1].uid = evData.fundamentals[i].uid;
            evData.fundamentals[i+1].category = evData.fundamentals[i].category;
            evData.fundamentals[i+1].years = evData.fundamentals[i].years;
            //title
            evData.fundamentals[i+1].description = evData.fundamentals[i].description;
            evData.fundamentals[i+1].speaker = evData.fundamentals[i].speaker;
            evData.fundamentals[i+1].locationname = evData.fundamentals[i].locationname;
            evData.fundamentals[i+1].locationlink = evData.fundamentals[i].locationlink;
            //time
            evData.fundamentals[i+1].imgsrc = evData.fundamentals[i].imgsrc;
        }
    }
    for(i=0; i < evData.medicals.length-1; i++){
        if( evData.medicals[i].title === evData.medicals[i+1].title ){
            evData.medicals[i+1].uid = evData.medicals[i].uid;
            evData.medicals[i+1].category = evData.medicals[i].category;
            evData.medicals[i+1].years = evData.medicals[i].years;
            //title
            evData.medicals[i+1].description = evData.medicals[i].description;
            evData.medicals[i+1].speaker = evData.medicals[i].speaker;
            evData.medicals[i+1].locationname = evData.medicals[i].locationname;
            evData.medicals[i+1].locationlink = evData.medicals[i].locationlink;
            //time
            evData.medicals[i+1].imgsrc = evData.medicals[i].imgsrc;
        }
    }
    for(i=0; i < evData.surgicals.length-1; i++){
        if( evData.surgicals[i].title === evData.surgicals[i+1].title ){
            evData.surgicals[i+1].uid = evData.surgicals[i].uid;
            evData.surgicals[i+1].category = evData.surgicals[i].category;
            evData.surgicals[i+1].years = evData.surgicals[i].years;
            //title
            evData.surgicals[i+1].description = evData.surgicals[i].description;
            evData.surgicals[i+1].speaker = evData.surgicals[i].speaker;
            evData.surgicals[i+1].locationname = evData.surgicals[i].locationname;
            evData.surgicals[i+1].locationlink = evData.surgicals[i].locationlink;
            //time
            evData.surgicals[i+1].imgsrc = evData.surgicals[i].imgsrc;
        }
    }
    for(i=0; i < evData.specials.length-1; i++){
        if( evData.specials[i].title === evData.specials[i+1].title ){
            evData.specials[i+1].uid = evData.specials[i].uid;
            evData.specials[i+1].category = evData.specials[i].category;
            evData.specials[i+1].years = evData.specials[i].years;
            //title
            evData.specials[i+1].description = evData.specials[i].description;
            evData.specials[i+1].speaker = evData.specials[i].speaker;
            evData.specials[i+1].locationname = evData.specials[i].locationname;
            evData.specials[i+1].locationlink = evData.specials[i].locationlink;
            //time
            evData.specials[i+1].imgsrc = evData.specials[i].imgsrc;
        }
    }
    
    
    /*** Schedule Page Data Processing ***/
    var schData = new Object();
    if( $('#schedule-content').length != 0 ){
        
        // Copy missing data for duplicates
        
        // Make a single array with all the workshops & sort them by date
        var ccData = evData.conferences.concat(evData.fundamentals, evData.medicals, evData.surgicals, evData.specials);
        ccData.sort((a, b) => (a.time > b.time) ? 1 : -1);
        
        // Make an object organized by day
//        var schData = new Object();
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
//        console.log(schData);
    }
    
    
    /*** Schedule Page Data Loading ***/
    $('#schedule-content').html(function(){
        
        schHTML = "";
        introLinksHTML = "";
        // Figure out the day
        for(i=0; i < Object.keys(schData).length; i++){
            switch(schData[i][0].time.getDay()){
                case 0: weekday = "Sunday"; break;
                case 1: weekday = "Monday"; break;
                case 2: weekday = "Tuesday"; break;
                case 3: weekday = "Wednesday"; break;
                case 4: weekday = "Thursday"; break;
                case 5: weekday = "Friday"; break;
                case 6: weekday = "Saturday"; break;
                case 7: weekday = "Sunday"; break;
            };
            switch(schData[i][0].time.getDate()){
                case 1: daySuffix = "st"; break;
                case 2: daySuffix = "nd"; break;
                case 3: daySuffix = "rd"; break;
                case 21: daySuffix = "st"; break;
                case 22: daySuffix = "nd"; break;
                case 23: daySuffix = "rd"; break;
                case 31: daySuffix = "st"; break;
                default: daySuffix = "th";
            };
            switch(schData[i][0].time.getMonth()){
                case 0: month = "January"; break;
                case 1: month = "February"; break;
                case 2: month = "March"; break;
                case 3: month = "April"; break;
                case 4: month = "May"; break;
                case 5: month = "June"; break;
                case 6: month = "July"; break;
                case 7: month = "August"; break;
                case 8: month = "September"; break;
                case 9: month = "Octomber"; break;
                case 10: month = "November"; break;
                case 11: month = "December"; break;
            };
            h1Time = weekday + " the " + schData[i][0].time.getDate() + daySuffix + " of " + month;
            schHTML = schHTML + 
                "<h1>"+h1Time+"</h1>";
            introLinksHTML = introLinksHTML +
                '<span class="terms-section-link intro-link">'+h1Time+'</span>';
            
            //Load day's events
            dayEvents = "";
            for(k=0; k < schData[i].length; k++){
                
                if(schData[i][k].time.getHours() < 10){
                    hours = "0" + schData[i][k].time.getHours();
                } else {
                    hours = schData[i][k].time.getHours();
                }
                if(schData[i][k].time.getMinutes() < 10){
                    minutes = "0" + schData[i][k].time.getMinutes();
                } else {
                    minutes = schData[i][k].time.getMinutes();
                }
                time = hours+":"+minutes;
                title = schData[i][k].title;
                category = schData[i][k].category;
                priority = schData[i][k].years;
                speakers = schData[i][k].speaker;
                description = schData[i][k].description;
                locationname = schData[i][k].locationname;
                locationlink = schData[i][k].locationlink;
                
                if( category === "I" ){
                    category = "WS Cat. I";
                    categoryColor = "#c0392b";
                } else if( category === "II" ){
                    category = "WS Cat. II";
                    categoryColor = "#e67e22";
                } else if( category === "C" ){
                    category = "Conference";
                    categoryColor = "#2980b9";
                } else if( category === "P" ){
                    category = "Pres";
                    categoryColor = "#27ae60";
                }else if( category === "KN" ){
                    category = "Keynote";
                    categoryColor = "#8e44ad";
                } else {
                    category = "Invalid category!";
                    categoryColor = "#000";
                }
                
                dayEvents = dayEvents
                +'<div class="event">'
                +'    <div class="event-header" style="background-color: '+categoryColor+'">'
                +'        <span class="event-hour">'+time+'</span>'
                +'        <span class="event-title">'+title+'</span>'
                +'        <span class="event-category">'+category+'</span>'
                +'    </div>'
                +'    <div class="event-details">'
                +'        <div class="event-metadata">'
                +'            <span class="meta-item">'+h1Time+' @ '+time+'</span>'
                +'            <span class="meta-item">'+priority+'</span>'
                +'            <span class="meta-item">Location link:<a href="'+locationlink+'" class="btn" target="_blank">'+locationname+'</a></span>'
                +'        </div>'
                +'        <span class="speaker">Speakers: '+speakers+'</span>'
                +'        <p class="event-description">'+description+'</p>'
//                +'        <span class="event-requirements">Requirements: Papuci and shit...</span>'
                +'    </div>'
                +'</div>'
            }
            schHTML = schHTML
            + '<div class="day-content">'
            + dayEvents
            + '</div>'
        }
        return schHTML;
    });
    
    /*** Load Intro Links ***/
    if( $('#schedule-content').length != 0 ){
        $('.intro-links').html(introLinksHTML);
    }
    
    /*** Eliminating duplicates ***/
    var duplicates = [];
    for(i=0; i < evData.conferences.length-1; i++){
        if( evData.conferences[i].title === evData.conferences[i+1].title ){
            duplicates.push(i+1);
        }
    }
    for(i=0; i < duplicates.length; i++){
        evData.conferences.splice(duplicates[i],1);
        for(k=i; k < duplicates.length; k++){
            duplicates[k] = duplicates[k] - 1;
        }
    }
    
    var duplicates = [];
    for(i=0; i < evData.fundamentals.length-1; i++){
        if( evData.fundamentals[i].title === evData.fundamentals[i+1].title ){
            duplicates.push(i+1);
        }
    }
    for(i=0; i < duplicates.length; i++){
        evData.fundamentals.splice(duplicates[i],1);
        for(k=i; k < duplicates.length; k++){
            duplicates[k] = duplicates[k] - 1;
        }
    }
    
    var duplicates = [];
    for(i=0; i < evData.medicals.length-1; i++){
        if( evData.medicals[i].title === evData.medicals[i+1].title ){
            duplicates.push(i+1);
        }
    }
    for(i=0; i < duplicates.length; i++){
        evData.medicals.splice(duplicates[i],1);
        for(k=i; k < duplicates.length; k++){
            duplicates[k] = duplicates[k] - 1;
        }
    }
    
    var duplicates = [];
    for(i=0; i < evData.surgicals.length-1; i++){
        if( evData.surgicals[i].title === evData.surgicals[i+1].title ){
            duplicates.push(i+1);
        }
    }
    for(i=0; i < duplicates.length; i++){
        evData.surgicals.splice(duplicates[i],1);
        for(k=i; k < duplicates.length; k++){
            duplicates[k] = duplicates[k] - 1;
        }
    }
    
    
    /*** Static data loading ***/
    
    // What page?
    if( $('#conferences').length != 0 ){
        loadCData();
    } else if ( $('#fundamentals').length != 0 || $('#medicals').length != 0 || $('#surgicals').length != 0 ){
        loadWSData();
    }
    
    // Load Conferences
    function loadCData (){
        $('#conferences > .ws-wrap').html(function(){

            for(i=0; i < evData.conferences.length; i++)
            {
                if(i==0)
                {
                    cSectionData = "<div class=\"ws\">"
                                        +"<img src=\""+evData.conferences[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                        +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                        +"<div class=\"ws-details\">"
                                            +"<h3 class=\"ws-title\">"+evData.conferences[i].title+"</h3>"
                                            +"<span class=\"ws-details-link btn\">Conference Details</span>"
                                        +"</div>"
                                    +"</div>";
                }else{
                    cSectionData = cSectionData +
                                    "<div class=\"ws\">"
                                        +"<img src=\""+evData.conferences[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                        +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                        +"<div class=\"ws-details\">"
                                            +"<h3 class=\"ws-title\">"+evData.conferences[i].title+"</h3>"
                                            +"<span class=\"ws-details-link btn\">Conference Details</span>"
                                        +"</div>"
                                    +"</div>";
                }
            }
            return cSectionData;
        });
    }
    
    // Load Workshops
    function loadWSData(){
        $('#fundamentals > .ws-wrap').html(function(){

            for(i=0; i < evData.fundamentals.length; i++)
            {
                if(i==0)
                {
                    cSectionData = "<div class=\"ws\">"
                                        +"<img src=\""+evData.fundamentals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                        +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                        +"<div class=\"ws-details\">"
                                            +"<h3 class=\"ws-title\">"+evData.fundamentals[i].title+"</h3>"
                                            +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                        +"</div>"
                                    +"</div>";
                }else{
                    cSectionData = cSectionData +
                                    "<div class=\"ws\">"
                                        +"<img src=\""+evData.fundamentals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                        +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                        +"<div class=\"ws-details\">"
                                            +"<h3 class=\"ws-title\">"+evData.fundamentals[i].title+"</h3>"
                                            +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                        +"</div>"
                                    +"</div>";
                }
            }
            return cSectionData;
        });
        $('#medicals > .ws-wrap').html(function(){

            for(i=0; i < evData.medicals.length; i++)
            {
                if(i==0)
                {
                    cSectionData = "<div class=\"ws\">"
                                        +"<img src=\""+evData.medicals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                        +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                        +"<div class=\"ws-details\">"
                                            +"<h3 class=\"ws-title\">"+evData.medicals[i].title+"</h3>"
                                            +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                        +"</div>"
                                    +"</div>";
                }else{
                    cSectionData = cSectionData +
                                    "<div class=\"ws\">"
                                        +"<img src=\""+evData.medicals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                        +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                        +"<div class=\"ws-details\">"
                                            +"<h3 class=\"ws-title\">"+evData.medicals[i].title+"</h3>"
                                            +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                        +"</div>"
                                    +"</div>";
                }
            }
            return cSectionData;
        });
        $('#surgicals > .ws-wrap').html(function(){

            for(i=0; i < evData.surgicals.length; i++)
            {
                if(i==0)
                {
                    cSectionData = "<div class=\"ws\">"
                                        +"<img src=\""+evData.surgicals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                        +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                        +"<div class=\"ws-details\">"
                                            +"<h3 class=\"ws-title\">"+evData.surgicals[i].title+"</h3>"
                                            +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                        +"</div>"
                                    +"</div>";
                }else{
                    cSectionData = cSectionData +
                                    "<div class=\"ws\">"
                                        +"<img src=\""+evData.surgicals[i].imgsrc+"\" alt=\"\" class=\"ws-cover-thumbnail\">"
                                        +"<img src=\"img/ws/ws-filter.png\" alt=\"\" class=\" ws-filter object-cover\">"
                                        +"<div class=\"ws-details\">"
                                            +"<h3 class=\"ws-title\">"+evData.surgicals[i].title+"</h3>"
                                            +"<span class=\"ws-details-link btn\">Workshop Details</span>"
                                        +"</div>"
                                    +"</div>";
                }
            }
            return cSectionData;
        });
    }
    
    /*** Showcase data loading ***/
    
    // Showcase Load
    $('.ws-details-link').click(function(){
        var inSection = $(this).parent().parent().parent().parent().attr('id'),
            k = $('.ws-details-link').index(this);
        
        switch(inSection){
            case "conferences": 
                $('#ev-showcase > img').attr("src", evData.conferences[k].imgsrc);
                $('#sc-ev-title').html(evData.conferences[k].title);
                $('#sc-ev-description').html(evData.conferences[k].description);
                $('#sc-ev-speaker').html(evData.conferences[k].speaker);
                $('#sc-ev-location').html(evData.conferences[k].location);
                break;
            case "fundamentals": 
                $('#ev-showcase > img').attr("src", evData.fundamentals[k].imgsrc);
                $('#sc-ev-title').html(evData.fundamentals[k].title);
                $('#sc-ev-description').html(evData.fundamentals[k].description);
                $('#sc-ev-speaker').html(evData.fundamentals[k].speaker);
                $('#sc-ev-location').html(evData.fundamentals[k].location);
                break;
            case "medicals": 
                k = k - evData.fundamentals.length;
                $('#ev-showcase > img').attr("src", evData.medicals[k].imgsrc);
                $('#sc-ev-title').html(evData.medicals[k].title);
                $('#sc-ev-description').html(evData.medicals[k].description);
                $('#sc-ev-speaker').html(evData.medicals[k].speaker);
                $('#sc-ev-location').html(evData.medicals[k].location);
                break;
            case "surgicals": 
                k = k - evData.fundamentals.length - evData.medicals.length;
                $('#ev-showcase > img').attr("src", evData.surgicals[k].imgsrc);
                $('#sc-ev-title').html(evData.surgicals[k].title);
                $('#sc-ev-description').html(evData.surgicals[k].description);
                $('#sc-ev-speaker').html(evData.surgicals[k].speaker);
                $('#sc-ev-location').html(evData.surgicals[k].location);
        }
        $('#ev-showcase').show();
    });
    
    // Showcase control
    $('.ev-sc-close').click(function(){
        $('#ev-showcase').hide();
    });
    
});