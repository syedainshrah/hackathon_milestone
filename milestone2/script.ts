//get reference to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement

//handle form submission
form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();


//collect input value 

const name =(document.getElementById('name') as HTMLInputElement).value
const email =(document.getElementById('email') as HTMLInputElement).value
const phone =(document.getElementById('phone') as HTMLInputElement).value
const education=(document.getElementById('education') as HTMLInputElement).value
const experience =(document.getElementById('experience') as HTMLInputElement).value
const skills=(document.getElementById('skills') as HTMLInputElement).value

// genrate the resume content dynamically

const resumeHTML =`
<h2><b>resume</b></h2>
<h3>personal information</h3>
<p><b>name:<b>${name}</p>
<p><b>email:<b>${email}</p>
<p><b>phone:<b>${phone}</p>

<h3>education</h3>
<p>${education}</p>

<h3>experience</h3>
<p>${experience}</p>

<h3>skills</h3>
<p>${skills}</p>
`

//display the genrated resume
if(resumedisplayElement){
    resumedisplayElement.innerHTML = resumeHTML
}else{
    console.error('the resume display element is missing.');
}
})