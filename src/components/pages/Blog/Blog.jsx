import React from 'react'
import meditation from "./meditation.png" 
import trauma from "./trauma.png"
import anxiety from "./anxiety.png"


function Blog() {
  return (
    
    <div className="flex flex-col justify-center items-center p-6 m-14">      
    <br/> 
    <img className= "justify-center rounded" src={meditation} alt="meditation"/> 
   <h1 className=''>MENTAL HEALTH AND TECHNOLOGY </h1>
   <br/> <br /> 
   <p className='text-base'>Technology and mental well-being might seem like profoundly antagonistic terms. However, there are excellent digital tools to help you reach mindfulness and to practice meditation. You can even use smartphone apps, virtual reality solutions and digital devices as a form of relieving stressing and achieving digital detox – as, after a while, you will be able to practice all types of anti-anxiety skills on your own. So, let The Medical Futurist show you how you can enhance your mental and emotional health with the help of technology. </p>
   <br/> 
   <h3 className='uppercase'>THE NEED FOR TAKING CARE OF OUR EMOTIONAL HEALTH </h3> 
   <p className='text-base space-x-0'>“Just as we observe physical hygiene to stay well, we need to cultivate a kind of emotional hygiene too,” wrote the Dalai Lama on his Twitter-feed. There are three crucial points around His Holiness’ statement. First and foremost, the popularity of health-enhancing, physically active lifestyle is soaring worldwide. Nevertheless, there’s always room for improvement: the WHO says that globally, 23 percent of adults and 81 percent of school-going adolescents are not active enough. According to the organization, adults aged 18-64 should do at least 150 minutes of moderately intense physical activity each week, which is not unaccomplishable. Moreover, the numerically and statistically driven 21st-century mind could take a great inspiration and power from the various fitness trackers and wearables.

</p> <p className='text-base space-x-0'>Secondly, emotional hygiene seems to be thrown into the shade nowadays. Somehow, the culture of busyness prevents us from squeezing some time for mental health into our packed schedules. Information is pouring on us from millions of communication channels; we are connecting with hundreds of ‘friends’ on social media, we are obsessed with data due to the fear of missing out and time management slices up our days into meetings and to-do-lists.

</p> <p className='text-base space-x-0'>The pressure to perform and the stress to achieve is the air every busy-bee is breathing. However, turbulent lifestyle comes with a price. No wonder so many people have mental health issues. In the US, that means one in five adults – more than 40 million Americans! On the old continent, 27 percent of the population has to cope with mental disorders, which means 83 million struggling Europeans. In Asia, the prevalence of depression is 20 percent in Thailand, 19.9 percent in Taiwan, 19.4 percent in Korea, 17.5 in Malaysia and 16.5 percent in China.</p> 
<br/> 
<h3 className='uppercase'>Sign up for The Healing blog</h3>
<h6 className='uppercase text-sm'>A weekly, ad-free Blog that helps you stay in the know.</h6>
<h3 className='uppercase'>Recommended for you</h3> 
<div className='flex flex-row'> <img className= "justify-center m-10 w-auto h-auto" title='HEAL FROM TRAUMA' src={trauma} alt="trauma"/><img className= "justify-center m-10 w-auto h-auto" src={anxiety} alt="anxiety"/> </div>
  </div>  
       
  ) 
} 
 
export default Blog   