import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className='bg-[#E9F8FF] flex flex-col gap-3'>

        {/* WHAT IS DEPPRESION? */}
        <div className='flex flex-col mt-28 px-6 md:px-8 md:mt-20 gap-2 my-16 md:my-10'>

        <h2 className='font-bold text-lg'>What Is Depression?</h2>                  
        <p className=' text-sm  text-left tracking-tighter font-base '>Depression, also known as major depressive disorder, is a mood disorders that makes you feel constant sadness or lack of interest in life. Most people feel sad or depressed at times. It’s a normal reaction to loss or life's challenges. But when intense sadness -- including feeling helpless, hopeless, and worthless -- lasts for many days to weeks and keeps you from living your life, it may be something more than sadness. You could have clinical depression, a treatable medical condition.</p>

        <div className='h-fit flex justify-center my-2 md:hidden'>
            <Image src={'/assets/depression.png'} alt={''} className='object-contain rounded-3xl' width={320} height={160}/>
        </div>
        
        {/* Is Depression Curable? */}
        <h2 className='font-bold text-lg'>Is Depression Curable?</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>There’s no cure for depression. Your symptoms may go away over time, but the condition won’t. But with care and treatment, you can reach remission and enjoy a long, healthy life.</p>


        <div className='md:hidden'>

        <div className='flex flex-col'>
        {/* Depression Symptoms */}
        <h2 className='font-bold text-lg'>Depression Symptoms</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>According to the DSM-5, a manual doctors use to diagnose mental disorders, you have depression when you have five or more of these symptoms for at least 2 weeks:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Your mood is depressed for most of the day, especially in the morning.</li>
        <li>{'->'}You feel tired or have a lack of energy almost every day.</li>
        <li>{'->'}You feel worthless or guilty almost every day.</li>
        <li>{'->'}You feel hopeless or pessimistic.</li>
        <li>{'->'}You have a hard time focusing, remembering details, and making decisions.</li>
        <li>{'->'}You can’t sleep, or you sleep too much, almost every day.</li>
        <li>{'->'}You have almost no interest or pleasure in many activities nearly every day.</li>
        <li>{'->'}You think often about death or suicide (not just a fear of death).</li>
        <li>{'->'}You feel restless or slowed down.</li>
        <li>{'->'}You’ve lost or gained weight.</li>

        </ul>
        <p className=' text-sm  text-left tracking-tighter font-base '>You may also:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Feel cranky and restless.</li>
        <li>{'->'}Lose pleasure in life.</li>
        <li>{'->'}Overeat or stop feeling hungry.</li>
        <li>{'->'}Have aches, pains, headaches, cramps, or digestive problems that don’t go away or get better with treatment.</li>
        <li>{'->'}Have sad, anxious, or "empty" feelings.</li>

        </ul>
        <p className=' text-sm  text-left tracking-tighter font-base '>
        While these symptoms are common, not everyone with depression will have the same ones. How severe they are, how often they happen, and how long they last can vary.</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>
        Your symptoms may also happen in patterns. For example, depression may come with a change in seasons (a condition formerly called seasonal affective disorder).</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>
        It's not uncommon for people with depression to have physical signs of the condition. They may include joint pain, back pain, digestive problems, sleep trouble, and appetite changes. You might have slowed speech and movements, too. The reason is that brain chemicals linked to depression, specifically serotonin and norepinephrine, play a role in both mood and pain.</p>
        </div>
        <div className='h-fit  justify-center my-2 hidden'>
            <Image src={'/assets/depression.png'} alt={''} className='object-contain rounded-3xl' width={800} height={400}/>
        </div>
        
        </div>
        <div className='hidden md:flex flex-row justify-center'>

        <div className='flex flex-col'>
        {/* Depression Symptoms */}
        <h2 className='font-bold text-lg'>Depression Symptoms</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>According to the DSM-5, a manual doctors use to diagnose mental disorders, you have depression when you have five or more of these symptoms for at least 2 weeks:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Your mood is depressed for most of the day, especially in the morning.</li>
        <li>{'->'}You feel tired or have a lack of energy almost every day.</li>
        <li>{'->'}You feel worthless or guilty almost every day.</li>
        <li>{'->'}You feel hopeless or pessimistic.</li>
        <li>{'->'}You have a hard time focusing, remembering details, and making decisions.</li>
        <li>{'->'}You can’t sleep, or you sleep too much, almost every day.</li>
        <li>{'->'}You have almost no interest or pleasure in many activities nearly every day.</li>
        <li>{'->'}You think often about death or suicide (not just a fear of death).</li>
        <li>{'->'}You feel restless or slowed down.</li>
        <li>{'->'}You’ve lost or gained weight.</li>

        </ul>
        <p className=' text-sm  text-left tracking-tighter font-base '>You may also:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Feel cranky and restless.</li>
        <li>{'->'}Lose pleasure in life.</li>
        <li>{'->'}Overeat or stop feeling hungry.</li>
        <li>{'->'}Have aches, pains, headaches, cramps, or digestive problems that don’t go away or get better with treatment.</li>
        <li>{'->'}Have sad, anxious, or "empty" feelings.</li>

        </ul>
        <p className=' text-sm  text-left tracking-tighter font-base '>
        While these symptoms are common, not everyone with depression will have the same ones. How severe they are, how often they happen, and how long they last can vary.</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>
        Your symptoms may also happen in patterns. For example, depression may come with a change in seasons (a condition formerly called seasonal affective disorder).</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>
        It's not uncommon for people with depression to have physical signs of the condition. They may include joint pain, back pain, digestive problems, sleep trouble, and appetite changes. You might have slowed speech and movements, too. The reason is that brain chemicals linked to depression, specifically serotonin and norepinephrine, play a role in both mood and pain.</p>
        </div>
        <div className='h-fit flex justify-center my-2 '>
            <Image src={'/assets/depression.png'} alt={''} className='object-contain rounded-3xl' width={800} height={400}/>
        </div>
        
        </div>



        {/* Depression in Children */}
        <h2 className='font-bold text-lg'>Depression in Children</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>Childhood depression is different from the normal "blues" and everyday emotions most kids feel. If your child is sad, it doesn’t necessarily mean they have depression. It's when the sadness stays day after day that depression may be an issue. Disruptive behavior that interferes with normal social activities, interests, schoolwork, or family life may also be signs of a problem.</p>


        {/* Depression in Teens */}
        <h2 className='font-bold text-lg'>Depression in Teens</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>A lot of teens feel unhappy or moody. When the sadness lasts for more than 2 weeks and a teen has other symptoms of depression, there may be a problem. Watch for withdrawal from friends and family, a drop in their performance at school, or use of alcohol or drugs. Talk to your doctor and find out if your teen may be depressed. There is effective treatment that can help teens move beyond depression as they grow older.</p>

        <div className='h-fit flex justify-center my-2 md:hidden'>
            <Image src={'/assets/depression.png'} alt={''} className='object-contain rounded-3xl' width={320} height={160}/>
        </div>


        {/* Depression Causes */}
        <h2 className='font-bold text-lg'>Depression Causes</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>Doctors haven’t pinpointed exact causes for depression. They think it may be a combination of things, including:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>


        <li>{'->'}Brain structure. People with depression seem to have physical differences in their brains from people who don’t have depression.</li>
        <li>{'->'}Brain chemistry. Chemicals in your brain called neurotransmitters play a part in your mood. When you have depression, it could be because these chemicals aren’t working the way they should.</li>
        <li>{'->'}Hormones. Your hormone levels change because of pregnancy, postpartum issues, thyroid problems, menopause, or other reasons. That can set off depression symptoms.</li>
        <li>{'->'}Genetics. Researchers haven’t yet found the genes that might be responsible for depression, but you’re more likely to have depression if someone you’re related to has it.</li>

        </ul>

        <div className='md:hidden'>
        <h2 className='font-bold text-lg'>Types of Depression</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>There are a few types of depressive disorders that doctors can diagnose, including:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>


        <li>{'->'}Unipolar major depression.</li>
        <li>{'->'}Persistent depressive disorder, also called dysthymia, when depression lasts for at least 2 years.</li>
        <li>{'->'}Disruptive mood dysregulation disorder, when children and teens get very cranky, angry, and often have intense outbursts that are more severe than a child’s typical reaction.</li>
        <li>{'->'}Premenstrual dysphoric disorder, when a woman has severe mood problems before her period, more intense than typical premenstrual syndrome (PMS).</li>
        <li>{'->'}Substance-induced mood disorder (SIMD), when symptoms happen while you’re taking a drug or drinking alcohol or after you stop.</li>
        <li>{'->'}Depressive disorder due to another medical condition.</li>
        <li>{'->'}Other depressive disorders, such as minor depression.</li>

        </ul>
        <p className=' text-sm  text-left tracking-tighter font-base '>Your depression may have other specific features, such as:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Anxious distress. You worry a lot about things that might happen or about losing control.</li>
        <li>{'->'}Mixed features. You have both depression and mania -- periods of high energy, talking too much, and high self-esteem.</li>
        <li>{'->'}Atypical features. You can feel good after happy events, but you also feel hungrier, need to sleep a lot, and are sensitive to rejection.</li>
        <li>{'->'}Psychotic features. You believe things that aren’t true, or see and hear things that aren’t there.</li>
        <li>{'->'}Catatonia. You can’t move your body normally. You might be still and unresponsive or have uncontrollable movements.</li>
        <li>{'->'}Peripartum depression. Your symptoms begin during pregnancy or after giving birth. Seasonal pattern. Your symptoms get worse with changes in the seasons, especially the colder, darker months.</li>

        </ul>
        </div>

        <div className='hidden md:flex'>
        <div className='flex flex-col justify-between'>
        <h2 className='font-bold text-lg'>Types of Depression</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>There are a few types of depressive disorders that doctors can diagnose, including:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>


        <li>{'->'}Unipolar major depression.</li>
        <li>{'->'}Persistent depressive disorder, also called dysthymia, when depression lasts for at least 2 years.</li>
        <li>{'->'}Disruptive mood dysregulation disorder, when children and teens get very cranky, angry, and often have intense outbursts that are more severe than a child’s typical reaction.</li>
        <li>{'->'}Premenstrual dysphoric disorder, when a woman has severe mood problems before her period, more intense than typical premenstrual syndrome (PMS).</li>
        <li>{'->'}Substance-induced mood disorder (SIMD), when symptoms happen while you’re taking a drug or drinking alcohol or after you stop.</li>
        <li>{'->'}Depressive disorder due to another medical condition.</li>
        <li>{'->'}Other depressive disorders, such as minor depression.</li>

        </ul>
        <p className=' text-sm  text-left tracking-tighter font-base '>Your depression may have other specific features, such as:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Anxious distress. You worry a lot about things that might happen or about losing control.</li>
        <li>{'->'}Mixed features. You have both depression and mania -- periods of high energy, talking too much, and high self-esteem.</li>
        <li>{'->'}Atypical features. You can feel good after happy events, but you also feel hungrier, need to sleep a lot, and are sensitive to rejection.</li>
        <li>{'->'}Psychotic features. You believe things that aren’t true, or see and hear things that aren’t there.</li>
        <li>{'->'}Catatonia. You can’t move your body normally. You might be still and unresponsive or have uncontrollable movements.</li>
        <li>{'->'}Peripartum depression. Your symptoms begin during pregnancy or after giving birth. Seasonal pattern. Your symptoms get worse with changes in the seasons, especially the colder, darker months.</li>

        </ul>
        </div>

        <div className='h-fit flex justify-center my-2'>
            <Image src={'/assets/depression.png'} alt={''} className='object-contain rounded-3xl ml-12' width={450} height={225}/>
        </div>

        </div>

        <h2 className='font-bold text-lg'>What illnesses Happen With Depression?</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>It’s common for people to have other medical or mental health problems along with depression, such as anxiety, obsessive compulsive disorder, panic disorders, phobias, substance use disorders, and eating disorders. If you or a loved one has symptoms of depression or another mental illness, talk to your doctor. Treatments can help.</p>
            

        <h2 className='font-bold text-lg'>Depression and Suicide</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>Anybody who thinks or talks about harming themselves should be taken very seriously. Do not hesitate to call your local suicide hotline right away. Call 800-SUICIDE (800-784-2433); 800-273-TALK (800-273-8255); or, for the hotline for the hearing impaired, call 800-799-4889. Or contact a mental health professional ASAP. If you intend or have a plan to commit suicide, go to the emergency room right away.</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>Warning signs include:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>
        
        
        <li>{'->'}Thoughts or talk of death or suicide.</li>
        <li>{'->'}Thoughts or talk of self-harm or harm to others.</li>
        <li>{'->'}Aggressive behavior or impulsiveness.</li>

        </ul>
        <p className=' text-sm  text-left tracking-tighter font-base '>Watch for these signs if your child or teen starts taking antidepressants. In some cases, people under 25 may have more suicidal thoughts in the first weeks of taking these medicines or when they take a different dose.</p>
        

        <h2 className='font-bold text-lg'>Depression Diagnosis</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>In order to diagnose you with depression, your doctor will use several methods, including:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Physical exam. Your doctor will check on your overall health to see if you might be dealing with another condition.</li>
        <li>{'->'}Lab tests. For example, you may have bloodwork done to check on certain hormone levels.</li>
        <li>{'->'}Psychiatric evaluation. Your doctor will be interested in your mental health and will ask about your thoughts, feelings, and behavior patterns. You may also fill out a questionnaire.</li>
        <li>{'->'}Diagnostic and Statistical Manual of Mental Disorders (DSM-5). The American Psychiatric Association lists the criteria for depression in this manual. Your doctor may check your symptoms against it to see if you fit the standard.</li>

        </ul>
        

        <h2 className='font-bold text-lg'>Depression Treatment</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>If you or someone you know has symptoms of the condition, talk to your doctor. They can evaluate you and offer you treatment or refer you to a mental health professional.</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>The type of treatment your doctor recommends will depend on your symptoms and how severe they are. You may need one or more of the following:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        
        <li>{'->'}Medication. Antidepressant medications (in combination with therapy) are effective for most people with depression. There are many types of antidepressants. You may have to try several kinds before you find the one that works best for you. You may need a combination of two. Or your doctor may also prescribe another type of medication to help your antidepressant work best, such as a mood stabilizer, antipsychotic, anti-anxiety medications, or stimulant medication.</li>
        <li>{'->'}Psychotherapy. Talking to a mental health professional on a regular basis about your depression and other issues can help treat the symptoms. Different methods are available, including cognitive behavioral therapy (CBT) and talk therapy.</li>
        <li>{'->'}Hospital or residential treatment. If your depression is severe enough that you’re having trouble taking care of yourself or may harm yourself or others, you may need psychiatric treatment in a hospital or residential facility.</li>
        <li>{'->'}Electroconvulsive therapy (ECT). This brain stimulation therapy passes electric currents through your brain to help your neurotransmitters work better. Typically, you wouldn’t use this therapy unless antidepressants aren’t working or you can’t take them for other health reasons.</li>
        <li>{'->'}Transcranial magnetic stimulation (TMS). Your doctor typically suggests this only after antidepressants haven’t worked. This treatment uses a coil to send magnetic pulses through your brain to help stimulate nerve cells that regulate mood.</li>

        </ul>

        <div className='h-fit flex justify-center my-2'>
            <Image src={'/assets/depression.png'} alt={''} className='object-contain rounded-3xl md:hidden' width={320} height={160}/>
        </div>

        <h2 className='font-bold text-lg'>Symptoms</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>There are a lot of signs of depression, but you may not have them all. How intense they are, and how long they last, are different from person to person. Signs of depression can be physical.</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>Some of the ways you might feel are:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>Sad, empty, or anxious{'->'} It will continue over time without getting better or going away.</li>

        <li>Helpless, worthless, or guilty{'->'} You may feel bad about yourself or your life, or think a lot about losses or failures.</li>

        <li>Hopeless{'->'} You may be pessimistic or believe that nothing good will ever happen. You may even think about suicide.</li>

        <li>Irritable{'->'} You may get restless or more cranky than usual.</li>

        <li>Less interest in activities{'->'} Hobbies or games you usually enjoy may not appeal to you. You may have little or no desire to eat or have sex.</li>

        <li>Less energetic{'->'} You may feel extremely tired or think more slowly. Daily routines and tasks may seem too hard to manage.</li>

        <li>Trouble concentrating{'->'} It could be tough to focus. Simple things like reading a newspaper or watching TV may be hard. You may have trouble remembering details. It might seem overwhelming to make a decision, whether it's big or small.</li>

        <li>Changes in the way you sleep{'->'} You may wake up too early or have trouble falling asleep. The opposite can also happen. You may sleep much longer than usual.</li>

        <li>Changes in appetite{'->'} You may overeat or not feel hungry. Depression often leads to weight gain or weight loss.</li>

        <li>Aches and pains{'->'} You may have headaches, cramps, an upset stomach, or digestive problems.</li>

        </ul>

        <h2 className='font-bold text-lg'>Causes</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>Experts believe depression is due to a combination of things:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>Brain structure{'->'} The way certain nerve pathways or circuits in your brain send information may not work properly. Scans show that the parts of your brain involved in mood, thinking, sleep, appetite, and behavior look different when you're depressed, but scientists aren't sure why.</li>
        <li>Genes{'->'} Scientists are studying certain genes that may make you more likely to get it. But even if you have them, you may not get depressed. And depression can happen in some people even when they don't have that genetic makeup.</li>
        <li>Depression can run in families, but that doesn't mean you'll develop depression just because someone you're related to has it. And you may have the condition even if no one else in your family has it.</li>
        <li>Life events{'->'} Something disturbing or traumatic that happens to you may trigger depression. It may be the loss of someone close to you, a difficult relationship, or a stressful situation. Other things, like your finances, where you live, and whether or not you're married may also have an impact. But remember, there doesn't have to be a "reason" for your depression. Sometimes it happens without an obvious cause.</li>
        <li>Childhood problems{'->'} People who have disturbing experiences in childhood are more likely to have depression. It may be from brain changes caused by trauma at a young age.</li>
        <li>Other conditions{'->'} Drug or alcohol abuse, illness, long-term pain, anxiety, sleep problems, and attention deficit hyperactivity disorder may also be linked to depression.</li>

        </ul>

        <h2 className='font-bold text-lg'>Symptoms of Severe Depression</h2>
        <h3 className='text-lg font-semibold'>What are the symptoms of severe depression?</h3>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Insomnia or excessive sleeping.</li>
        <li>{'->'}Irritability.</li>
        <li>{'->'}Loss of interest in activities that used to be enjoyable.</li>
        <li>{'->'}Hopelessness.</li>
        <li>{'->'}Persistent thoughts of something bad happening.</li>
        <li>{'->'}Thoughts of death or suicide or suicide attempts.</li>

        </ul>
        <h3 className='text-lg font-semibold'>
        In very severe cases, psychotic symptoms (such as hallucinations or delusions):</h3>
        <p className=' text-sm  text-left tracking-tighter font-base '>Inability to take care of oneself, such as eating, bathing, or fulfilling family or work responsibilities</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>
        Although you might feel that there's no hope, talk to your doctor about treatment options. Even severe depression symptoms can be treated.</p>

        <div className='md:hidden'>
        <div>
        <h2 className='font-bold text-lg'>Risk Factors for Suicide</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>Not all people with risk factors will be suicidal. In addition to depression or other mental illness, risk factors for suicide include:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        
        <li>{'->'}Current or past history of substance abuse.</li>
        <li>{'->'}Past history of suicide attempts.</li>
        <li>{'->'}Family history of suicide.</li>
        <li>{'->'}Family history of mental illness or substance abuse.</li>
        <li>{'->'}Firearms in the home.</li>
        <li>{'->'}Incarceration.</li>
        <li>{'->'}Feelings of hopelessness.</li>

        </ul>
        </div>

        <div className='h-fit flex justify-center my-2'>
            <Image src={'/assets/depression.png'} alt={''} className='object-contain rounded-3xl' width={320} height={160}/>
        </div>
        </div>

        <div className='hidden md:flex justify-between'>
        <div className='flex flex-col'>
        <h2 className='font-bold text-lg'>Risk Factors for Suicide</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>Not all people with risk factors will be suicidal. In addition to depression or other mental illness, risk factors for suicide include:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        
        <li>{'->'}Current or past history of substance abuse.</li>
        <li>{'->'}Past history of suicide attempts.</li>
        <li>{'->'}Family history of suicide.</li>
        <li>{'->'}Family history of mental illness or substance abuse.</li>
        <li>{'->'}Firearms in the home.</li>
        <li>{'->'}Incarceration.</li>
        <li>{'->'}Feelings of hopelessness.</li>

        </ul>
        </div>

        <div className='h-fit flex justify-center my-2'>
            <Image src={'/assets/depression.png'} alt={''} className='object-contain rounded-3xl' width={450} height={225}/>
        </div>
        </div>



        <h2 className='font-bold text-lg'>Suicidal Thoughts: An Emergency</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>For people who are severely depressed, suicide is a real threat. Each year, about 46,000 people in the U.S. take their own lives, although the true number may be higher. Some suicides go unrecognized because they're classified as accidents, drug overdoses, or shootings. Among people whose depression remains untreated, up to 15% will kill themselves.</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>
        What are the warning signs of suicide? According to the National Suicide Prevention Lifeline, they include:</p>
        <ul className=' text-sm  text-left tracking-tighter font-base '>

        <li>{'->'}Talking about wanting to die or wanting to kill yourself.</li>
        <li>{'->'}Looking for a way to kill yourself, such as searching online for methods or buying a gun.</li>
        <li>{'->'}Talking about feeling hopeless or having no reason to live.</li>
        <li>{'->'}Talking about feeling trapped or in unbearable pain.</li>
        <li>{'->'}Talking about being a burden to others.</li>
        <li>{'->'}Increasing use of alcohol or drugs.</li>
        <li>{'->'}Acting anxious or agitated; behaving recklessly.</li>
        <li>{'->'}Sleeping too little or too much.</li>
        <li>{'->'}Withdrawing or feeling isolated.</li>
        <li>{'->'}Showing rage or talking about seeking revenge.</li>
        <li>{'->'}Displaying extreme mood swings.</li>

        </ul>

        <h2 className='font-bold text-lg'>Getting Help</h2>
        <p className=' text-sm  text-left tracking-tighter font-base '>Be aware that often, suicidal behavior is impulsive. Remove any weapons, medications, or other means that you might use to harm yourself. If you own a gun or other weapon, ask a trusted person to keep it away from you. Get rid of stockpiled pills by placing them in a bag with cat litter or dirt and disposing of the entire package. By getting such items out of your surroundings, you may buy time -- enough valuable time for you to overcome a suicidal impulse and to consider other ways to cope with your pain.</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>Avoid using alcohol or illegal drugs, or seek treatment to break dependence on these substances. They can worsen your depression and lead to thoughts of suicide. Some studies have found that among people who have completed suicide, 33%-69% have had alcohol detected in their blood.</p>
        <p className=' text-sm  text-left tracking-tighter font-base '>If you are severely depressed or have suicidal thoughts, tell your primary care doctor, psychiatrist, or therapist. Or call the National Suicide Prevention Lifeline anytime at 988.
        If you feel that you can't control the urge to harm yourself, or if you've already taken steps to harm yourself, call 911 or go to the emergency room without delay. You may need to be hospitalized for supervised treatment to reduce the risk of suicide.</p>

        </div>
    </section>
      
    
  )
}

export default page