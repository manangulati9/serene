import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className='bg-[#E9F8FF] flex flex-col gap-3'>
    <div className='flex flex-col mt-28 px-6 md:px-8 md:mt-20 gap-2 my-16 md:my-10'>


    <div className='md:hidden'>
    <div>
    {/* What are Anxiety Disorders? */}
    <h2 className='font-bold text-lg'>What are Anxiety Disorders?</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>Anxiety is a normal emotion. It’s your brain’s way of reacting to stress and alerting you of potential danger ahead. Everyone feels anxious now and then. For example, you may worry when faced with a problem at work, before taking a test, or before making an important decision.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>Occasional anxiety is OK. But anxiety disorders are different. They’re a group of mental illnesses that cause constant and overwhelming anxiety and fear. The excessive anxiety can make you avoid work, school, family get-togethers, and other social situations that might trigger or worsen your symptoms.
    With treatment, many people with anxiety disorders can manage their feelings.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>With treatment, many people with anxiety disorders can manage their feelings.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>There are several types of anxiety disorders:</p>
    <ul className=' text-sm  text-left tracking-tighter font-base '>

    <li>Generalized anxiety disorder{'->'} You feel excessive, unrealistic worry and tension with little or no reason.</li><br/><br/>
    <li>Panic disorder{'->'} You feel sudden, intense fear that brings on a panic attack. During a panic attack you may break out in a sweat, have chest pain, and have a pounding heartbeat (palpitations). </li>Sometimes you may feel like you’re choking or having a heart attack.<br/><br/>
    <li>Social anxiety disorder{'->'} Also called social phobia, this is when you feel overwhelming worry and self-consciousness about everyday social situations. You obsessively worry about others judging you or being embarrassed or ridiculed.</li><br/><br/>
    <li>Specific phobias{'->'} You feel intense fear of a specific object or situation, such as heights or flying. The fear goes beyond what’s appropriate and may cause you to avoid ordinary situations.</li>
    <li>Agoraphobia{'->'} You have an intense fear of being in a place where it seems hard to escape or get help if an emergency occurs. For example, you may panic or feel anxious when on an airplane, on public transportation, or standing in line with a crowd.</li><br/><br/>
    <li>Separation anxiety{'->'} Little kids aren’t the only ones who feel scared or anxious when a loved one leaves. Anyone can get separation anxiety disorder. If you do, you’ll feel very anxious or fearful when a person you’re close to leaves your sight. You’ll always worry that something bad may happen to your loved one.</li><br/><br/>
    <li>Selective mutism{'->'} This is a type of social anxiety in which young kids who talk normally with their family don’t speak in public, like at school.</li><br/><br/>
    <li>Medication-induced anxiety disorder{'->'} Use of certain medications or illegal drugs, or withdrawal from certain drugs, can trigger some symptoms of anxiety disorder.</li>

    </ul>
    </div>

    <div className='h-fit flex justify-center my-2'>
        <Image src={'/assets/anxiety.jpg'} alt={''} className='object-contain rounded-3xl' width={320} height={160}/>
    </div>

    </div>

    <div className='hidden md:flex justify-between'>
    <div className='flex flex-col w-fit'>
    {/* What are Anxiety Disorders? */}
    <h2 className='font-bold text-lg'>What are Anxiety Disorders?</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>Anxiety is a normal emotion. It’s your brain’s way of reacting to stress and alerting you of potential danger ahead. Everyone feels anxious now and then. For example, you may worry when faced with a problem at work, before taking a test, or before making an important decision.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>Occasional anxiety is OK. But anxiety disorders are different. They’re a group of mental illnesses that cause constant and overwhelming anxiety and fear. The excessive anxiety can make you avoid work, school, family get-togethers, and other social situations that might trigger or worsen your symptoms.
    With treatment, many people with anxiety disorders can manage their feelings.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>With treatment, many people with anxiety disorders can manage their feelings.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>There are several types of anxiety disorders:</p>
    <ul className=' text-sm  text-left tracking-tighter font-base '>

    <li>Generalized anxiety disorder{'->'} You feel excessive, unrealistic worry and tension with little or no reason.</li><br/><br/>
    <li>Panic disorder{'->'} You feel sudden, intense fear that brings on a panic attack. During a panic attack you may break out in a sweat, have chest pain, and have a pounding heartbeat (palpitations). </li>Sometimes you may feel like you’re choking or having a heart attack.<br/><br/>
    <li>Social anxiety disorder{'->'} Also called social phobia, this is when you feel overwhelming worry and self-consciousness about everyday social situations. You obsessively worry about others judging you or being embarrassed or ridiculed.</li><br/><br/>
    <li>Specific phobias{'->'} You feel intense fear of a specific object or situation, such as heights or flying. The fear goes beyond what’s appropriate and may cause you to avoid ordinary situations.</li>
    <li>Agoraphobia{'->'} You have an intense fear of being in a place where it seems hard to escape or get help if an emergency occurs. For example, you may panic or feel anxious when on an airplane, on public transportation, or standing in line with a crowd.</li><br/><br/>
    <li>Separation anxiety{'->'} Little kids aren’t the only ones who feel scared or anxious when a loved one leaves. Anyone can get separation anxiety disorder. If you do, you’ll feel very anxious or fearful when a person you’re close to leaves your sight. You’ll always worry that something bad may happen to your loved one.</li><br/><br/>
    <li>Selective mutism{'->'} This is a type of social anxiety in which young kids who talk normally with their family don’t speak in public, like at school.</li><br/><br/>
    <li>Medication-induced anxiety disorder{'->'} Use of certain medications or illegal drugs, or withdrawal from certain drugs, can trigger some symptoms of anxiety disorder.</li>

    </ul>
    </div>

    <div className='h-[608px] flex justify-center my-2'>
        <Image src={'/assets/anxiety.jpg'} alt={''} className='object-contain rounded-3xl' width={360} height={280}/>
    </div>

    </div>

    {/* Anxiety Disorder Causes and Risk Factors */}
    <h2 className='font-bold text-lg'>Anxiety Disorder Causes and Risk Factors</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>Researchers don’t know exactly what brings on anxiety disorders. A complex mix of things play a role in who does and doesn’t get one.</p>

    {/* Causes of Anxiety Disorder */}
    <h2 className='font-bold text-lg'>Causes of Anxiety Disorder</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>Some causes of anxiety disorders are:</p>
    <ul className=' text-sm  text-left tracking-tighter font-base '>

    <li>{'->'}Genetics: Anxiety disorders can run in families.</li>
    <li>{'->'}Brain chemistry: Some research suggests anxiety disorders may be linked to faulty circuits in the brain that control fear and emotions.</li>
    <li>{'->'}Environmental stress: This refers to stressful events you have seen or lived through. Life events often linked to anxiety disorders include childhood abuse and neglect, a death of a loved one, or being attacked or seeing violence:</li>
    <li>{'->'}Drug withdrawal or misuse: Certain drugs may be used to hide or decrease certain anxiety symptoms. Anxiety disorder often goes hand in hand with alcohol and substance use.</li>
    <li>{'->'}Medical conditions: Some heart, lung, and thyroid conditions can cause symptoms similar to anxiety disorders or make anxiety symptoms worse. It’s important to get a full physical exam to rule out other medical conditions when talking to your doctor about anxiety.</li>

    </ul>

    <div className='md:hidden'>
    <div>
    {/* Risk Factors for Anxiety Disorder */}
    <h2 className='font-bold text-lg'>Risk Factors for Anxiety Disorder</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>Some things also make you more likely to develop an anxiety disorder. These are called risk factors. Some risk factors you can’t change, but others you can.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>Risk factors for anxiety disorders include:</p>
    <ul className=' text-sm  text-left tracking-tighter font-base '>

    <li>{'->'}History of mental health disorder. Having another mental health disorder, like depression, raises your risk for anxiety disorder.</li>
    <li>{'->'}Childhood sexual abuse. Emotional, physical, and sexual abuse or neglect during childhood is linked to anxiety disorders later in life.</li>
    <li>{'->'}Trauma. Living through a traumatic event increases the risk of posttraumatic stress disorder(PTSD), which can cause panic attacks.</li>
    <li>{'->'}Negative life events. Stressful or negative life events, like losing a parent in early childhood, increase your risk for anxiety disorder.</li>
    <li>{'->'}Severe illness or chronic health condition. Constant worry about your health or the health of a loved one, or caring for someone who is sick, can cause you to feel overwhelmed and anxious.</li>
    <li>{'->'}Substance abuse. The use of alcohol and illegal drugs makes you more likely to get an anxiety disorder. Some people also use these substances to hide or ease anxiety symptoms.</li>
    <li>{'->'}Being shy as a child. Shyness and withdrawal from unfamiliar people and places during childhood is linked to social anxiety in teens and adults.</li>
    <li>{'->'}Low self-esteem. Negative perceptions about yourself may lead to social anxiety disorder.</li>

    </ul>
    </div>

    <div className='h-fit flex justify-center my-2'>
        <Image src={'/assets/anxiety.jpg'} alt={''} className='object-contain rounded-3xl' width={320} height={160}/>
    </div>
    </div>

    <div className='hidden md:flex justify-between'>
    <div>
    {/* Risk Factors for Anxiety Disorder */}
    <h2 className='font-bold text-lg'>Risk Factors for Anxiety Disorder</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>Some things also make you more likely to develop an anxiety disorder. These are called risk factors. Some risk factors you can’t change, but others you can.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>Risk factors for anxiety disorders include:</p>
    <ul className=' text-sm  text-left tracking-tighter font-base '>

    <li>{'->'}History of mental health disorder. Having another mental health disorder, like depression, raises your risk for anxiety disorder.</li>
    <li>{'->'}Childhood sexual abuse. Emotional, physical, and sexual abuse or neglect during childhood is linked to anxiety disorders later in life.</li>
    <li>{'->'}Trauma. Living through a traumatic event increases the risk of posttraumatic stress disorder(PTSD), which can cause panic attacks.</li>
    <li>{'->'}Negative life events. Stressful or negative life events, like losing a parent in early childhood, increase your risk for anxiety disorder.</li>
    <li>{'->'}Severe illness or chronic health condition. Constant worry about your health or the health of a loved one, or caring for someone who is sick, can cause you to feel overwhelmed and anxious.</li>
    <li>{'->'}Substance abuse. The use of alcohol and illegal drugs makes you more likely to get an anxiety disorder. Some people also use these substances to hide or ease anxiety symptoms.</li>
    <li>{'->'}Being shy as a child. Shyness and withdrawal from unfamiliar people and places during childhood is linked to social anxiety in teens and adults.</li>
    <li>{'->'}Low self-esteem. Negative perceptions about yourself may lead to social anxiety disorder.</li>

    </ul>
    </div>

    <div className='h-fit flex justify-center my-2'>
        <Image src={'/assets/anxiety.jpg'} alt={''} className='object-contain rounded-3xl' width={320} height={160}/>
    </div>
    </div>

    

    {/* Anxiety Disorder Diagnosis */}
    <h2 className='font-bold text-lg'>Anxiety Disorder Diagnosis</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>If you have symptoms, your doctor will examine you and ask questions about your medical history. They may run tests to rule out other health conditions that might be causing your symptoms. No lab tests can specifically diagnose anxiety disorders.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>
    If your doctor doesn’t find any physical reason for how you’re feeling, they may send you to a psychiatrist, psychologist, or another mental health specialist. Those doctors will ask you questions and use tools and testing to find out if you may have an anxiety disorder.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>
    Your doctors will consider how long you’ve had symptoms and how intense they are when diagnosing you. It’s important to let your doctors or counselors know if your anxiety makes it hard to enjoy or complete everyday tasks at home, work, or school.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>The United States Preventive Service Task Force recommends screening for anxiety in children and adolescents ages 8 to 18 years and screening for major depressive disorder (MDD) in adolescents ages 12 to 18 years.</p>


    {/* Anxiety Disorder Treatments */}
    <h2 className='font-bold text-lg'>Anxiety Disorder Treatments</h2>
    
    <p className=' text-sm  text-left tracking-tighter font-base '>There are many treatments to reduce and manage symptoms of anxiety disorder. Usually, people with anxiety disorder take medicine and go to counseling.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>Treatments for anxiety disorder include:</p>
    <ul className=' text-sm  text-left tracking-tighter font-base '>


    <li>{'->'}Medication. Several types of drugs are used to treat anxiety disorders. Talk to your doctor or psychiatrist about the pros and cons of each medicine to decide which one is best for you.</li>
    <li>{'->'}Antidepressants. Modern antidepressants (SSRIs and SNRIs) are typically the first drugs prescribed to someone with an anxiety disorder. Examples of SSRIs are escitalopram (Lexapro) and fluoxetine (Prozac). SNRIs include duloxetine (Cymbalta)and venlafaxine (Effexor).</li>
    <li>{'->'}Bupropion. This is another type of antidepressant commonly used to treat chronic anxiety. It works differently than SSRIs and SNRIs.</li>
    <li>{'->'}Other antidepressants. These include tricyclics and monoamine oxidase inhibitors (MAOIs). They are less commonly used because side effects, like drops in blood pressure, dry mouth, blurry vision, and urinary retention, can be unpleasant or unsafe for some people.</li>

    </ul>
    <h3 className='text-lg font-semibold'>Benzodiazepines for a long time.</h3>
    <ul className=' text-sm  text-left tracking-tighter font-base '>

    <li>{'->'}Beta-blockers. This type of high blood pressure drug is used off-label and can help you feel better if you’re having physical symptoms of anxiety, such as a racing heart, trembling, or shaking. A beta-blocker may help you relax during an acute anxiety attack.</li>
    <li>{'->'}Anticonvulsants. Used to prevent seizures in people with epilepsy, these drugs are sometimes used off-label to relieve certain anxiety disorder symptoms.</li>
    <li>{'->'}Antipsychotics. Low doses of these drugs can be added in an off-label use to help make other treatments work better.</li>
    <li>{'->'}Buspirone (BuSpar). This anti-anxiety drug is sometimes used to treat chronic anxiety. You’ll need to take it for a few weeks before seeing full symptom relief.</li>
    <li>{'->'}Psychotherapy: This is a type of counselling that helps you learn how your emotions affect your behaviors. It’s sometimes called talk therapy. A trained mental health specialist listens and talks to you about your thoughts and feelings and suggests ways to understand and manage them and your anxiety disorder.</li>
    <li>{'->'}Cognitive behavioral therapy (CBT): This common type of psychotherapy teaches you how to turn negative, or panic-causing, thoughts and behaviors into positive ones. You’ll learn ways to carefully approach and manage fearful or worrisome situations without anxiety. Some places offer family CBT sessions.</li>

    </ul>


    
    <h2 className='font-bold text-lg'>Managing Anxiety Disorder Symptoms</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>These tips may help you control or lessen your symptoms:</p>
    <ul className=' text-sm  text-left tracking-tighter font-base '>

    <li>{'->'}Learn about your disorder. The more you know, the better prepared you will be to manage symptoms and roadblocks along the way. Don’t be afraid to ask your doctor any questions you might have. Remember, you are a key part of your health care team.</li>
    <li>{'->'}Stick to your treatment plan. Suddenly stopping your meds can cause unpleasant side effects and can even trigger anxiety symptoms.</li>
    <li>{'->'}Cut down on foods and drinks that have caffeine, such as coffee, tea, cola, energy drinks, and chocolate. Caffeine is a mood-altering drug, and it may make symptoms of anxiety disorders worse.</li>
    <li>{'->'}Don’t use alcohol and recreational street drugs. Substance abuse increases your risk of anxiety disorders.</li>
    <li>{'->'}Eat right and exercise. Brisk aerobic exercises like jogging and biking help release brain chemicals that cut stress and improve your mood.</li>
    <li>{'->'}Get better sleep. Sleep problems and anxiety disorder often go hand in hand. Make getting good rest a priority. Follow a relaxing bedtime routine. Talk to your doctor if you still have trouble sleeping.</li>
    <li>{'->'}Learn to relax. Stress management is an important part of your anxiety disorder treatment plan. Things like meditation, or mindfulness, can help you unwind after a stressful day and may make your treatment work better.</li>
    <li>{'->'}Keep a journal. Writing down your thoughts before the day is down may help you relax so you’re not tossing and turning with anxious thoughts all night.</li>
    <li>{'->'}Manage your negative thoughts. Thinking positive thoughts instead of worrisome ones can help reduce anxiety. This can be challenging if you have certain types of anxiety, however. Cognitive behavioral therapy can teach you how to redirect your thoughts.</li>
    <li>{'->'}Get together with friends. Whether it’s in person, on the phone, or the computer, social connections help people thrive and stay healthy. People who have a close group of friends that support and chat with them have lower levels of social anxiety.</li>
    <li>{'->'}Seek support. Some people find it helpful and uplifting to talk to others who are experiencing the same symptoms and emotions. Self-help or support groups let you share your concerns and achievements with others who are or who have been there.</li>
    <li>{'->'}Ask your doctor or pharmacist before taking any over-the-counter meds or herbal remedies. Many have chemicals that can make anxiety symptoms worse.</li>

    </ul>

    <div className='h-fit flex justify-center my-2'>
        <Image src={'/assets/anxiety.jpg'} alt={''} className='object-contain rounded-3xl md:hidden' width={320} height={160}/>
    </div>


    <h2 className='font-bold text-lg'>Anxiety Disorder Outlook</h2>

    <p className=' text-sm  text-left tracking-tighter font-base '>It can be challenging and frustrating to live with an anxiety disorder. The constant worry and fear can make you feel tired and scared. If you’ve talked to a doctor about your symptoms, then you’ve taken the first step toward letting go of the worry.</p>
    <p className=' text-sm  text-left tracking-tighter font-base '>It can take some time to find the right treatment that works for you. If you have more than one anxiety disorder, you may need several kinds of treatment. For most people with anxiety disorders, a combination of medicine and counseling is best. With proper care and treatment, you can learn how to manage your symptoms and thrive.</p>



    </div> 
    </section>
  )
}

export default page
