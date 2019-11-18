$(document).ready(function() {
    
    $('#ws-showcase').hide();
    
    // Actual data
    
    var wsData =  {
        "fundamentals" : [
           {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Anatomical-Imagistic Aspects of the Supratentorial Cerebral Structures",
                "description" : "The supratentorial region is an anatomical region of the brain located above the tentorium cerebelli and contains the cerebral cortex, hippocampus, basal ganglia and olfactory bulb. We will discover all this by dissecting brain structures and we will learn about the basic anatomy of this area. In the end we will talk about imagistic applications of all the information have learnt and see how these can help us in the management of a patient.",
                "speaker" : "Lect. Tarta Eugen, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : "../img/ws/supratentorial-cerebral.jpg"
            },
            
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Behind the signs and symptoms- Breast Pathology",
                "description" : "Breast tumours and inflammatory diseases concerning this area have always been associated with imposing a great impact upon patients, both medically and socially. This workshop aims to teach the participants, using a hands-on approach, how to recognize and describe the pathology associated with the most common types of breast cancer and benign afflictions. ",
                "speaker" : "Assoc. Prof. Maria Victoria Comănescu MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/breast-path.jpg'
            },
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Cell medicine ... Tests, truths and news ",
                "description" : "Molecular Medicine represents a wide interdisciplinary field that provides insights and a knowledge forefront to the basic and fundamental mechanisms of cellular and tissular homeostasis, as well as to the disease pathogenesis. This particular workshop aims to bring light upon one of the most modern and disputable, minimally invasive methods of testing for biomarkers - the liquid biopsy. We will find out together about cancer cells from a tumor that are circulating in the blood, circulating tumor DNA (ctDNA), circulating miRNAs, tumor-derived extracellular vesicles (EVs) that are shed from primary tumors and their metastatic sites into the peripheral blood.",
                "speaker" : " Assoc. Prof. Sanda Maria Crețoiu MD, PhD șAsst.Lect. Dragoș Crețoiu MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cell-med-min.jpg'
            },
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Chain reaction - biochemistry in medicine",
                "description" : "In a friendly atmosphere you are going to have an insight of some of the most exciting experiments that have a very large applicability in medicine. Even though you are not a biochemistry fan you are going to enjoy it!",
                "speaker" : "Assoc. Prof. Elena Laura Găman",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/bioch-min.jpg'
            },
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Extracellular vesicles - exosomes and ectosomes ",
                "description" : "Long- and short-distance communication can take multiple forms. Among them are exosomes and ectosomes, extracellular vesicles (EVs) released from the cell to deliver signals to different target cells. A very interesting workshop in which we will find out details about extracellular vesicles, what they are, how they can be determined, and what practical applications one might expect in the future.",
                "speaker" : "Asst.Lect. Luciana Pavelescu MD, PhD ; Asst. Lect. Laura Caravia MD, PhD ",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/exosomes-min.jpg'
            },
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "First steps in cataract surgery",
                "description" : "Cataract surgery is a procedure to remove the lens of your eye and, in most cases, replace it with an artificial lens. This workshop will allow participants to gain experience with  the  techniques of cataract surgery. The session  will provide practical experience in removing a cataractous lens from porcine eyes under  an operating microscope, detailed practical information and also theoretical notions in ophthalmology.",
                "speaker" : "Asst.Lect. Emil Ungureanu MD, PhD ; Asst. Lect. Ștefan Oprea MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cataract-min.jpg'
            },
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Heart Dissection ",
                "description" : "The heart dissection is probably one of the most difficult dissections. Part of the reason why it is so difficult to learn it is that the heart is not perfectly symmetrical, but it is so close that it becomes difficult to discern which side you are looking at dorsal, ventral, left or right. This workshop will guide your way into discovering the anatomical structure of the symbol of life.",
                "speaker" : "Lect. Cosmin Marian Panțu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/heart-dissect-min.jpg'
            },
                 {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The perfect match - Introduction in immunohistochemistry",
                "description" : "Are you passionate about pathology, or do you just want to see where everything starts from? It all begins with the tiniest unit, our cell. This workshop will take you on a journey to discover the steps for a perfect match in an immunohistochemistry investigation.",
                "speaker" : "Assoc. Prof. Maria Victoria Comănescu MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/perfect-match.jpg'
                     
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Essential Microbiology Techniques",
                "description" : "In our medical practice, we will always be faced with all types of cases, each of them different from the other. Nowadays, laboratory medicine seems less and less important in the eyes of medical students and that is why our goal is to make you see its importance. The Essential Microbiology Techniques workshop will show you how a microbiologist works in order to determine a diagnosis that will help the clinician establish the best treatment.",
                "speaker" : "Prof. Mircea Ioan Popa, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/Essential Microbiology Techniques.png'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "New Generation Sequencing - Applications in Biomedical Research",
                "description" : "Gene manipulation is one of the main fields that geneticists nowadays explore in the hope that humanity could cure frequent severe diseases that affect most people within their lifetimes. But how did it all start? How could someone detain as much specific DNA as needed in order to perform the necessary tests? PCR (Polymerase Chain Reaction) is the main technology that is used in order to make numerous copies of the DNA sequences that are prone to be analysed. In this workshop, you will be trained in the basics of PCR and at the same time you will have the chance of a hands-on experience to multiply DNA strings in the same laboratories that geneticists use on a daily basis.",
                "speaker" : "Biol. Dumitru Jardan, PhD ; Biol. Mihaela Dragomir ; Asst. Lect. Andra Grigore, MD, PhD ; Prof. Daniel Coriu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/newgeneration.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Vomeronasal Organ - Atavisms of Our Ancestral Social Instinct",
                "description" : "The research is aimed on the highly debated vomeronasal organ, concluding its presence in human embryos with various ages. Detailed morphohistological aspects are approached along with development, comparison to other species and its possible implications in social behaviour both in humans and animals.",
                "speaker" : "Stud. Andrei Precup, Stud. Mihai-Alin Publik",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/WS BLA BLA/Vomeronasal Organ.jpg'
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
                "imgsrc" : 'img/ws/3d-ws-min.jpg'
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
                "imgsrc" : 'img/ws/3dprint-app-min.jpg'
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
                "imgsrc" : 'img/ws/airway101-min.jpg'
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
                "imgsrc" : 'img/ws/fast-min.jpg'
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
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Mindfulness",
                "description" : "Is your life too busy so you don’t have time to stop and stare? Has it been a long time since you felt truly happy? Do you feel like your life, your purpose and your wishes are in a blur and you can’t figure out what to do next? If the answer to these questions is yes then we welcome you to join us in this workshop and figure it out together.",
                "speaker" : "Psych. Cristina Ciubotaru",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/plasticity-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case-Forensic Medicine",
                "description" : "Forensics is the application of various scientific methods and principles to investigate criminal and civil actions which are of interest to the legal systems. All the clues collected from a crime scene are analyzed by forensic scientists in a crime laboratory and are converted into evidences worth producing in legal courts. This workshop is intended to be an important tool for learning and quality improvement in clinical practice. The cases that will be presented during this workshop are related to important aspects of forensic practice as sudden or unexpected death, cause of death in infancy or how to make difference between a homicide, a suicide or an accident.",
                "speaker" : "Țurlea Ioana - Ruxandra",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cclegala-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Challenges for international travelers",
                "description" : "Traveler's Medicine is an expanding multidisciplinary field all over the world and in Romania, targeting not only the prevention or treatment of tropical diseases but a set of pathologies that may occur or may be aggravated during the international travels. There are several types of travelers: tourists, business travelers, including mission soldiers, diplomats, humanitarian missions, and other categories, expatriates, emigrants, refugees, travelers for medical tourism. The risk of illness is different depending on the destination, age, reason for travel (tourists are more often sick than people traveling for professional purposes), journey time, experience, presence of concomitant diseases. The number of emigrants and refugees has also increased, and they might have special health problems.",
                "speaker" : "Assoc. Prof. Hristea Adriana, MD, PhD ; Asst. Lect. Raluca Elena Jipa, MD, PhD ; Asst. Lect. Eliza Manea, MD, PhD ; Emanuel Condria, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/travelmed.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Autopsy Skills",
                "description" : "If you are interested in this field, you will need to be strong in all areas of science. Forensic pathology draws on biology, physics, chemistry, even psychology and anthropology. The findings of an autopsy are often used for evaluating the accuracy of a clinical diagnosis, identifying any unsuspected conditions, and establishing a cause of death. Attendance to this workshop will give you the opportunity to understand the unique and complex phenomena that are related to each crime scene because every scene is anything but a controlled setting.",
                "speaker" : "Țurlea Ioana - Ruxandra, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/autopsy.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Cardiac ecography: a story about heart’s details",
                "description" : "Since its very beginnings, echocardiography gained extraordinary ground in the medical world, becoming a golden standard in the diagnosis of a great many cardiac pathologies. A completely noninvasive technique, is the most frequently used diagnostic method. This workshop will teach you the basics of echocardiography, a procedure which you will most likely use numerous times in your medical career.",
                "speaker" : "Speaker: Lect. Alexandru Scafa-Udriste, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cardiacecho-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical case-Psychiatry ",
                "description" : "Clinical cases may sound easy but what are you doing when you face a patient that does not know how to describe his symptoms? You are going to witness small plays and then you have to make a diagnosis based on what you saw and some test results. This workshop will teach you how to approach patients with various diseases by showing you how these patients behave!",
                "speaker" : "Asst.Lect. Vlad Dionisie MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ccpsihi-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "  ",
                "title" : "Diagnostic: myth or disease? ",
                "description" : "Learn how to quickly identify and select a medical issue from a medical myth. Discover the tools needed to assess all the data available and learn how to process it in order to become a true Medical-mythbuster! ",
                "speaker" : "Speaker: Cosmin-Viorel Bogu, 5th year student",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/myth.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Handling ultrasound during critical situations",
                "description" : "This workshop will teach you how to react properly in emergency situations. You are going to learn how to withstand the pressure of a wounded patient and how to set a diagnosis based on the information given by the ultrasound scans you are required to read and observe.",
                "speaker" : "Asst. Lect. Carmen Cristescu Md Phd",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/handling-ultrasound-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "How to read an X-ray",
                "description" : "In this workshop you will learn how to interpret an X-ray from A to Z, step-by-step, for any part of the body.",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/how-to-xray-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Solving the abdominal labyrinth",
                "description" : "This hands-on abdominal ultrasound workshop aims to build a complete ultrasound protocol and to analyse all images, encouraging discussions and a practical approach. Participants will be able to guide themselves in 3D anatomy with 2D imaging and document each organ in the abdomen.",
                "speaker" : "Lecturer Alice Bălăceanu, MD PhD  ",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/abd-labyrinth.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The challenges of treating sports injuries - clinical cases",
                "description" : "Participation in sports has well-known health and wellness benefits. Unfortunately, it is also associated with a risk of injury. Sporting injury can occur during either competition or training. Typically, athletes aim to return to play as soon as possible and at the pre-injury level, which means that the management should be optimized to combine the need for prompt return to sport and the biologic healing time of the musculo-skeletal system. The focus of the workshop will be on acute injuries and their management. Through a series of case presentations, the workshop highlights common emergencies that a sports physician might confront, covering the rationale behind treatment choices and the medical management at sporting events and out in the field.",
                "speaker" : "Andrei Vișoianu, MD ; Alina Smaranda, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/The challengies of treating sports injuries - clinical casesBUN.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Cardiac Pacemakers. How do we keep the heart beating when the sinus node and/or AV node fail?",
                "description" : "Cardiac Pacemakers reflect modern treatments in medicine beyond medication, since the newly developed technology in the medical field began to integrate, with maximum efficiency and immediate and sustained long-term results. This workshop will be divided in two parts, a theoretical presentation in which cardiac electrical deficiencies will be explained and also an interactive part in which a series of clinical cases will be discussed.",
                "speaker" : "Mohamed Dardari, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/Cardiac PAcemakers.jpeg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Between Ups and Downs on an ECG",
                "description" : "No matter what your specialty will be, as a doctor you must know how to interpret an ECG. We are here to help you broaden your medical knowledge and this workshop is the best way not only to practice what you have already learned, but also to make the first steps into understanding the complexity of an ECG.",
                "speaker" : "Corneliu Iorgulescu, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/Between Ups and Downs on an ECG (1)-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Bedside manners: Kids vs. Adults",
                "description" : "This workshop will teach you how to engage what you need to know about children and to understand how to interact with them. How are they different? And how does this affect the doctor-patient relationship? These skills are the very foundation of not only being a children's doctor, but also of anyone who might work with children in the future.",
                "speaker" : "Zeshan Quresi, BM MRCPCH MSc BSc (Hons)",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/bedside-manner.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Clinical Techniques",
                "description" : "The workshop lasts approximately 6 hours and includes the following techniques/maneuvers : Breast palpation, Rectal examination, Vaginal Examination, Urinary Catheterization in male and female patients, Vital Signs Monitor, Orotracheal Intubation, Mask Ventilation, Nasogastric Intubation, Peripheral Venous Catheterization & Blood Drainage. As participants, you shall attend a training station, in teams of 3-4 individuals, where you will be instructed and allowed to perform the maneuver on high fidelity simulators.",
                "speaker" : "Lifesim",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/Basic Clinical Techniques-min.jpeg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Eco 101",
                "description" : "As students, our first encounter with an ultrasound is, in most cases, terrifying. We think to ourselves “Will I ever manage to understand any of this?”. This workshop aims to talk you through the basics of performing and reading an ultrasound, explaining everything you need to know about identifying physiological and pathological structures, as well as interpreting your findings.",
                "speaker" : "Theodor Badea, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/understand-eco.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Cardiology",
                "description" : "We invite you to participate in the Clinical Case - Cardiology workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience",
                "speaker" : "Asst. Lect. Alexandru George Cotoban, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cccardio-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Oncology",
                "description" : "The Oncology Clinical Case workshop will be an excellent experience for those who want to follow this specialty in the future. Even though clinical cases may sound easy, when you’re facing a patient and you only have a few test results at your disposal, concluding upon a clear diagnosis is not that simple. You will be asked to solve different types of cases that will help you broaden your medical knowledge.",
                "speaker" : " Christos Tsagkaris",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/onco.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Neurology",
                "description" : "We invite you to participate in the Clinical Case - Neurology workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience.",
                "speaker" : "Delia Tublă, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ccneuro-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case - Infectious Diseases",
                "description" : "Problem-solving based learning is a useful and powerful tool, helping students develop analytical skills and to move from recalling the knowledge to analysis, evaluation and application. With this idea in mind, we propose an Infectious Diseases clinical-cases based workshop. The students participating in this workshop will be divided into four work groups. They will be presented with the same three virtual cases, one of them being used as an example. Each team will have to identify the diagnosis and perform the procedures required for the correct management of the patient’s conditions. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience.",
                "speaker" : " Lect. Liana Gavriliu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ccinfectioase-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Central Venous Catheterization - Theory & Practice",
                "description" : "What if you are in the ER and your patient is crashing? What if you really need to administer intravenous medication and there is no i.v. line available? Learn how to quickly set a central venous catheter into place, the DOs and DON'Ts of the procedure and try it yourself on a realistic simulator!",
                "speaker" : "Doru Cristian Hociotă, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cateter-venos-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Ebola: the story of an outbreak",
                "description" : "With this workshop we offer you the opportunity to see a real laboratory, ultimate technology,  equipment and costumes.  You will have the chance to learn how to get dressed with a complete protective equipment while experiencing a virtual EBOLA exercice.",
                "speaker" : "Prof. Adrian Streinu-Cercel, MD, PhD ; Assoc. Prof. Anca Streinu-Cercel, MD, PhD ",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/2Ebola_ the story of an outbreak-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Gastroenterology",
                "description" : "This interactive clinical workshop is dedicated to students and young doctors who want to hone their skills in positive and differential diagnoses and therapeutic behavior using gripping, real-world clinical cases. The workshop encourages the active involvement of participants in the learning process.",
                "speaker" : "Asst. Lect. Mihai Ciocîrlan, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-gastro-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Endocrinology",
                "description" : "Did you ever think about choosing endocrinology as your specialty? We want to help you decide if you are made for it. Let's explore the beauty of endocrinology together, from the most simple to the most complex diagnoses.",
                "speaker" : "Asst. Lect. Simona Găloiu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-endo-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Pneumology",
                "description" : "We invite you to participate in the Clinical Case-Pneumology workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience.",
                "speaker" : "Dragoș Bumbăcea, MD, PhSD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ccpneumo-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Emergency Medicine",
                "description" : "We invite you to participate in the Clinical Case - Emergency Medicine workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. We have the pleasure to announce that this year this workshop enjoys a new platform which is called Bodyinteract, a virtual medical simulation experience.",
                "speaker" : "Asst. Lect. Carmen Cristescu, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-emergency-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The fear of being fearless - Confronting Anxiety",
                "description" : "I can’t do this. Everything is out of my control. I will fail. There is no way I can pull this off.  If you’ve ever had a feeling of nervousness about something uncertain, a feeling that you’re not in control of your own life and there is nothing you can do about it, you may be dealing with anxiety. Anxiety is a normal, and often healthy emotion. However, when a person regularly feels disproportionate levels of anxiety, it might become a medical disorder. But you mustn’t live a life full of unease, you do have a choice. This workshop will provide you with the right tools necessary to change the way you think, transforming your anxiety into motivation and at the end of it, you will be the one that’s setting the course of your life, instead of fears and second thoughts.",
                "speaker" : "Delia Popa",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/anxiety.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The European Code Against Cancer: Towards a Europe free of Cancer",
                "description" : "Description: Cancer is a leading morbidity and mortality factor globally. Communication of scientific knowledge to the public, civil society engagement and advocacy can play a crucial role in cancer's prevention and management. The European Code Against Cancer (ECAC)  is an initiative of the European Commission, developed by the World Health Organization. The Code consists of 12 key points, whose implementation may lead to a Europe Free of Cancer. The Association of European Cancer Leagues (ECL) and its Youth Ambassadors (YAs) are actively involved in spreading the word about the ECAC and enhancing cancer's prevention and treatment all over the European Union. The purpose of this interactive session is to give insights concerning the engagement of young people and particularly health science students and young professionals in this vision.",
                "speaker" : "Christos Tsagkaris",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/euro-code.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The Athletes' heart - basic principles of ECG",
                "description" : "Increasingly we are recognizing the complexity of the athletes’ heart and the effects that exercise has on cardiac physiology. Sports Cardiology is an advancing field that encompasses the care of athletes and active individuals with known or previously undiagnosed cardiovascular conditions. The purpose of the workshop is two-fold. Firstly, it is to review the information related to the basic cardiac anatomy and physiology, followed by a systematic approach on how to interpret a 12 lead ECG and an introduction of the main electrocardiographic findings related to the “athlete's heart”. Secondly, based on the information presented, participants will be asked to untangle a series of multiple case-presentations in order to differentiate physiological changes from pathology on ECG.",
                "speaker" : "Lect. Adela Caramoci, MD, PhD ; Alina Maria Smaranda, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/11The Atheletes Heart-min.jpg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Laryngeal Ultrasound – From Anatomy To Clinical Practice",
                "description" : "During this workshop, we will apply the knowledge of laryngeal anatomy during ultrasound imaging. In the first 30 minutes, we will review the important laryngeal landmarks and the examination protocol using handheld portable Philips Ultrasound Machines. Laryngeal ultrasound permits visualizing such pathology as: laryngeal trauma, acute edema, vocal folds polyps and tumors. Afterwards all the participants enlisted to this workshop will have the chance to perform the same examination on colleagues and patients. This workshop will be fruitful for medical students, regardless of their preference in their future specialty",
                "speaker" : "Asst. Lect. Mihai Dumitru MD, PhD, ENT Specialist, Bucharest University Emergency Hospital",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/11Laryngeal Ultrasound-min.jpeg'
            },{
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Heavy Metals Intoxications",
                "description" : "Just an intoxication? Maybe not. Heavy metals intoxications have recently become common. In a matter of minutes, a patient could be either saved, or doomed, based on the first steps his doctor makes towards a diagnosis. This event will teach you how to recognize, diagnose and treat such a situation in an interactive and easy manner, making sure that you will always remember the steps.",
                "speaker" : "Speaker: Lect. Radu Ciprian Tincu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/11Heavy Metals Intoxications (1)-min.jpeg'
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
                "imgsrc" : 'img/ws/ccpedi-min.jpg'
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
                "imgsrc" : 'img/ws/cleft-lip.jpg'
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
                "imgsrc" : 'img/ws/ccortho-min.jpg'
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
                "imgsrc" : 'img/ws/ccgenerala-min.jpg'
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
                "imgsrc" : 'img/ws/laparosurgery-min.jpg'
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
                "imgsrc" : 'img/ws/basicmicro.jpg'
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
                "imgsrc" : 'img/ws/team.jpg'
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
                "imgsrc" : 'img/ws/trauma-maang.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Urology: Acquiring new skills in minimal invasive surgery",
                "description" : "”I will not cut, even for the stone, but I will leave such procedures to the practitioners of that craft.” (The Hippocratic Oath) Have you ever wondered what kind of procedures Hippocrates was thinking about? What has changed since then? Nephrolithiasis is one of the most common pathologies in urology. It is defined as being one complex puzzle because it represents a systemic condition. So, what is the most effective treatment? How do we approach this kind of affliction? This workshop aims to provide a comprehensive review of all major issues regarding pathophysiological, diagnostic and therapeutic aspects of such a challenging topic. It will help you consolidate and broaden your knowledge about urology, also guiding you through a frequent disease that all doctors should understand so that they can build an adequate clinical picture.",
                "speaker" : " Victor Cauni, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/0urology - acquiring new skills in minimal invasive surgery-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Treating the brain with 3D technology",
                "description" : "Neurosurgery represents a surgical specialty that provides treatment and care for adult and paediatric patients in case of pathological processes that may modify the neural activity in multiple sites of the nervous system or the physiological function of its supporting structures. 3-dimensional neuroimaging provides the best means to describe these conditions and find the proper surgical approach. In this workshop you will get in touch with the basic neurosurgical anatomy and the associated pathology using 3-D neuroimaging, also reviewing the clinical aspects related to the subject and the surgical protocol in certain medical situations.",
                "speaker" : "Sebastian Pavel, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/3dbrain.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Dare to create beauty - Introduction to HA filling",
                "description" : "In the old Romanian fairy tales, a phrase is quite common: 'Youth without Old Age and Life without Death' Are you curious to find out the secrets of eternal youth? Come, discover and practice one of the most famous aesthetic interventions: Hyaluronic Acid filling.",
                "speaker" : "Ali Efati, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/0Dare to create beauty-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case - Thoracic Surgery",
                "description" : "We've all had an opportunity to do a jigsaw puzzle in our childhood. A fun and simple game, in which you have to assemble the pieces following the model on the box. But is it just as simple if you cannot see the final picture? Or if you cannot be sure that all the pieces are in the box? Is the satisfaction of solving the puzzle greater when you uncover the right pieces? Does the stake grow when a man's life depends on you solving  the puzzle? We invite you to participate in the Clinical Case: Thoracic Surgery workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you.",
                "speaker" : "Prof. Ioan Cordoș, MD, PhD ; Mihnea George Orghidan, MD ; Asia Ashoor, MD ; Ana Adelina Afetelor, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws3/0Clinical Case - Thoracic Surgery-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Cochlear implant - a new concept in hearing loss treatment",
                "description" : "Congenital hearing loss is one of the most prevalent chronic conditions in children. In the majority of developed countries, neonatal hearing screening programmes enable early detection, which is essential to achieving the best outcomes. Severe to profound bilateral hearing loss can be managed by cochlear implantation, if picked up at an early age. This workshop aims to present the most common causes of pediatric hearing loss, their character and presentation diagnosis and therapeutic approaches of a deaf child.",
                "speaker" : "Speaker: Lect. Adriana Neagoș, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cohlear-min.jpg'
            }
         ,
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS Asepsis and Antisepsis",
                "description" : "This workshop will teach you the basics any surgeon must know from entering the OR to performing the first incision. You will be able to learn the principles of asepsis and antisepsis, practice how to properly wash your hands and put your surgical gown on, as well as understand what the proper attitude while being in the OR is.",
                "speaker" : "RSSS",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws2/0RSSS-Asepsis-and-Antisepsis-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS Casts and Splints",
                "description" : "This workshop focuses on the management and treatment of bone fractures. You will be instructed on the theoretical aspects of limb fractures and the most important types of casts and splints for their respective treatment. You will then be able to practice proper placement of different types of casts and splints for a variety of orthopaedic pathologies.",
                "speaker" : "RSSS",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws2/0RSSS-Casts-and-Splints-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS Knots & Sutures",
                "description" : "RSSS's Knots & Sutures, an already classic surgical workshop, is great for beginners! If you know nothing about surgery, this is where you should start. You will become familiar with the main surgical instruments, learn how to manage a surgical wound and practice elementary surgical procedures such as knots, incisions and several types of sutures. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws2/0RSSS-KS_1-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Bowel Surgery",
                "description" : "This workshop will present the key principles behind bowel surgery. You will become familiar with Roux-en-Y reconstructions, appendectomy, bariatric surgery, colon surgery and intestinal anastomoses and you will even perform some of them. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws2/0RSSS-Intestinal_1-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Hepato-Biliary Surgery",
                "description" : "This workshop will present the key principles behind hepatic surgery. You will become familiar with the main surgical instruments, learn the surgical approach of the liver and hepatic hilum, its anatomy, imaging techniques and how to perform a cholecystectomy and a liver resection. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws2/0RSSS-Hepatobiliar-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Plastic and Reconstructive Surgery",
                "description" : "This workshop will teach you the skills to perform some of the most frequent procedures in plastic surgery, with a focus on skin reconstruction. You will become familiar with the specific surgical instruments used in plastic surgery, learn how to manage a surgical wound and how to make a skin flap and graft to cover skin defects. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws2/0RSSS-Plastic-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Thoracic Surgery",
                "description" : "This workshop has the purpose to present the main techniques and materials for realising a proper tracheostomy and different types of pulmonary resections and sutures. During the practical part of the workshop, the participants will learn how to correctly insert a tube into an obstructed windpipe and how to properly perform pulmonary resections and sutures on biological material.",
                "speaker" : "RSSS",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws2/0RSSS-Thoracic-min (1).jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Vascular Surgery",
                "description" : "This workshop will present the key principles behind vascular surgery. You will become familiar with the special instruments used in vascular surgery, learn how to make an arteriotomy, arteriorrhaphy and angioplasty, perform vascular anastomoses and study the main indications for vascular surgery. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "RSSS",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws2/0RSSS-Vascular-min.jpg'
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