$(document).ready(function() {
    
    $('#ws-showcase').hide();
    
    // Actual data
    
    var wsData =  {
        "fundamentals" : [
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Paraclinical Results Assessment",
                "description" : "This workshop will teach you how to diagnose a patient using only laboratory test results and EKGs. It’s never easy, even for the most experienced physicians, to make a diagnosis based solely on paraclinical results, but it is of great importance for medical students to have a solid foundation in order to successfully direct the investigation. Our speaker will help you understand the meaning of test results and create your own diagnostic algorithm.",
                "speaker" : "Assistant Lecturer Marius Cherciu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/paraclinic-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Essential Microbiology Techniques",
                "description" : "Because in our medical practice we will be faced with all types of cases and also because laboratory medicine is nowadays less important in the eyes of the students, we are trying to make you see the importance of it. At the Essential Microbiology Techniques workshop you will see how a microbiologist works to make a diagnosis that will help the clinician establish the best treatment.",
                "speaker" : "Prof. Mircea Ioan Popa, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/micro-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "ECG: “Real-Life” Diagnostic Value",
                "description" : "No matter what your speciality will be, as a doctor you must know how to interpret an ECG. Because we are here to help you improve your medical knowledge, this workshop will be the best way to practice what you have already learned, or to make the first step towards understanding the complexity of the ECG.",
                "speaker" : "Lect. Alice Brinzea, MD, PhD, Asst. Lect. Elena Balasescu, MD, PhD, Asst. Lect. Roxana Nedelcu, MD, PhD, Asst. Lect. Marina Otelea, MD,PhD, Adelina Baleanu-Curaj, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ecg-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Synaptic Plasticity and Memory in Physiological Conditions and Neurodegenerative Disorders",
                "description" : "Memory has a central role in life, every experience adding to the previous one to shape our identity. The incidence rate of neurodegenerative disorders characterized by impairment of cognitive functions and memory loss, such as Alzheimer’s disease (AD), is dramatically increasing. Although a great number of basic and clinical studies have been performed, AD pathogenesis is not yet clear and an effective treatment is not available so far. In this workshop, we will analyze the main laboratory techniques developed to study synaptic plasticity and memory in animal models and discuss the translational approach on humans, focusing on possible therapeutic strategies.",
                "speaker" : "Maria Rosaria Tropea, MD, PhD Student",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/plasticity-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Biochemistry",
                "description" : "This workshop will teach you basic biochemistry skills and simple experiments that will be very useful for your further studies, helping you understand its importance (not only in medicine). You will find out that everything around us is biochemistry.",
                "speaker" : "Assoc. Prof. Gaman Elena Laura, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/bioch-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Axillary Dissection",
                "description" : "We are all aware that women all over the world are fighting heroically with breast cancer and patients presenting with symptomatic early breast cancer have a 30-40% chance of having positive axillary nodes. Therefore, in order to help them, we offer you the chance to understand the anatomy of this region, through permorming axillary dissections.",
                "speaker" : "Asst. Lect. Marinescu Dan Tudor, MD; PhD Lect. Tarta Eugen, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/axillary-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Clinical Techniques",
                "description" : "The workshop is meant to teach you some of the most useful techniques/maneuvers in the medical field, such as: Breast palpation (Principles & Techniques), Rectal examination (Principles & Techniques), Vaginal Examination (Principles & Techniques), Urinary Catheterization in male and female patients (Principles & Techniques), Vital Signs Monitor (Principles & Techniques), Orotracheal Intubation (Principles & Maneuver), Mask Ventilation (Principles & Technique), Nasogastric Intubation (Principles & Techniques), Peripheral Venous Catheterization & Blood Drainage (Principles & Techniques). As participants you will attend a training station, as teams of 3-4 individuals, where you will be instructed and allowed to perform the maneuver on high fidelity simulators.",
                "speaker" : "LifeSIM Simulation Centre",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/basic-skills-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Ophtalmology Skills",
                "description" : "From the simple structure of lenses to the basic steps in how to prescribe the correct lenses, and so much more. If vision and eyesight have ever been your interest, then this workshop is where to start from.",
                "speaker" : "Asst. Lect. Suzana Voiculescu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/bs-ophtalmo-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Breast Pathology",
                "description" : "Breast tumours and inflammatory diseases concerning this area have always been associated with imposing a great impact upon patients, both medically and socially. This workshop aims to teach the participants, using a hands-on approach, how to recognize and describe the pathology associated with the most common types of breast cancer and benign afflictions.",
                "speaker" : "Lect. Maria Victoria Comanescu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ed-uthman-breast-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Flow Cytometry",
                "description" : "Flow Cytometry evaluates individual cells in suspension in a short period of time, measuring multiple characteristics such as cell size, cytoplasmic complexity, DNA or RNA content, and a wide range of membrane-bound and intracellular proteins. The technique uses a variety of specimens: whole blood, bone marrow, serous cavity fluids, cerebrospinal fluid, urine and solid tissues. This lecture will review the general principles in Flow Cytometry and some selected applications of this technique in the clinical hematology laboratory.",
                "speaker" : "Lect. Delia Codruta Popa, MD, PhD; Serban Catalin, MD; Oana Grigoras, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/fc-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Heart Dissection",
                "description" : "The heart dissection is probably one of the most difficult dissections. Part of the reason why it is so difficult to learn is that the heart is not perfectly symmetrical, but it is so close that it becomes difficult to discern which side you are looking at (dorsal, ventral, left or right). This workshop will guide your way into discovering the anatomical structure of the symbol of life.",
                "speaker" : "Asst. Lect. Ioan Bulescu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/heart-dissection-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Immunohistochemistry",
                "description" : "Hepatocellular carcinomas express alpha-fetoprotein, and so do yolk sac tumours. Hodgkin's lymphoma stains positive for CD15 and CD30. Prostate cancer? Prostate serum antigen. What do all these have in common? Immunohistochemistry. Immunohistochemistry is an immune immunostaining technique highly valuable in surgical pathology for its ability to differentiate between tumors and to evaluate the prognosis of a disease. This workshop offers the possibility to explore the field of general pathology and grasp the basics of this revolutionary technique.",
                "speaker" : "Lect. Maria Victoria Comanescu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ed-uthman-ihc-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Kidney Dissection",
                "description" : "This workshop gives you the opportunity to dissect a kidney in order to observe its anatomical structure, vascularisation and also its anatomical variants. At the same time, you will get the chance to take a look at the microscopic structure of the organ.",
                "speaker" : "Lect. Pantu Cosmin, MD, PhD; Lect. Mihaly Enyedi, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/kidney-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Personalised Medical Approach - Genome Mapping",
                "description" : "Are you passionate about genetics? If so, Personalized Medical Approach - Genome Mapping is the perfect workshop for you. Genome mapping includes the methods used to identify the locus of a gene and the distance between the genes. The essence of this procedure is that it gives an insight into the different regions of the chromosome.",
                "speaker" : "Illumina Laboratories",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/genome-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The Importance of Microscopy Techniques in Establishing the Etiology of Multiorgan Fungal Infections",
                "description" : "A fascinating microscopic journey into the world of pathologic fungi and their microscopic characteristics. This workshop will cover in detail how to examine various types of tissues and correctly identify either the microscopic changes induced by fungal infections or even the pathological agent, using special histochemical stains. You will learn how an accurate histopathological interpretation can explain the cause of a complex lesion.",
                "speaker" : "Prof. Maria Sajin, MD, PhD; Prof. Mariana Costache, MD, PhD; Assoc. Prof. Sanda Maria Cretoiu, MD, PhD; Asst. Lect. Adrian Dumitru, MD, PhD; Asst. Lect. Dragos Cretoiu, MD, Phd; Asst. Lect. Tiberiu Georgescu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/importance-micro-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The Larynx: Anatomy Applied in Imaging and Pathology",
                "description" : "This workshop will span over 2 hours, tackling the subject of a very complex organ – the larynx – a miracle gift from Mother Nature. In the first hour Assoc. Prof. Cergan Romica, MD, PhD, Consultant in Diagnostic Imaging, will expand the anatomy knowledge necessary to understand the larynx: cartilages, ligaments, muscles, innervation and vascular supply. All anatomy landmarks will be explained both on dissection specimens and high resolution CT and MRI scans. In the second part of the workshop, Asst. Lect. Dumitru Mihai, MD, PhD, ENT and HNS Specialist, will discuss a series of interactive cases with laryngeal pathology from simple to complex, from benign to malignant, from vocal cords nodes to carcinomas. We will underline the anatomy landmarks affected by pathology correlated between endoscopy and imaging.",
                "speaker" : "Assoc. Prof. Cergan Romica, MD, PhD; Asst. Lect. Dumitru Mihai, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/larynx-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Healthcare Innovation for Medical Students",
                "description" : "Innovation is driving the medical field and we see that every day, through every new interesting aspect that surrounds us. How can a medical student innovate or prepare to contribute? We will use the Stanford Bio-Design method to understand the needs and to evaluate the solutions in a practical workshop.",
                "speaker" : "Ion-Gheorghe Petrovai, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/healthcare-min.jpg'
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
                "title" : "Clinical Case: Emergency",
                "description" : "Have you ever wondered what happens in the Emergency Room? How cases are being handled? Do you feel prepared for that sort of situation? In this case, we offer you the opportunity to learn more about it during our Clinical Case: Emergency workshop. We will teach you how to cope with a difficult situation and, more importantly, the chaotic atmosphere of the Emergency Department.",
                "speaker" : "Doru Cristian Hociota, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-emergency-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Dermatology",
                "description" : "Clinical Cases sound easy, don’t they? When you’re faced with a patient and you only have a few test results, making a diagnosis is not that easy. This workshop will teach you which tests you need, which you don’t, and also what treatment you need to administer to the patient. The Dermatology Clinical Case Workshop, for example, will be an excellent experience for those who want to follow this specialty in the future. The cases you will be asked to solve during the workshop will help you consolidate and broaden your knowledge about surgery, helping you discover a different approach.",
                "speaker" : "Lecturer Roxana Ioana Nedelcu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/dermato-min.jpg'
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
                "title" : "Loss of consciousness during epileptic seizures",
                "description" : "We all heard, at least once in our lives, the word epilepsy. But can you really say that you are familiar with its symptoms, with what causes the seizures and with the appropriate treatment of this condition? Epilepsy isn't an ordinary disease. It involves a lot of changes not only in the patient's, but also in their family's entire lifestyle. Seizures can be unpredictable, but one of the few things we can do is learn how to identify the signs and know how to help them when it occurs. We must try to help them live life as close to normal as possible, and that starts with us overcoming our own fear and being confident about knowing what to do for them.",
                "speaker" : "Lecturer Ioana Mîndruţă, MD, PhD; Irina Popa, MD, Andrei Daneasa, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/epileptic-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical case: Anaesthesia and Intensive Care",
                "description" : "Sometimes, establishing a diagnosis can be really hard even in “usual” patients we see on a daily basis. In non-critical patients, you can search for clues, follow all the steps in the guidelines and try to set up a diagnosis, but this can take days, weeks, maybe even months. On the other hand, the critical patient is found mostly in life-threatening conditions determined vastly by an underlying cause which forces the Intensive Care doctor to run life-saving actions while thinking of all the possible diagnoses. Polytrauma patients, septic shock and multiple organ failure represent the area of interest. The life of an ICU doctor follows a quick think-quick act fashion and you can test and explore these abilities of yours in our Clinical Case Workshop – Anaesthesia and Intensive Care.",
                "speaker" : "By Emanuel Moisă, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-aic-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Cardiology",
                "description" : "Becoming fascinated with cardiology is easy and this excellent workshop (according to our previous participants) makes it even easier. You will practice your clinical judgement, improve your teamwork skills and gain some precious medical knowledge, while solving cardiology cases. Read the history and clinical findings of patients, ask for additional tests and prescribe the proper treatment! After each team shares the solution they found, our speaker, Alexandru Cotoban, MD, will present the best way to manage the case.",
                "speaker" : "Asst. Lect. Alexandru Cotoban, MD, PhD, Endorsed by The Young Cardiologists' Club of The Romanian Society of Cardiology",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-cardio-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Infectious Diseases",
                "description" : "This workshop involves the active involvement of participants in the learning process. It is built around the concept of non-formal education and is based on exercises and experiences, but it also maintains a sound scientific background. It is dedicated to students and young doctors who want to hone their skills in positive and differential diagnosis and therapeutic behavior using gripping, real-world clinical cases. Because we know that infectious diseases are becoming more and more important, we are giving you the opportunity to learn more about them.",
                "speaker" : "Asst. Lect. Liana-Cătălina Gavriliu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-infectious-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Neurology",
                "description" : "I think we’re all fascinated and a little mystified by how the brain works. One of the most mysterious of the physical sciences is neurological science. Whether you already love it or just want to learn more about it, this workshop will help you practice dealing with a neurological patient, from history taking all the way through diagnosis and treatment. You will see that this might be a real challenge sometimes, but together with your team mates you should solve all the cases!",
                "speaker" : "Oana Arama, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-neuro-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Pneumology",
                "description" : "We've all done jigsaw puzzles in our childhood. A simple game in which you have to assemble the pieces you have in front of you following the model on the box. But is it just as simple if you do not have the final picture in front of you? Or if you do not know that you have all the pieces? Is the satisfaction of solving the puzzle greater when you uncover the right pieces and get to the final picture? Do the stakes grow when a man's life depends on you to solve the puzzle? We invite you to participate in the Clinical Case: Pneumology workshop, where you will have the opportunity to use all the skills and knowledge you have gained so far, and together with your team, to solve the cases we have prepared for you. This workshop is dedicated to students who have gone through pneumology internships.",
                "speaker" : "Assoc. Prof. Dragoș Bumbăcea, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-pneumo-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "3D Printing",
                "description" : "This workshop was designed to immerse you into the vast world of 3D Printing, by taking you in a captivating journey, all back from the beginning of this phenomenon and down to the progress we witness today. We address to anyone interested in broaden their knowledge and is ready to enjoy the incredible possibilities that this new technology has to offer. This workshop is for professionals that are in perpetuous search of innovation and improvement and that believe it is as important to know where it started as it is to find out where we are heading. Our interactive presentations and activities are meant to reveal the basics and details of the process behind 3D Printing, the use of this technology in many medical branches, the history and evolution and the ways in which this phenomenon changed the face of medicine and is still influencing the whole world. We are equipped with 3D scanners and printers that await you to start a fun and interesting hands-on experience from which you will learn what 3D design and printing is all about. The AMRB 3D team is eager to share with you our experience and passion for this provocative and creative technology.",
                "speaker" : "Eduard Liciu, MD; Mihai Bogdan Popescu, MD; Maria Delia Clantau, MD, PhD; George Stercu, MD; Mihaela Jianu, MD; Ioana Alexandra Glavan, MD; Asst. Lect. Roman Murzac, MD, PhD; Maria Miruna Mihai, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/3d-ws-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Gastroenterology",
                "description" : "This interactive clinical workshop is dedicated to students and young doctors that want to hone their skills in positive and differential diagnosis and therapeutic behavior using gripping, real-world clinical cases. The workshop involves the active involvement of participants in the learning process.",
                "speaker" : "Lect. Mihai Ciocarlan, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-gastro-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Nephrology",
                "description" : "Nephrology concerns the diagnosis and treatment of kidney diseases, including electrolyte disturbances and hypertension, and the care of those requiring renal replacement therapy, including dialysis and renal transplant patients. This is supposed to be an interactive workshop dedicated to students, but not only, which aims to actively involve participants in the management of clinical cases. Together we hope to improve the perception of the role of nephrology in internal medicine.",
                "speaker" : "Asst. Lect. Daniela Tănăsescu, MD, PhD; Alexandru Boțocan, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-nephro-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Psychiatry",
                "description" : "Finding a diagnosis for psychiatric diseases is not as easy as it sounds, with only a few test results and an uncooperative patient. The Clinical Case: Psychiatry workshop will teach you the basics of communication with such patients and will be an experience meant to broaden your horizons, especially if you want to follow a career in psychiatry.",
                "speaker" : "Assoc. Prof. Magdalena Budisteanu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-psych-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "FAST (Focused Assessment with Sonography for Trauma)",
                "description" : "The workshop aims to teach medical students the theoretical and practical aspects of the FAST exam. It requires basic anatomical knowledge and at the end of the session most students will accurately perform and interpret a FAST exam. The workshop is structured in two parts, a theoretical part highlighting the importance and use of the FAST exam in the trauma work-up, and a practical, hands-on part in which students perform 6-7 examinations under direct supervision and guidance.",
                "speaker" : "Asst. Lect. Alexandru Constantin Carâp, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/fast-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Abdominal ultrasonography in emergency situations",
                "description" : "Abdominal ultrasonography in emergency situations is useful both in post-trauma assessment (FAST- Focused Assessment with Sonography in Trauma) and for a rapid diagnosis in medical and surgical emergencies (POCUS- Point-of-care Ultrasonography). Ultrasonography has become a necessity in clinical emergency situations, which positively influences both the patient outcome and the costs of hospitalization. Participants will have the opportunity to perform abdominal ultrasounds under the supervision of the specialist.",
                "speaker" : "Lect. Alice Bălăceanu, MD, PhD; Philips",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/eco-abd-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Advanced Life Support",
                "description" : "Bucharest’s Ambulance Service will provide for this edition of IMSCB an ALS course based on ERC guidelines. The ALS course provides a standardised approach to cardiopulmonary resuscitation in adults. The ALS course aims to train candidates to identify the causes of cardiac arrest, recognise patients in danger of deterioration and manage both the heart attack and the 'peri-arrest' situations using a structured ABCDE approach.",
                "speaker" : "Stud. Andrei Cosmin Andrei; Medical Assistant Ioana Ciorteanu; Alis Grasu, MD; Bucharest-Ilfov Ambulance Service",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/als-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Life Support",
                "description" : "This workshop is designed to teach you the basic emergency maneuvers that any medical professional should know. Since the brain keeps on working for almost four minutes after the onset of cerebral hypoxia, being aware of the signs of cardiac arrest and being prepared to offer CPR are vital not only for the medical personnel, but also for the layman. Basic Life Support is a level of medical care used for critical patients until they can be given full medical care. The BLS workshop teaches first-aid skills that can be applied in both prehospital and in-facility environments, with a focus on CPR and team dynamics.",
                "speaker" : "Alis Grasu, MD , Bucharest-Ilfov Ambulance Service",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/bls-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Abdominal Ultrasound",
                "description" : "Hands-on abdominal ultrasound workshop which aims, through discussions and a practical approach to build a complete ultrasound protocol to analyse all images. Participants will be able to guide themselves to 3D anatomy with 2D imaging and document each organ in the abdomen.",
                "speaker" : "Lect. Alice Bălăceanu, MD, PhD, Philips",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/eco-a-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Thyroid Ultrasound",
                "description" : "Hands-on thyroid ultrasound workshop after which aims for the participants to be able to identify normal neck anatomy, review the technology of ultrasound imaging, recognize the specific characteristics of thyroid and perform diagnostics using this imaging technique ultrasound.",
                "speaker" : "Prof. Catalina Poiana, MD, PhD, Asst. Lect. Dan Alexandru Niculescu, Philips",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/eco-t-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Trauma Evaluation and Management for Medical Students",
                "description" : "Trauma Evaluation and Management for Medical Students will teach you how to manage the multiple injured patients at the scene, in the first hours. It is very important for every  medical student to have these skills, considering the fact that trauma is the most common cause of death worldwide.",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/trauma-eval-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Autopsy Skills",
                "description" : "We were all excited at our first anatomy class when we first saw a corpse. But did you ever think about the cause of death? Did you ever consider that there are so many possibilities for someone's death? We are going to help you discover all of these at our Basic Autopsy Skills workshop and maybe help you choose your career as a future doctor.",
                "speaker" : "Prof. George Cristian Curca, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/bs-autopsy-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Cardiac Auscultation",
                "description" : "In this interactive workshop, the participants will learn the technical and theoretical skills necessary for the auscultation and recognition of the most common, as well as rare cardiology cases requiring rapid treatment. The physiology and pathology of the cardiovascular system will be presented to the participants by a specialist.The peer-friendly, relaxing atmosphere and the small number of students accepted per edition allow each participant to have the opportunity to deepen the notions and ask the lecturer any questions.",
                "speaker" : "LifeSIM Simulation Centre",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cardiac-ausc-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Health Care Informatics",
                "description" : "Not many of us take into account the importance of the statistics and patient databases during our medical practice. Whether we are considering a doctor’s appointment or an admission into a hospital wing, it is important to have access to the results of the previous clinical studies in order to guide our diagnoses in the right direction. This workshop will give you an insight on the progress of medicine and it will teach you how to use all the available information in order to provide the best medical care.",
                "speaker" : "Mihai Dragoi, Philips",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/healthcare-info-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Forensic Medicine",
                "description" : "The autopsy is maybe the most important part of a crime scene and also of a malpractice case. Can you put yourself in the position of a forensic doctor? Can you help the doctors exonerate themselves? Can you decide if it was a suicide or a murder? Can this workshop be as challenging for you as it is for us?",
                "speaker" : "Prof. George Cristian Curca, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-for-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Rheumatology",
                "description" : "This subspecialty of internal medicine comprises a broad spectrum of diseases which can be diagnosedboth in adult and in paediatric patients. Being multidisciplinary by nature, this field relies on extensive knowledge, in order to approach the diagnostic procedures in an appropriate manner. This workshop aims to reveal how rheumatological cases are addressed, the differential diagnosis and the types of treatment that these patients can undergo.",
                "speaker" : "Assoc. Prof. Daniela Opris-Belinski, MD, PhD; Claudia Cobilinschi, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/ccrheuma2-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Endocrinology",
                "description" : "Did you ever think about choosing endocrinology as your specialty? We want to help you decide if you are made for it . Let's explore together from the most simple to the most complex diagnoses",
                "speaker" : "Prof. Catalina Poiana, MD, PhD; Asst. Lect. Ionela Florina Baciu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-endo-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Handling Ecography During Critical Situations",
                "description" : "This workshop will teach you how to reach properly in emergency  situations.  You are going to learn how to withstand the pressure of a wounded patient and how to set a diagnosis based on the information given by the ultrasound scans you are required to read and observe.",
                "speaker" : "Asst. Lect. Carmen Cristescu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/handling-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Mindfulness",
                "description" : "Is your life too busy so you don’t have time to stop and stare? Has it been too long since you felt truly happy? Do you feel like your life, your purpose and your wishes are in a blur and you can’t figure out what to do next? If the answer to these questions is yes, then we welcome you to join us in this workshop and figure it out together.",
                "speaker" : "Psih. Cristina Ciubotaru",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/jim-grey-mindfulness-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "My career options - Becoming the best doctor",
                "description" : "Should I become a surgeon? A clinician? A researcher? Where should I go? During this workshop you will be given a lot of information about what medical specialty is more suitable for you and what would be the perfect place for you to practice medicine. If you are in doubt, this workshop is designed to shed some light on your future career.",
                "speaker" : "By Careers in White",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/career-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Nailfold Capillaroscopy",
                "description" : "Nailfold capillaroscopy is a simple, low-cost method, that is extremely important in the evaluation of patients with either Raynaud's phenomenon or with systemic sclerosis (SSc) spectrum diseases. Besides its importance for the early diagnosis of SSc, nailfold capillaroscopy is a useful tool to identify scleroderma patients with high risk for development of vascular and visceral complications and death. This workshop aims to reveal the main principles of this technique and approach the diagnostic procedures for the most important rheumatological diseases.",
                "speaker" : "Asst. Lect. Laura Grosanu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/nail-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Obstetrics and Gynecology Workshop",
                "description" : "We hope to provide you with a great opportunity of understanding and practising the management of a pregnant patient along with a wide range of obstetrical maneuvers through access to high-end medical simulation technology. From the basics of the clinical exam all the way to emergency, life-threatening scenarios, you will get accustomed to it all by practising: the Leopold maneuvers, the birth mechanism and the different presentations of the fetus, the pelvic exam and Pap test, every step of an uncomplicated vaginal birth and also the most frequent mother-newborn complications, the teamwork approach of a wide range of obstetrical scenarios, on an advanced birth simulator.",
                "speaker" : "LifeSIM Simulation Centre",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/OBG-lifesim-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Oncology",
                "description" : "The Oncology Clinical Case workshop will be an excellent experience for those who want to follow this specialty in the future. Even though clinical cases may sound easy, when you’re facing a patient and you only have a few test results at your disposal, concluding upon a clear diagnosis is not that simple. You will be asked to solve different types of cases that will help you broaden your medical knowledge.",
                "speaker" : "Mara Jidvenianu Popescu, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-onco-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Soft Tissue Ultrasound",
                "description" : "Many patients refer to the emergency ward with complaints related to the soft tissues. Traditionally, CT and NMR have been used when imaging studies are needed in these patients; however, ultrasound is generally more readily available in the evaluation of infections (like cellulitis), cysts, lymph nodes and foreign bodies. Soft tissue ultrasound will also reveal important musculoskeletal abnormalities like Baker cysts, peripheral nerve sheath tumors and pseudoaneurysms.",
                "speaker" : "Assoc. Prof. Florian Berghea, MD, PhD, Philips",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/st-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "The Basics Of Brain MRI, With A Twist",
                "description" : "This workshop will present the basics of MRI, from the physical principles to the main sequences. Then you will learn the main anatomical structures that can be seen on a brain MRI. Also, we will review some frequently encountered pathologies in a very entertaining and interactive manner. Don't forget your smartphone because you're going to need it.",
                "speaker" : "Stud. Ioan Mirea",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/stephen-hampshire-basic-mri-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Trauma Management",
                "description" : "Trauma Management is a workshop in which you’ll be given an insight on how to deal with a trauma case, how to manage the stress of this specialty and how to make instant decisions in a critical situation. Being a hands-on workshop, you will be taught some procedures such as endotracheal intubation, tracheostomy and chest intubation and you’ll also be guided, step by step, on how to do it yourselves.",
                "speaker" : "Hani Al-Qadhi, MD, FRCSC",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/trauma-management-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Cardiac Ultrasound, Philips",
                "description" : "Since its very beginnings, echocardiography gained extraordinary ground in the medical world, becoming a golden standard in the diagnosis of a great many cardiac pathologies. Being a completely noninvasive technique, it is the most frequently used diagnostic method. This workshop will teach you the basics of echocardiography, a procedure which you will most likely use numerous times in your medical career",
                "speaker" : "Lect. Alexandru Scafa-Udriste, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cardiac-eco-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Interventional Radiology",
                "description" : "During this workshop, you will get used to the basic materials and techniques used in Interventional Radiology, the main focus being on peripheral endovascular procedures, such as angiography, balloon angioplasty and stent placement. This hands-on experience on our simulators is designed to offer you a glimpse into the skills required in Interventional Radiology.",
                "speaker" : "Costin Minoiu, MD, PhD, Laurentiu Gulie, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/interv-radio-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Introduction to mechanical ventilation - Types of mechanical ventilation",
                "description" : "During the past few years the non-invasive ventilation techniques have proven their use in intensive care patients, due to the lack of complications associated with invasive methods and also due to the patients’ compliance. This workshop aims to present you the basic knowledge on the topic, in order to provide the best medical care to your patients.",
                "speaker" : "Bogdan Santa, Philips",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/mech-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Secretion management- Cough-assist E70",
                "description" : "Most of us consider coughing to be a symptom of an ailment, but essentially coughing is our way of cleaning the lungs out of mucus, in order to prevent infections caused by bacteria accumulated in place. Cough-Assist 70 is a medical device that uses positive pressures in order to stimulate coughing, while quickly reversing to negative pressures to aspirate the secretions. This workshop will teach you how to use this method in order to help your patients.",
                "speaker" : "Bogdan Santa, Philips",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cough-min.jpg'
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
                "title" : "RSSS mini Skills in Bowel Surgery",
                "description" : "This workshop will present the key principles behind bowel surgery. You will become familiar with Roux-en-Y reconstructions, appendectomy, bariatric surgery, colon surgery and intestinal anastomoses and you will even perform some of them. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img//ws/sscr-bowel-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Plastic and Reconstructive Surgery",
                "description" : "This workshop will teach you the skills to perform some of the most frequent procedures in plastic surgery, with a focus on skin reconstruction. You will become familiar with the specific surgical instruments used in plastic surgery, learn how to manage a surgical wound and how to make a skin flap and graft to cover skin defects. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/sscr-plastic-min.jpg'
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
                "imgsrc" : 'img/ws/bs-micro-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Basic Skills in Laparoscopy",
                "description" : "We all know that a laparoscopy surgery is way easier for both, surgeon and patient. Because of that, this workshop is going to be the best way for a start in the laparoscopy surgery path. As a plus, we are going to organise three workshops insted of one in order to give as many of you as possible the chance to participate and explore this less invasive surgery technique. ",
                "speaker" : "X-Projects",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/bs-laparo-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: General Surgery",
                "description" : "Clinical Cases sound easy, don’t they? When you’re faced with a patient and you only have a few test results, making a diagnosis is not that easy. This workshop will teach you which tests you need, which you don’t, and also what treatment you need to administer to the patient. The General Surgery Clinical Case workshop, for example, will be an excellent experience for those who want to follow a surgical speciality in the future. We all know that in surgical departments it is more difficult to make a diagnosis, because of the little time you have during an emergency, so this workshop will help you gain experience for your future career. The cases you will be asked to solve during the workshop will help you consolidate and broaden your knowledge about surgery, helping you discover a different approach.",
                "speaker" : "Adelina Elena Toma, MD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-gen-surgery-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Thoracic Surgery",
                "description" : "This workshop has the purpose to present the main techniques and materials for realising a proper tracheostomy and different types of pulmonary resections and sutures. During the practical part of the workshop, the participants will learn how to correctly insert a tube into an obstructed windpipe and how to properly perform pulmonary resections and sutures on biological material.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/rsss-thoracic-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Septoplasty",
                "description" : "This fully interactive workshop will provide you with an understanding of septoplasties, the immediate anatomy of the structures operated on and adjacent structures and specific surgical instruments used in ENT. Together with the trainers you will simulate this surgical intervention and correct any defects or deformities of the nasal septum using biologic material.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/rsss-sept-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Orthopaedic Surgery",
                "description" : "This workshop will present the key notions behind the orthopaedic treatment of fractures. You will become familiar with the most common types of upper limb fractures and the indications of casts and splints for their respective treatment. You will get to practice placing casts and splints for upper limb fractures. You will also get acquainted with the different types of fracture patterns, necessary surgical treatment, steps of the surgical techniques followed in the O.R and post-operative care.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/rsss-ortho-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Nerve and Tendon Reconstruction",
                "description" : "This workshop will teach you the skills to perform some of the most frequent procedures in plastic surgery, with a focus on nerve and tendon reconstruction. You will become familiar with the specific surgical instruments used in plastic surgery; learn how to manage a surgical wound and perform tendon sutures and microsurgical neurorrhaphies. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/rsss-nerve-tendon-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Kidney Surgery",
                "description" : "This workshop will teach you some of the most frequent procedures in urology, with a focus on kidney surgery. During the practical part, you will learn to perform partial nephrectomy, pyeloplasty and other techniques in the field of kidney surgery.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/rsss-kidney-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Hepato-Biliary Surgery",
                "description" : "This workshop will present the key principles behind hepatic surgery. You will become familiar with the main surgical instruments, learn the surgical approach of the liver and hepatic hilum, its anatomy, imaging techniques and how to perform a cholecystectomy and a liver resection. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/rsss-hep-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Gynecology",
                "description" : "This workshop will teach you the skills to perform some of the most frequent procedures in gynecology. You will become familiar with the main surgical techniques and practice maneuvers like adnexectomy, tubal ligation, hysterorrhaphy, myomectomy and hysterectomy. The workshop will be divided into a theoretical and a practical part - during the latter you will repeat the procedures shown by an instructor, until you master them.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/rsss-gyn-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "RSSS mini Skills in Eso-Gastric Surgery",
                "description" : "This workshop will teach you about the basic procedures that are performed in this field of surgery, such as total gastrectomies and esophagoplasties, along with information about the pathology of the region and the surgical approach of the superior gastric pole. During the practical part you will learn to perform various types of fundoplication techniques that are used in the treatment of gastroesophageal reflux disease.",
                "speaker" : "The Romanian Surgical Students Society",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/rsss-eso-gastric-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "How To Read An X-Ray, Advanced Principles And Trauma Management",
                "description" : "In this workshop you will learn how to read a detalied X-Ray, especially for politraumatic patients and multiple injuries.",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/x-2-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "How To Read An X-Ray, Basic Principles",
                "description" : "In this workshop you will learn how to interpret an x-ray from A to Z, step by step, for any part of the body.",
                "speaker" : "Asst. Lect. Osama M. Odat, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/x-1-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Orthopaedics",
                "description" : "Orthopaedics is the medical specialty that focuses on injuries and diseases of your body's musculoskeletal system. This complex system, which includes your bones, joints, ligaments, tendons, muscles, and nerves, allows you to move, work, and be active. The workshop involves the active involvement of participants in the learning process.",
                "speaker" : "Asist. Lect. Mihnea Ioan Popa, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-ortho-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case - Obstetrics and Gynaecology",
                "description" : "Clinical Case- Gynaecology Workshop is an interactive clinical workshop that proved itself as an effective learning tool. It is dedicated to students and young doctors that want to hone their skills in positive and differential diagnoses and therapeutic behavior using gripping, real-world clinical cases.",
                "speaker" : "Asst.Lect. Octavian Munteanu, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/cc-obg-min.jpg'
            },
            {
                "uid" : "",
                "category" : "",
                "years": "",
                "title" : "Clinical Case: Urology",
                "description" : "Urology is that part of medicine that helps us, male and female, discover the diseases of our urinary tract. One of the most interesting facts about urology is that it can also involve surgeries, not just the medical part of the diagnosis and treatment. Maybe you know things about urology and you can help the others discover them, or maybe we can teach you another part of it. Let’s find out together.",
                "speaker" : "Asst. Lect. Victor Madan, MD, PhD",
                "location" : "",
                "time" : "",
                "imgsrc" : 'img/ws/uro-min.jpg'
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