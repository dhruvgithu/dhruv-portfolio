import Image from "next/image";

export default function Home(){

const projects=[
{
title:"Automatic Number Plate Recognition",
desc:"Real-time number plate detection using OpenCV and OCR.",
tech:"Python, OpenCV, EasyOCR",
link:"https://github.com/dhruvgithu"
},
{
title:"Multiple Disease Prediction System",
desc:"Machine learning web app for early disease diagnosis.",
tech:"TensorFlow, Scikit-learn, Django",
link:"https://github.com/dhruvgithu"
},
{
title:"Customer Churn Prediction",
desc:"ML model predicting customers likely to leave a service.",
tech:"Python, Django, TensorFlow",
link:"https://github.com/dhruvgithu"
},
{
title:"Sales Forecasting",
desc:"Predicts future sales using regression algorithms.",
tech:"Python, Scikit-learn",
link:"https://github.com/dhruvgithu"
}
]

return(
<div>

<nav className="fixed top-0 w-full flex justify-between p-5 bg-black/40 backdrop-blur">
<h1 className="font-bold text-xl">Dhruv Gahtori</h1>
<div className="space-x-6">
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</div>
</nav>

<section className="h-screen flex flex-col justify-center items-center text-center px-6">

<Image
src="/dhruv.jpg"
width={180}
height={180}
className="rounded-full border-4 border-blue-400"
/>

<h1 className="text-5xl font-bold mt-6">Dhruv Gahtori</h1>

<p className="text-xl text-blue-300">Engineering Professional</p>

<p className="max-w-xl mt-4">
I’m passionate about building intelligent systems that solve real world challenges using Artificial Intelligence and Machine Learning.
</p>

<a
href="/resume.pdf"
className="mt-6 bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
>
Download Resume
</a>

</section>

<section id="about" className="py-20 px-10 max-w-4xl mx-auto">

<h2 className="text-3xl font-bold mb-6">About Me</h2>

<p>
I am Dhruv Gahtori from Champawat, Uttarakhand and currently pursuing B.Tech in Computer Science and Engineering from Graphic Era Hill University Bhimtal (2022–2026).
</p>

<p className="mt-4">
My interests lie in Artificial Intelligence, Machine Learning, Data Structures and Algorithms and solving real world problems using technology.
</p>

</section>

<section id="projects" className="py-20 px-10">

<h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

{projects.map((p,i)=>(

<div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-xl font-bold">{p.title}</h3>

<p className="mt-3">{p.desc}</p>

<p className="text-blue-300 mt-2">{p.tech}</p>

<a
href={p.link}
className="inline-block mt-4 bg-blue-500 px-4 py-2 rounded"
>
View on GitHub
</a>

</div>

))}

</div>

</section>

<section id="contact" className="py-20 text-center">

<h2 className="text-3xl font-bold mb-6">Contact</h2>

<p>Email: dhruvgahtori00@gmail.com</p>
<p>Phone: 9639412318</p>

<div className="mt-4 space-x-6">
<a href="https://github.com/dhruvgithu">GitHub</a>
<a href="https://linkedin.com/in/dhruv-gahtori-8b7b56285">LinkedIn</a>
</div>

</section>

</div>
)
}